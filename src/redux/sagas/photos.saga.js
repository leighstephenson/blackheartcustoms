import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


//! Fetch cover photos for home page
//TODO this needs some work..
function* fetchCoverPhotos() {
    console.log('we are here in fetchCoverPhotos');
    try {
        const photos = yield axios.get('/api/photos');
        console.log('Get photos:', photos.data);
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



}; //End photosSaga()

export default photosSaga;