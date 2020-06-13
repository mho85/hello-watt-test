import ClientService from '../api/ClientService';

export const fetchClients = (query, page) => {

    return async (dispatch) => {
        let url = "/api/search-clients";

        if (query && page) {
            url += `?query=${query}&&page=${page}`;
        } else if (query) {
            url += `?query=${query}`;
        } else {
            url += `?page=${page}`;
        }

        const response = await ClientService.get(url);

        dispatch({
            type: 'FETCH_CLIENTS',
            payload: response.data
        });
    };

};

export const fetchClient = (id) => {
    return async (dispatch) => {

        const response = await ClientService.get(`/api/search-clients?query=${id}`);
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