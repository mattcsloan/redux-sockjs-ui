import React, { Component } from 'react';
import s from './Home.css';

import Header from '../../components/Header';

class Home extends Component {
	render() {
		return (
				<div>
					<Header />
					<div className={s.home}>
						<p>Home</p>
					</div>
				</div>
		);
	}
}

export default Home;
