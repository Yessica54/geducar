import {GETPOSTS, GETUSERS, GETCOMMENTS} from './type';
import DataRepository from './../../../DataRepository';

export const getUsers = () => async dispatch =>
	dispatch({ type: GETUSERS, payload: await DataRepository.getUsers() });

export const getPosts = (idUser) => async dispatch =>
	dispatch({ type: GETPOSTS, payload: await DataRepository.getPosts(idUser)});

export const getComments = (idPost) => async dispatch =>
	dispatch({ type: GETCOMMENTS, payload: await DataRepository.getComments(idPost)});

export default {
	getUsers,
	getPosts,
	getComments
};
