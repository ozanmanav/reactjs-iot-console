import { GET_PROJECTS, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE, ProjectState } from './types';

export function getProjects() {
    console.log('get projcet action');
    return {
        type: GET_PROJECTS,
    };
}

export function getProjectsSuccess(projects: ProjectState) {
    return {
        type: GET_PROJECTS_SUCCESS,
        payload: projects,
    };
}

export function getProjectsFailure(projects: ProjectState) {
    return {
        type: GET_PROJECTS_FAILURE,
        payload: projects,
    };
}
