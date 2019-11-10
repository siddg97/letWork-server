import { SET_BUGS, BUG_LOADING, SET_BUG } from '../actions/types.js';

const initialState = {
	bugList: [],
	loading: false
};

export default function(state = initialState, action) {
	switch(action.type) {
		case SET_BUGS:
			return {
				...state,
				bugList: action.payload
			};
		case BUG_LOADING:
			return {
				...state,
				loading: true
			};
		case SET_BUG:
			return {
				...state,
				bugList: [...state.bugList, action.payload]
			}
		default:
			return state;
	}
}
