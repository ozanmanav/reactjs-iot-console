export interface IProject {
    id: string;
    projectDescription: string;
    projectImage: string;
    projectImage1x: string;
    projectImage2x: string;
    projectName: string;
}

export interface ProjectState {
    projects?: IProject[];
    error?: string;
}

export const GET_PROJECTS = 'GET_PROJECTS';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';

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

export type ProjectActionTypes = GetProjectsAction | GetProjectsSuccessAction | GetProjectsFailureAction;
