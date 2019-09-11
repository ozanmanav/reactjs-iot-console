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
    GET_TRIGGERS,
    GET_TRIGGERS_SUCCESS,
    GET_TRIGGERS_FAILURE,
    GET_ACTIVITIES,
    GET_ACTIVITIES_SUCCESS,
    GET_ACTIVITIES_FAILURE,
    ITriggerResponse,
} from './types';

export const ProjectInitialState: ProjectState = {
    loading: { projects: false, currentProject: false, devices: false, triggers: false, activities: false },
    projects: [],
    devices: [],
    triggers: {} as ITriggerResponse,
    currentProject: undefined,
    error: undefined,
};

export function projectReducer(state = ProjectInitialState, action: ProjectActionTypes): ProjectState {
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
                projects: [],
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
                currentProject: undefined,
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
                devices: [],
            };
        }
        case GET_TRIGGERS: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    triggers: true,
                },
                triggers: {} as ITriggerResponse,
            };
        }
        case GET_TRIGGERS_SUCCESS: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    triggers: false,
                },
                ...action.payload,
            };
        }
        case GET_TRIGGERS_FAILURE: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    triggers: false,
                },
                triggers: {} as ITriggerResponse,
            };
        }
        case GET_ACTIVITIES: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    activities: true,
                },
                activities: [],
            };
        }
        case GET_ACTIVITIES_SUCCESS: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    activities: false,
                },
                ...action.payload,
            };
        }
        case GET_ACTIVITIES_FAILURE: {
            return {
                ...state,
                loading: {
                    ...state.loading,
                    activities: false,
                },
                activities: [],
            };
        }

        default:
            return state;
    }
}
