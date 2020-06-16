/**
 * This reducer applies a state (i.e. the client list) change if the action type matches.
 * Default state: empty array.
 */
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CLIENTS':
            return action.payload;
        default:
            return state;
    };
};