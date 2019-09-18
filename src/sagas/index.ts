import { all, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN, CHECK_USER, USER_LOGOUT, USER_REGISTER, USER_GOOGLE_LOGIN } from '../store/auth/types';
import { requestUserLogin, checkUserAuth, requestUserLogout, requestUserRegister, requestGoogleLogin } from './authSaga';
import { startup } from './startupSaga';
import { STARTUP } from '../store/startup/types';
import {
    requestGetProjects,
    requestGetProjectById,
    requestGetDevices,
    requestGetTriggers,
    requestGetActivities,
    requestGetDeviceById,
    requestGetDeviceActivities,
    requestGetDeviceTokens,
    requestSaveProjectSettings,
    requestGetDeviceBrands,
    requestAddDevice,
    requestGetDeviceModels,
} from './projectSaga';
import {
    GET_PROJECTS,
    GET_PROJECT_BY_ID,
    GET_DEVICES,
    GET_TRIGGERS,
    GET_ACTIVITIES,
    GET_DEVICE_BY_ID,
    GET_DEVICE_ACTIVITIES,
    GET_DEVICE_TOKENS,
    GET_DEVICE_BY_ID_SUCCESS,
    SAVE_PROJECT_SETTINGS,
    GET_DEVICE_BRANDS,
    ADD_DEVICE,
    GET_DEVICE_MODELS,
} from '../store/project/types';
import { SET_SIDEBAR_STATUS } from '../store/ui/types';
import { requestSidebarOpen } from './uiSaga';

// Register all your watchers
export const rootSaga = function* root() {
    yield all([
        // Startup
        takeLatest(STARTUP, startup),

        // Auth
        takeLatest(USER_LOGIN, requestUserLogin),
        takeLatest(USER_GOOGLE_LOGIN, requestGoogleLogin),
        takeLatest(USER_REGISTER, requestUserRegister),
        takeLatest(CHECK_USER, checkUserAuth),
        takeLatest(USER_LOGOUT, requestUserLogout),

        // Project
        takeLatest(GET_PROJECTS, requestGetProjects),
        takeLatest(GET_PROJECT_BY_ID, requestGetProjectById),
        takeLatest(GET_DEVICES, requestGetDevices),
        takeLatest(GET_DEVICE_BY_ID, requestGetDeviceById),
        takeLatest(GET_DEVICE_BY_ID_SUCCESS, requestGetDeviceTokens),
        takeLatest(GET_TRIGGERS, requestGetTriggers),
        takeLatest(GET_ACTIVITIES, requestGetActivities),
        takeLatest(GET_DEVICE_ACTIVITIES, requestGetDeviceActivities),
        takeLatest(GET_DEVICE_TOKENS, requestGetDeviceTokens),
        takeLatest(SAVE_PROJECT_SETTINGS, requestSaveProjectSettings),
        takeLatest(GET_DEVICE_BRANDS, requestGetDeviceBrands),
        takeLatest(ADD_DEVICE, requestAddDevice),
        takeLatest(GET_DEVICE_MODELS, requestGetDeviceModels),

        // // UI
        takeLatest(SET_SIDEBAR_STATUS, requestSidebarOpen),
    ]);
};
