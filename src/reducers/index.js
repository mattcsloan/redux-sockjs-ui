import { combineReducers } from 'redux';
import session from './sessionReducer';
import messages from './messageReducer';
import users from './usersReducer';

const appReducer = combineReducers({
  session,
	messages,
	users
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_REQUEST') {
    state = undefined;
  }

  return appReducer(state, action)
};

export default rootReducer;
