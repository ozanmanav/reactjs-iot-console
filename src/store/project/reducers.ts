import {
    ProjectActionTypes,
    GET_PROJECTS,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE,
    ProjectState,
    GET_PROJECT_BY_ID,
    GET_PROJECT_BY_ID_SUCCESS,
    GET_PROJECT_BY_ID_FAILURE,
    GET_DEVICES,
    GET_DEVICES_SUCCESS,
    GET_DEVICES_FAILURE,
} from './types';

const initialState: ProjectState = {
    loading: { projects: false, currentProject: false, devices: false },
    projects: [],
    devices: [],
    currentProject: undefined,
    error: undefined,
};

export function projectReducer(state = initialState, action: ProjectActionTypes): ProjectState {
    switch (action.type) {
        case GET_PROJECTS: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case GET_PROJECTS_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case GET_PROJECTS_FAILURE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case GET_PROJECT_BY_ID: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    currentProject: true,
                },
                devices: [],
            };
        }
        case GET_PROJECT_BY_ID_SUCCESS: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    currentProject: false,
                },
                currentProject: action.payload,
            };
        }
        case GET_PROJECT_BY_ID_FAILURE: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    currentProject: false,
                },
                currentProject: action.payload,
            };
        }
        case GET_DEVICES: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    devices: true,
                },
                devices: [],
            };
        }
        case GET_DEVICES_SUCCESS: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    devices: false,
                },
                ...action.payload,
            };
        }
        case GET_DEVICES_FAILURE: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    devices: false,
                },
            };
        }
        default:
            return state;
    }
}