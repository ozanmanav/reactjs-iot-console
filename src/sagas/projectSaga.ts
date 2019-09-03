import { call, put } from 'redux-saga/effects';
import { getRequest } from '../utils/dataHelper';
import { getProjectsSuccess, getProjectsFailure, getProjectByIdSuccess, getProjectByIdFailure } from '../store/project/actions';
import { ProjectState } from '../store/project/types';

function fetchProjects() {
    return getRequest('/user/projects')
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
}

export function* requestGetProjects() {
    try {
        const projectsResponse = yield call(fetchProjects);

        const successProjectsResponse: ProjectState = { projects: projectsResponse.data.Projects };

        yield put(getProjectsSuccess(successProjectsResponse));
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getProjectsFailure(errorSession));
        console.log(error);
    }
}

function fetchProjectById(projectId: string) {
    return getRequest(`/user/projects/${projectId}`)
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
}

export function* requestGetProjectById(data: any) {
    try {
        const projectResponse = yield call(fetchProjectById, data.payload);
        const successProjectResponse: ProjectState = { currentProject: projectResponse.data.ProjectDetail };

        yield put(getProjectByIdSuccess(successProjectResponse));
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getProjectByIdFailure(errorSession));
        console.log(error);
    }
}
