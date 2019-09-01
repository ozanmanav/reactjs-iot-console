import { call, put } from 'redux-saga/effects';
import { getRequest } from '../utils/dataHelper';
import { getProjectsSuccess, getProjectsFailure } from '../store/project/actions';
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

export function* requestGetProjects(data: any) {
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
