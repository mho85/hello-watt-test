import { combineReducers } from 'redux';
import clientsReducer from './clientsReducer';
import queryReducer from './queryReducer';

export default combineReducers({
    clients: clientsReducer,
    query: queryReducer
});