import { all, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN, CHECK_USER } from '../store/auth/types';
import { requestUserLogin, checkUserAuth } from './authSaga';
import { startup } from './startupSaga';
import { STARTUP } from '../store/startup/types';

// Register all your watchers
export const rootSaga = function* root() {
    yield all([
        // Run the startup saga when the application starts
        takeLatest(STARTUP, startup),

        takeLatest(USER_LOGIN, requestUserLogin),
        takeLatest(CHECK_USER, checkUserAuth),
    ]);
};
