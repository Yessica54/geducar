
import {GETCOMMENTS, GETPOSTS, GETUSERS} from './type';
import initialState from './initial';

const data = (state = initialState, action) => {
	switch (action.type) {
		case GETUSERS:
			return {...state, users: action.payload};
		case GETPOSTS:
			return {...state, posts: action.payload};
		case GETCOMMENTS:
			return {...state, comments: action.payload};
		default:
			return state;
	}
};

export default {data};
