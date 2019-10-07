import { all, takeLatest } from 'redux-saga/effects';
import * as authTypes from '../store/auth/types';
import * as authSaga from './authSaga';
import * as startupSaga from './startupSaga';
import * as startupTypes from '../store/startup/types';
import * as projectSaga from './projectSaga';
import * as projectTypes from '../store/project/types';
import * as uiTypes from '../store/ui/types';
import * as uiSaga from './uiSaga';
import * as userSaga from './userSaga';
import * as userTypes from '../store/user/types';
import { REHYDRATE } from 'redux-persist';

// Register all your watchers
export const rootSaga = function* root() {
  yield all([
    // Startup
    takeLatest(startupTypes.STARTUP, startupSaga.startup),

    // Auth
    takeLatest(authTypes.USER_LOGIN, authSaga.requestUserLogin),
    takeLatest(
      [authTypes.USER_LOGIN_SUCCESS, authTypes.USER_REGISTER_SUCCESS, authTypes.CHECK_USER_AUTH_FIREBASE_SUCCESS],
      userSaga.requestGetUserProfile
    ),
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
    takeLatest(projectTypes.GET_DEVICE_ENTITIES, projectSaga.requestGetDeviceEntities),
    takeLatest(projectTypes.ADD_DEVICE_CHART, projectSaga.requestAddDeviceChart),
    takeLatest(projectTypes.GET_DEVICE_CHARTS, projectSaga.requestGetDeviceCharts),
    takeLatest(projectTypes.GET_DEVICE_CHARTS_DATA, projectSaga.requestGetDeviceChartsData),
    takeLatest(projectTypes.DELETE_DEVICE, projectSaga.requestDeleteDevice),
    takeLatest(projectTypes.SAVE_DEVICE_SETTINGS, projectSaga.requestSaveDeviceSettings),
    takeLatest(projectTypes.GET_DEVICE_CHART_BY_ID, projectSaga.requestGetDeviceChartById),
    takeLatest(projectTypes.DELETE_DEVICE_CHART_BY_ID, projectSaga.requestDeleteDeviceChartById),

    // Redux-Persist Watcher
    takeLatest(REHYDRATE, authSaga.requestCheckPersistError),

    // UI
    takeLatest(uiTypes.SET_SIDEBAR_STATUS, uiSaga.requestSidebarOpen),

    // User
    takeLatest(userTypes.GET_USER_PROFILE, userSaga.requestGetUserProfile)
  ]);
};
