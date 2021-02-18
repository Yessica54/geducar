import {CREATE, RESET} from './type';

export const errorCreate = exception => dispatch => {
	dispatch({type: CREATE, payload: exception});
};

export const errorReset = () => dispatch => {
	dispatch({type: RESET});
};

export default {
	errorCreate,
	errorReset
};
