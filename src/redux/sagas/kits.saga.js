import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

//! get all kits from the DB
function* fetchAllKits() {
    console.log('are we here');
    try {
        const kit = yield axios.get('/api/kit');
        console.log('Get all:', kit.data);
        yield put({ type: 'SET_KITS', payload: kit.data });

    } catch (error)  {
        console.log('Error in fetchAllKits in kit.saga');
    }
}; // End fetchAllKits()


//! Fetch selected kit
//TODO Getting an error here 
function* fetchSelectedKit(action) {
    try {
        console.log(`Get this kit: ${action.payload}`);
        const selectedKit = yield axios.get(`/api/kit/selected?id=${action.payload}`);
        yield put({ type: 'SET_SELECTED_KIT', payload: { selectedKit: selectedKit.data[0] } })
    } catch (error){
        console.log(`Error in fetchSelectedKit in saga ${error}`)
    }
} // End fetchSelectedKit()


//TODO add all the things ~
function* kitSaga() {
    yield takeEvery('FETCH_KITS', fetchAllKits);
    yield takeEvery('EDIT_KIT', editKit)
    yield takeEvery('DELETE_KIT', deleteKit)
    yield takeEvery('FETCH_SELECTED_KIT', fetchSelectedKit);


}; //End kitSaga()


//! Edit kit
function* editKit(action) {
    try {
        yield axios.put(`/api/kit/edit?id=${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_KITS' });
    } catch (error) {
        console.log(`Error in editKit in saga ${error}`);
    }
} // End editKit

//! Delete Kit 
function* deleteKit(action) {
    try {
        yield axios.delete(`/api/kit/${action.payload}`)
        yield put({ type: 'FETCH_KITS' });
    } catch (error) {
        console.log(`Error in deleteKit in saga ${error}`);
    }
} // End deleteKit


export default kitSaga;