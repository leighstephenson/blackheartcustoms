import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

//! get all kits from the DB
function* fetchAllKits() {
    console.log('are we here in fetchAllKits?');
    try {
        const kit = yield axios.get('/api/kit');
        console.log('Get all:', kit.data);
        yield put({ type: 'SET_KITS', payload: kit.data });

    } catch (error) {
        console.log('Error in fetchAllKits in kit.saga');
    }
}; // End fetchAllKits()


//! Fetch selected kit
function* fetchSelectedKit(action) {
    try {
        console.log(`Got this kit, id = ${action.payload}`);
        const selectedKit = yield axios.get(`/api/kit/selected/${action.payload}`);
        yield put({ type: 'SET_SELECTED_KIT', payload: { selectedKit: selectedKit.data[0] } })
    } catch (error) {
        console.log(`Error in fetchSelectedKit in saga ${error}`)
    }
} // End fetchSelectedKit()


//! Edit kit
// This is not updating for some reason
function* editKit(action) {
    console.log('here', action.payload)
    try {
        yield axios.put(`/api/kit/edit`, action.payload);
        yield put({ type: 'FETCH_KITS' });
    } catch (error) {
        console.log(`Error in editKit in saga ${error}`);
    }
} // End editKit

//! ADD new kit
function* addNewKit(action) {
    try {        
        console.log('leigh', action.payload);
        yield axios.post('/api/kit', action.payload);
        yield put({ type: 'FETCH_KITS' });
    } catch (error) {
        console.log(`Error in addNewKit in saga`, error);
    }
}

//! Delete Kit 
function* deleteKit(action) {
    try {
        yield axios.delete(`/api/kit/${action.payload}`)
        yield put({ type: 'FETCH_KITS' });
    } catch (error) {
        console.log(`Error in deleteKit in saga ${error}`);
    }
} // End deleteKit

//TODO add all the things ~
function* kitSaga() {
    yield takeEvery('FETCH_KITS', fetchAllKits);
    yield takeEvery('EDIT_KIT', editKit)
    yield takeEvery('DELETE_KIT', deleteKit)
    yield takeEvery('FETCH_SELECTED_KIT', fetchSelectedKit);
    yield takeEvery('ADD_NEW_KIT', addNewKit)


}; //End kitSaga()


export default kitSaga;