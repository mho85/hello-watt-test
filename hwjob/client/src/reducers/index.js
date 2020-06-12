import { combineReducers } from 'redux';
import clientsReducer from './clientsReducer';
import queryReducer from './queryReducer';
import pageReducer from './pageReducer';

export default combineReducers({
    clients: clientsReducer,
    query: queryReducer,
    page: pageReducer
});