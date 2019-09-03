import {
    ProjectActionTypes,
    GET_PROJECTS,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE,
    ProjectState,
    IProject,
    GET_PROJECT_BY_ID,
    GET_PROJECT_BY_ID_SUCCESS,
    GET_PROJECT_BY_ID_FAILURE,
} from './types';

const initialState: ProjectState = {
    projects: [],
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
            };
        }
        case GET_PROJECT_BY_ID_SUCCESS: {
            return {
                ...state,
                currentProject: action.payload,
            };
        }
        case GET_PROJECT_BY_ID_FAILURE: {
            return {
                ...state,
                currentProject: action.payload,
            };
        }
        default:
            return state;
    }
}
