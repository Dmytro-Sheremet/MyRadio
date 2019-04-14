import axios from 'axios';

import {
	GET_CHANNELS,
	ADD_CHANNEL,
	DELETE_CHANNEL,
	CHANNELS_LOADING,
	GET_ERRORS,
	CLEAR_ERRORS,
	CLEAR_INPUT
} from './types';

export const getChannels = () => dispatch => {
	dispatch(setChannelsLoading());

	axios
		.get('/channels')
		.then(res =>
			dispatch({
				type: GET_CHANNELS,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_CHANNELS,
				// payload: err.data //?
				payload: null //?
			})
		);
};

export const addChannel = channelData => dispatch => {
	axios
		.post('/channels', channelData)
		.then(res =>
			dispatch({
				type: ADD_CHANNEL,
				payload: res.data
			})
		)
		.then(res =>
			dispatch({
				type: CLEAR_INPUT
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

export const deleteChannel = id => dispatch => {
	axios.delete(`/channels/${id}`).then(res =>
		dispatch({
			type: DELETE_CHANNEL,
			payload: id
		})
	);
};

export const setChannelsLoading = () => {
	return {
		type: CHANNELS_LOADING
	};
};

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
