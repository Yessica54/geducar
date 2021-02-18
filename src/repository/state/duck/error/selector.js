
export const getException = state => state.error.description;
export const isException = state => state.error.description !== null;


export default {
	getException,
	isException
};
