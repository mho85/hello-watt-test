/**
 * This reducer applies a client state change if the action type matches.
 * Default state: empty object.
 */
export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_CLIENT':
            return action.payload;
        default:
            return state;
    };
};