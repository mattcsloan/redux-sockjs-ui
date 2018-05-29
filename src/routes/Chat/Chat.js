import React, { Component } from 'react';
import s from './Chat.css';

import MainSidebar from '../../containers/MainSidebar';
import MainContent from '../../components/MainContent';

import SockJS from 'sockjs-client';
import Stomp from '@stomp/stompjs';

const apiRequestMap = {};

class Chat extends Component {

	constructor(props) {
		super(props);
		this.state = {
			client: null,
			connected: false,
			messages: [],
			requestId: 1
		};
	};

	componentDidMount() {
		this.connect();
	}

	componentWillUnmount() {
		this.disconnect();
	}

	setConnected = connected => {
		this.setState({ connected });
	}

	isConnected = () => {
		return this.state.connected;
	}

	connect = () => {
		let ws = new SockJS('/v1/connect');
		let stompClient = Stomp.over(ws);
		this.setState({ client: stompClient });
		let _this = this;

		stompClient.connect({}, function (frame) {
			_this.setConnected(true);
			console.log('Connected: ' + frame);

			stompClient.subscribe('/user/exchange/amq.direct/chat.messages', function (message) {
				console.log("************** subscribed message **************", message);
			});

			stompClient.subscribe('/user/exchange/amq.direct/apiResponses', function (message) {
				console.log("************** subscribed apiResponses **************", message);
				const requestId = message.headers['request-id'];
				const callback = apiRequestMap[requestId];
				callback(requestId, message.body);
				delete apiRequestMap[requestId];
			});
		});
	}

	disconnect = () => {
		console.log("DISCONNECTING NOW!!!!")
		let stompClient = this.state.client;
		if (stompClient !== null) {
			stompClient.disconnect();
			this.setConnected(false);
		}
	}

	render () {
		const { client, messages } = this.state;
		return (
			<div className={s.pageItem}>
				<p>Testing</p>
				<MainSidebar />
				<MainContent
					connected={this.isConnected}
					client={client}
					messages={messages}
				/>
			</div>
		)
	};
}

export default Chat;






