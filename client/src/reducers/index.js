import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import message from './message';
import conversation from './conversation';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  message,
  conversation
});
