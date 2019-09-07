import {
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

export function getProjects() {
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

export function getProjectById(id: string) {
    return {
        type: GET_PROJECT_BY_ID,
        payload: id,
    };
}

export function getProjectByIdSuccess(projects: ProjectState) {
    return {
        type: GET_PROJECT_BY_ID_SUCCESS,
        payload: projects.currentProject,
    };
}

export function getProjectByIdFailure(projects: ProjectState) {
    return {
        type: GET_PROJECT_BY_ID_FAILURE,
        payload: projects.currentProject,
    };
}

export function getDevices() {
    return {
        type: GET_DEVICES,
    };
}

export function getDevicesSuccess(devices: ProjectState) {
    return {
        type: GET_DEVICES_SUCCESS,
        payload: devices,
    };
}

export function getDevicesFailure(devices: ProjectState) {
    return {
        type: GET_DEVICES_FAILURE,
        payload: devices,
    };
}
