/**
 * This reducer applies a query state change if the action type matches.
 * Default state: empty string.
 */
export default (state = "", action) => {
    switch (action.type) {
        case 'SET_QUERY':
            return action.payload;
        default:
            return state;
    };
};