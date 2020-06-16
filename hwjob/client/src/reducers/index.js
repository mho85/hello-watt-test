import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import clientsReducer from './clientsReducer';
import queryReducer from './queryReducer';
import pageReducer from './pageReducer';

/**
 * Combines all existing reducers
 */
export default combineReducers({
    client: clientReducer,
    clients: clientsReducer,
    query: queryReducer,
    page: pageReducer
});