
// Used to store kits returned from the server
const kits = (state = [], action) => {
    switch (action.type) {
        case 'SET_KITS':
            return action.payload;
        default:
            return state;
    }
};

export default kits;