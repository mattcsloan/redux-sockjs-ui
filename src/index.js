import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

// import { wsMiddleware } from './middleware/wsMiddleware';

import RootRouter from './routes';
import './index.css';

import DevTools from './containers/DevTools';

import { addUser } from './actions/chatActions';

const isProduction = process.env.NODE_ENV === 'production';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

let store;

if (isProduction) {
	store = createStoreWithMiddleware(rootReducer);
}
else {
	/**
	 * Only use the DevTools component
	 * when in development.
	 */
	const enhancer = DevTools.instrument();

	store = createStoreWithMiddleware(rootReducer, enhancer);
}

// register ourselves as present in the chat
store.dispatch(addUser('Me'));

render(
  <Provider store={store}>
	  <div>
			<RootRouter />
			{!isProduction && <DevTools />}
	  </div>
  </Provider>,
  document.getElementById('app'),
);
