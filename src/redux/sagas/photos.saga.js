import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

    function * uploadPhoto(action){
        try {
            const selectedFile= action.payload.selectedFile
            const kitId= action.payload.kitId
            const fileName = encodeURIComponent(selectedFile.name);
            const formData = new FormData();
            formData.append('image', selectedFile);
            yield axios.post(`api/photos?name=${fileName}&kitId=${kitId}`, formData);
        } catch (error) {
            console.log('Error in uploadPhoto in photos.saga')
        }
    }; // End uploadPhoto()

//! Fetch cover photos for home page
//TODO not using either of these in component right now, getting photos from-
//TODO -the kit router.
function* fetchCoverPhotos() {
    console.log('we are here in fetchCoverPhotos');
    try {
        const photos = yield axios.get('/api/photos');
        yield put({ type: 'SET_COVER_PHOTOS', payload: photos.data });
    } catch (error)  {
        console.log('Error in fetchCoverPhotos in photos.saga');
    }
}; // End fetchCoverPhotos()


//! Fetch selected kit's photos
function* fetchSelectedPhotos(action) {
    try {
        console.log(`Get this photo: ${action.payload}`);
        
        const selectedPhotos = yield axios.get(`/api/photos/selected?id=${action.payload}`);
        yield put({ type: 'SET_SELECTED_PHOTOS', payload: { selectedPhotos: selectedPhotos.data } })
    } catch (error){
        console.log(`Error in fetchSelectedPhotos in saga ${error}`)
    }
} // End fetchPhoto()



//TODO add all the things ~
function* photosSaga() {
     yield takeEvery('FETCH_COVER_PHOTOS', fetchCoverPhotos);
     yield takeEvery('FETCH_SELECTED_PHOTOS', fetchSelectedPhotos);
     yield takeEvery('UPLOAD_PHOTO', uploadPhoto);

}; //End photosSaga()

export default photosSaga;