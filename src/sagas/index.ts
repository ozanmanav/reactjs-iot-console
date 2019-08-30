import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { USER_LOGIN } from '../store/auth/types';

// Register all your watchers
export const rootSaga = function* root() {
    yield all([fork(watchUserLoginRequest)]);
};

function* watchUserLoginRequest() {
    yield takeEvery(USER_LOGIN, requestUserLogin);
}

function* requestUserLogin(data: any) {
    console.log(data);
    console.log('girişi izliyorum hocam kaçamazsın :D');
    yield null;
}
