import { all, takeLatest } from 'redux-saga/effects';
import * as authTypes from '../store/auth/types';
import * as authSaga from './authSaga';
import * as startupSaga from './startupSaga';
import * as startupTypes from '../store/startup/types';
import * as projectSaga from './projectSaga';
import * as projectTypes from '../store/project/types';
import * as uiTypes from '../store/ui/types';
import * as uiSaga from './uiSaga';
import * as userTypes from '../store/user/types';
import * as userSaga from './userSaga';

// Register all your watchers
export const rootSaga = function* root() {
  yield all([
    // Startup
    takeLatest(startupTypes.STARTUP, startupSaga.startup),

    // Auth
    takeLatest(authTypes.USER_LOGIN, authSaga.requestUserLogin),
    takeLatest(authTypes.USER_GOOGLE_LOGIN, authSaga.requestGoogleLogin),
    takeLatest(authTypes.USER_REGISTER, authSaga.requestUserRegister),
    takeLatest(authTypes.CHECK_USER_AUTH_FIREBASE, authSaga.requestCheckUserAuthFirebase),
    takeLatest(authTypes.USER_LOGOUT, authSaga.requestUserLogout),
    takeLatest(authTypes.CHECK_USER_FEYNLAB, authSaga.requestCheckUserFeynlab),

    // Project
    takeLatest(projectTypes.GET_PROJECTS, projectSaga.requestGetProjects),
    takeLatest(projectTypes.GET_PROJECT_BY_ID, projectSaga.requestGetProjectById),
    takeLatest(projectTypes.GET_DEVICES, projectSaga.requestGetDevices),
    takeLatest(projectTypes.GET_DEVICE_BY_ID, projectSaga.requestGetDeviceById),
    takeLatest(projectTypes.GET_DEVICE_BY_ID_SUCCESS, projectSaga.requestGetDeviceTokens),
    takeLatest(projectTypes.GET_TRIGGERS, projectSaga.requestGetTriggers),
    takeLatest(projectTypes.GET_ACTIVITIES, projectSaga.requestGetActivities),
    takeLatest(projectTypes.GET_DEVICE_ACTIVITIES, projectSaga.requestGetDeviceActivities),
    takeLatest(projectTypes.GET_DEVICE_TOKENS, projectSaga.requestGetDeviceTokens),
    takeLatest(projectTypes.SAVE_PROJECT_SETTINGS, projectSaga.requestSaveProjectSettings),
    takeLatest(projectTypes.GET_DEVICE_BRANDS, projectSaga.requestGetDeviceBrands),
    takeLatest(projectTypes.ADD_DEVICE, projectSaga.requestAddDevice),
    takeLatest(projectTypes.GET_DEVICE_MODELS, projectSaga.requestGetDeviceModels),
    takeLatest(projectTypes.CREATE_PROJECT, projectSaga.requestCreateProject),
    takeLatest(projectTypes.DELETE_PROJECT, projectSaga.requestDeleteProject),

    // User
    takeLatest(userTypes.GET_USER_PROFILE, userSaga.requestGetUserProfile),

    // // UI
    takeLatest(uiTypes.SET_SIDEBAR_STATUS, uiSaga.requestSidebarOpen)
  ]);
};
