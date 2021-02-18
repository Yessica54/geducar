import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './duck';

export default createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));