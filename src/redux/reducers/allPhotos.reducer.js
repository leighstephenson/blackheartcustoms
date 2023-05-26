// Used to store photos 
const allPhotos = (state = [], action) => {
    switch (action.type) {
        case 'SET_COVER_PHOTOS':
            return action.payload;
        default:
            return state;
    }
};

export default allPhotos;