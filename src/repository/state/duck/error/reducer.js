
import {CREATE, RESET} from './type';
import initialState from './initial';

const error = (state = initialState, action) => {
	switch (action.type) {
		case CREATE:
			return {...state, description: action.payload};
		case RESET:
			return {...state, ...initialState};
		default:
			return state;
	}
};

export default {error};
