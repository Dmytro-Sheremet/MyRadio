import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import channelsReducer from './channelsReducer';
import toolsReducer from './toolsReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	channels: channelsReducer,
	tools: toolsReducer
});
