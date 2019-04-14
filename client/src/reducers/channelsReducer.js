import { GET_CHANNELS, ADD_CHANNEL, DELETE_CHANNEL, CHANNELS_LOADING } from '../actions/types';

const initialState = {
	channels: [],
	loading: false
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_CHANNELS:
			return {
				...state,
				channels: action.payload,
				// channels: payload,
				loading: false
			};

		case ADD_CHANNEL:
			return {
				...state,
				// channels: [payload.channels, ...state.channels]
				channels: action.payload
			};
		case DELETE_CHANNEL:
			return {
				...state,
				channels: state.channels.filter(channel => channel._id !== payload)
			};

		case CHANNELS_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
}
