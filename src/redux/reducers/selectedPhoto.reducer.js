// Photo to display when users click 
// return an object?
const selectedPhotos = (state = {}, action) => {
    if (action.type === 'SET_SELECTED_PHOTOS') {
        return action.payload
    }
    return state
};

export default selectedPhotos;