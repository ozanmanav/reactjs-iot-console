import { all, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN, CHECK_USER, USER_LOGOUT } from '../store/auth/types';
import { requestUserLogin, checkUserAuth, requestUserLogout } from './authSaga';
import { startup } from './startupSaga';
import { STARTUP } from '../store/startup/types';
import { requestGetProjects, requestGetProjectById, requestGetDevices } from './projectSaga';
import { GET_PROJECTS, GET_PROJECT_BY_ID, GET_DEVICES } from '../store/project/types';
import { SET_SIDEBAR_STATUS } from '../store/ui/types';
import { requestSidebarOpen } from './uiSaga';

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
        takeLatest(GET_PROJECT_BY_ID, requestGetProjectById),
        takeLatest(GET_DEVICES, requestGetDevices),

        // // UI
        takeLatest(SET_SIDEBAR_STATUS, requestSidebarOpen),
    ]);
};
