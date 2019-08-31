import { all, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN } from '../store/auth/types';
import { requestUserLogin } from './authSaga';

// Register all your watchers
export const rootSaga = function* root() {
    yield all([takeLatest(USER_LOGIN, requestUserLogin)]);
};
