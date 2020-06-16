/**
 * This reducer applies a page state change if the action type matches.
 * Default state: page 1.
 */
export default (state = 1, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return action.payload;
        default:
            return state;
    };
};