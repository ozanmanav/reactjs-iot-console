import {
    SET_SIDEBAR_STATUS,
    UIState,
    UIActionTypes,
    SET_SIDEBAR_STATUS_SUCCESS,
    SET_SIDEBAR_STATUS_FAILURE
} from './types';

export const UIInitialState: UIState = {
    isSidebarOpen: true
};

export function uiReducer(state = UIInitialState, action: UIActionTypes): UIState {
    switch (action.type) {
        case SET_SIDEBAR_STATUS: {
            return {
                ...state,
                isSidebarOpen: action.payload.isSidebarOpen
            };
        }
        case SET_SIDEBAR_STATUS_SUCCESS: {
            return {
                ...state,
                isSidebarOpen: action.payload.isSidebarOpen
            };
        }
        case SET_SIDEBAR_STATUS_FAILURE: {
            return {
                ...state,
                isSidebarOpen: action.payload.isSidebarOpen
            };
        }
        default:
            return state;
    }
}
