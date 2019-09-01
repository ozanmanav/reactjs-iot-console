import { all, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN, CHECK_USER, USER_LOGOUT } from '../store/auth/types';
import { requestUserLogin, checkUserAuth, requestUserLogout } from './authSaga';
import { startup } from './startupSaga';
import { STARTUP } from '../store/startup/types';
import { requestGetProjects } from './projectSaga';
import { GET_PROJECTS } from '../store/project/types';

// Register all your watchers
export const rootSaga = function* root() {
    yield all([
        // Startup
        takeLatest(STARTUP, startup),

        // Auth
        takeLatest(USER_LOGIN, requestUserLogin),
        takeLatest(CHECK_USER, checkUserAuth),
        takeLatest(USER_LOGOUT, requestUserLogout),

        // Project
        takeLatest(GET_PROJECTS, requestGetProjects),
    ]);
};
