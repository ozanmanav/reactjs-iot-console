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
}

export interface ProjectState {
    loading?: IProjectLoadingState;
    projects?: IProject[];
    currentProject?: IProject;
    error?: string;
}

export const GET_PROJECTS = 'GET_PROJECTS';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';
export const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';
export const GET_PROJECT_BY_ID_SUCCESS = 'GET_PROJECT_BY_ID_SUCCESS';
export const GET_PROJECT_BY_ID_FAILURE = 'GET_PROJECT_BY_ID_FAILURE';

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

export type ProjectActionTypes =
    | GetProjectsAction
    | GetProjectsSuccessAction
    | GetProjectsFailureAction
    | GetProjectByIdAction
    | GetProjectByIdSuccessAction
    | GetProjectByIdFailureAction;
