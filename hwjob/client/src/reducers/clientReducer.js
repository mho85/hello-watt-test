export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_CLIENT':
            return action.payload;
        default:
            return state;
    };
};