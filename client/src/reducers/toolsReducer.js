import { CLEAR_INPUT } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
	const { type } = action;
	switch (type) {
		case CLEAR_INPUT:
			return {
				...state,
				clearInput: true
			};
		default:
			return state;
	}
}
