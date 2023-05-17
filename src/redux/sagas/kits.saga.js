import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchAllKits() {
    // get all kits from the DB
    try {
        const kit = yield axios.get('/api/kit');
        console.log('Get all:', kit.data);
        yield put({ type: 'SET_KITS', payload: kit.data });

    } catch {
        console.log('Error in fetchAllKits in kit.saga');
    }
}

function* kitSaga() {
    yield takeEvery('FETCH_KITS', fetchAllKits);
};

export default kitSaga;