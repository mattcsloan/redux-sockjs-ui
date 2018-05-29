import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import DevTools from './containers/DevTools';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(
  	rootReducer,
	  initialState,
	  DevTools.instrument()
  );
};
