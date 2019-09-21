// Describing the shape of the system's slice of state
export interface UIState {
    isSidebarOpen: boolean;
}

// Describing the different ACTION NAMES available
export const SET_SIDEBAR_STATUS = 'SET_SIDEBAR_STATUS';
export const SET_SIDEBAR_STATUS_FAILURE = 'SET_SIDEBAR_STATUS_FAILURE';
export const SET_SIDEBAR_STATUS_SUCCESS = 'SET_SIDEBAR_STATUS_SUCCESS';

interface SetSidebarStatusAction {
    type: typeof SET_SIDEBAR_STATUS;
    payload: UIState;
}
interface SetSidebarStatusActionSuccess {
    type: typeof SET_SIDEBAR_STATUS_FAILURE;
    payload: UIState;
}
interface SetSidebarStatusActionFailure {
    type: typeof SET_SIDEBAR_STATUS_SUCCESS;
    payload: UIState;
}

export type UIActionTypes = SetSidebarStatusAction | SetSidebarStatusActionSuccess | SetSidebarStatusActionFailure;
