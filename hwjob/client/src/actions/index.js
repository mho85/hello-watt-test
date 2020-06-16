// Modules
import ServerService from '../api/ServerService';

// Constants, variables
const searchClientURI = "/search-clients";

/**
 * fetchClients fetches a list of clients (based on below criteria) and dispatches an action to the reducer.
 * @param {*} query 
 * @param {*} page 
 */
export const fetchClients = (query, page) => {

    return async (dispatch) => {
        let q;

        if (query && page) {
            q = `?query=${query}&&page=${page}`;
        } else if (query) {
            q = `?query=${query}`;
        } else {
            q = `?page=${page}`;
        }

        const response = await ServerService.get(`${searchClientURI}${q}`);

        dispatch({
            type: 'FETCH_CLIENTS',
            payload: response.data
        });
    };

};

/**
 * fetchClient fetches a client's data (based on his/her ID) and dispatches an action to the reducer.
 * @param {*} id 
 */
export const fetchClient = (id) => {
    return async (dispatch) => {

        const response = await ServerService.get(`${searchClientURI}?query=${id}`);
        const selectedUser = response.data.clients.find(c => c.id === id);
        // console.log("FETCH_CLIENT - selectedUser: ", selectedUser);


        dispatch({
            type: 'FETCH_CLIENT',
            payload: selectedUser
        });
    };
};

/**
 * setQuery returns an action (payload: query) to the reducer
 * @param {*} q 
 */
export const setQuery = (q) => {
    return {
        type: 'SET_QUERY',
        payload: q
    }
}

/**
 * setPage returns an action (payload: page) to the reducer
 * @param {*} page 
 */
export const setPage = (page) => {
    return {
        type: 'SET_PAGE',
        payload: page
    }
}