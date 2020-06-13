import ServerService from '../api/ServerService';

const searchClientURI = "/search-clients";

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

export const setQuery = (q) => {
    return {
        type: 'SET_QUERY',
        payload: q
    }
}

export const setPage = (page) => {
    return {
        type: 'SET_PAGE',
        payload: page
    }
}