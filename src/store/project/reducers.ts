import { ProjectActionTypes, GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE, ProjectState } from './types';

const initialState: ProjectState = {
    projects: [],
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
        default:
            return state;
    }
}
