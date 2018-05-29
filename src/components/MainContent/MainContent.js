import React, { Component } from 'react';
import s from './MainContent.css';

import MessagesList from '../../containers/MessagesList';
import AddMessage from '../../containers/AddMessage';

const apiRequestMap = {};

class MainContent extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	client: props.client,
		// 	message: '',
		// 	messages: props.messages,
		// 	requestId: 0
		// };
	};

	// componentDidUpdate() {
	// 	this.state.client && this.showMessages();
	// }
	//
	// sendMessageToUsersCallback = (req, message) => {
	// 	console.log("sendMessageToUsersCallback -> chatId: " + message.body);
	// };
	//
	// getMessagesCallback = (reqId, responseBody) => {
	// 	const json = JSON.parse(responseBody);
	// 	const arrOfMessages = json.messages;
	// 	console.log('inside getMessagesCallback');
	// 	console.log('json', json);
	// 	if(json.successful){
	// 		for(var i=0; i <arrOfMessages.length; i++){
	// 			console.log('message (' + (i) + '): ' + arrOfMessages[i].content);
	// 			this.setState({
	// 				messages: [...this.state.messages, arrOfMessages[i].content]
	// 			})
	// 		}
	// 	}
	// };
	//
	// sendMessage = e => {
	// 	e.preventDefault();
	//
	// 	let requestId = 1;
	// 	let chatId = 1;
	// 	let message = this.state.message + " (message.sendToUsers)";
	// 	let stompClient = this.props.client;
	//
	// 	apiRequestMap[requestId] = this.sendMessageToUsersCallback;
	// 	stompClient.send("/app/v1/message.sendToChat", { 'request-id': requestId++ }, JSON.stringify({
	// 		chatId,
	// 		message: {
	// 			content: message,
	// 			contentType: 'plain/text',
	// 			timeSent: Date.now()
	// 		}
	// 	}));
	//
	// 	this.setState({
	// 		message: '',
	// 		messages: [...this.state.messages, this.state.message]
	// 	});
	// }
	//
	// showMessages = () => {
	// 	console.log("**************************** showMessages ****************************", this.state.messages);
	// 	let stompClient = this.props.client;
	// 	let requestId = 1;
	// 	let chatId = 1;
	//
	// 	apiRequestMap[requestId] = this.getMessagesCallback;
	// 	stompClient.send("/app/v1/messages.get", { 'request-id': requestId++ }, JSON.stringify({ chatId: chatId,
	// 		startId: 0, limit: 0
	// 	}));
	//
	// }
	//
	// handleChange = event => {
	// 	this.setState({ [event.target.name]: event.target.value });
	// }

	render () {
		// const { message, messages } = this.state;
		// const { connected } = this.props;
		return (
				<div className={s.mainContent}>
					{/*{!connected && <button onClick={this.connect}>Connect</button>}*/}
					{/*{connected && <button onClick={this.disconnect}>Disconnect</button>}*/}
					{/*{connected && <button onClick={this.showMessages}>Show Messages</button>}*/}

					{/*{connected &&*/}
						{/*<form className={s.chatForm} onSubmit={this.sendMessage}>*/}
							{/*<input*/}
								{/*name="message"*/}
								{/*type="text"*/}
								{/*placeholder="Enter message ..."*/}
								{/*value={message}*/}
								{/*onChange={this.handleChange}*/}
							{/*/>*/}
							{/*<button onClick={this.sendMessage}>Submit</button>*/}
						{/*</form>*/}
					{/*}*/}
					{/*<hr />*/}
					{/*<div>*/}
						{/*{messages.map((e,i) => {*/}
							{/*return <p key={i}>{e}</p>;*/}
						{/*})}*/}
					{/*</div>*/}

					<MessagesList />
					<AddMessage />

				</div>
		);
	}
}

export default MainContent;
