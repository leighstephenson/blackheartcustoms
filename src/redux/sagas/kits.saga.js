import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

//! Get all kits from the DB
function* fetchAllKits() {
    try {
        const kit = yield axios.get('/api/kit');
        yield put({ type: 'SET_KITS', payload: kit.data });
    } catch (error) {
        console.log('Error in fetchAllKits in kit.saga');
    }
}

//! Fetch selected kit
function* fetchSelectedKit(action) {
    try {
        const selectedKit = yield axios.get(`/api/kit/selected/${action.payload}`);
        yield put({ type: 'SET_SELECTED_KIT', payload: selectedKit.data[0] })
    } catch (error) {
        console.log(`Error in fetchSelectedKit in saga ${error}`)
    }
} 

//! Edit kit
function* editKit(action) {
    try {
        yield axios.put(`/api/kit/edit`, action.payload);
        yield put({ type: 'FETCH_KITS' });
    } catch (error) {
        console.log(`Error in editKit in saga ${error}`);
    }
} 

//! Add new kit
function* addNewKit(action) {
    try {        
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
} 

function* kitSaga() {
    yield takeEvery('FETCH_KITS', fetchAllKits);
    yield takeEvery('EDIT_KIT', editKit)
    yield takeEvery('DELETE_KIT', deleteKit)
    yield takeEvery('FETCH_SELECTED_KIT', fetchSelectedKit);
    yield takeEvery('ADD_NEW_KIT', addNewKit)
}; //End kitSaga()

export default kitSaga;