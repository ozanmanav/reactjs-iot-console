export interface IProject {
    id: string;
    projectDescription: string;
    projectImage: string;
    projectImage1x: string;
    projectImage2x: string;
    projectName: string;
}

export interface IProjectLoadingState {
    projects?: boolean;
    currentProject?: boolean;
    devices?: boolean;
}

export interface ProjectState {
    loading?: IProjectLoadingState;
    projects?: IProject[];
    devices?: IDevice[];
    currentProject?: IProject;
    error?: string;
}

export interface IDevice {
    id: string;
    deviceModel: string;
    deviceName: string;
    deviceLocation: string;
    deviceImage: string;
    deviceDescription: string;
    deviceStatus: string;
    deviceLastSeen: string;
}

export const GET_PROJECTS = 'GET_PROJECTS';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';
export const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';
export const GET_PROJECT_BY_ID_SUCCESS = 'GET_PROJECT_BY_ID_SUCCESS';
export const GET_PROJECT_BY_ID_FAILURE = 'GET_PROJECT_BY_ID_FAILURE';
export const GET_DEVICES = 'GET_DEVICES';
export const GET_DEVICES_SUCCESS = 'GET_DEVICES_SUCCESS';
export const GET_DEVICES_FAILURE = 'GET_DEVICES_FAILURE';

interface GetProjectsAction {
    type: typeof GET_PROJECTS;
    payload: ProjectState;
}

interface GetProjectsSuccessAction {
    type: typeof GET_PROJECTS_SUCCESS;
    payload: ProjectState;
}

interface GetProjectsFailureAction {
    type: typeof GET_PROJECTS_FAILURE;
    payload: ProjectState;
}

interface GetProjectByIdAction {
    type: typeof GET_PROJECT_BY_ID;
    payload: string;
}

interface GetProjectByIdSuccessAction {
    type: typeof GET_PROJECT_BY_ID_SUCCESS;
    payload: IProject;
}

interface GetProjectByIdFailureAction {
    type: typeof GET_PROJECT_BY_ID_FAILURE;
    payload: IProject;
}

interface GetDevicesAction {
    type: typeof GET_DEVICES;
    payload: ProjectState;
}

interface GetDevicesSuccessAction {
    type: typeof GET_DEVICES_SUCCESS;
    payload: ProjectState;
}

interface GetDevicesFailureAction {
    type: typeof GET_DEVICES_FAILURE;
    payload: ProjectState;
}

export type ProjectActionTypes =
    | GetProjectsAction
    | GetProjectsSuccessAction
    | GetProjectsFailureAction
    | GetProjectByIdAction
    | GetProjectByIdSuccessAction
    | GetProjectByIdFailureAction
    | GetDevicesAction
    | GetDevicesSuccessAction
    | GetDevicesFailureAction;
