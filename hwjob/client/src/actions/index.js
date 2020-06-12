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
        // console.log("Action-response: ", response);

        dispatch({
            type: 'FETCH_CLIENTS',
            payload: response.data
        });
    };

};

export const setQuery = (q) => {
    return {
        type: 'SET_QUERY',
        payload: q
    }
}