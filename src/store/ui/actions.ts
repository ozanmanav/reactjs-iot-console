import { SET_SIDEBAR_STATUS, SET_SIDEBAR_STATUS_SUCCESS, SET_SIDEBAR_STATUS_FAILURE } from './types';

export function setSidebarStatus(isSidebarOpen: boolean) {
    return {
        type: SET_SIDEBAR_STATUS,
        payload: { isSidebarOpen },
    };
}

export function setSidebarStatusSuccess(isSidebarOpen: boolean) {
    return {
        type: SET_SIDEBAR_STATUS_SUCCESS,
        payload: { isSidebarOpen },
    };
}

export function setSidebarStatusFailure(isSidebarOpen: boolean) {
    return {
        type: SET_SIDEBAR_STATUS_FAILURE,
        payload: { isSidebarOpen },
    };
}
