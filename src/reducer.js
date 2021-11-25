const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return ++state;
        case 'DEC':
            return --state;
        case 'RNDINC':
            return state + action.payload;
        case 'RNDDEC':
            return state - action.payload;
        default:
            return state;
    }
};

export default reducer;