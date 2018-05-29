import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import Chat from './Chat';

let loggedIn = true;
const AuthRoute = ({ loggedIn, ...rest }) =>
loggedIn ?
<Route {...rest}/> :
<Redirect to={{ pathname: '/home', state: { from: rest.location }}}/>

const RootRouter = ({ loggedIn }) =>
<Router>
<Switch>
<AuthRoute loggedIn={loggedIn} exact path="/" component={Chat} />
<Route loggedIn={loggedIn} path="/home" component={Home} />
</Switch>
</Router>

export default connect(
	state => ({ loggedIn: true })
)(RootRouter);
