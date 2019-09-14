import { call, put, select } from 'redux-saga/effects';
import { getRequest } from '../utils/dataHelper';
import {
    getProjectsSuccess,
    getProjectsFailure,
    getProjectByIdSuccess,
    getProjectByIdFailure,
    getDevicesSuccess,
    getDevicesFailure,
    getTriggersSuccess,
    getTriggersFailure,
    getActivitiesSuccess,
    getActivitiesFailure,
    getDeviceByIdSuccess,
    getDeviceByIdFailure,
    getDeviceActivitiesSuccess,
    getDeviceActivitiesFailure,
} from '../store/project/actions';
import { ProjectState } from '../store/project/types';

function fetchProjects() {
    return getRequest('/user/projects')
        .then((response) => {
            return response;
        })
        .catch((e) => {
            throw e;
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
    }
}

function fetchDevices(projectId: string) {
    return getRequest(`/user/projects/${projectId}/devices`)
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
}

export function* requestGetDevices() {
    try {
        let currentProject = yield select((state) => state.project.currentProject);

        if (currentProject && currentProject.id) {
            const devicesResponse = yield call(fetchDevices, currentProject.id);

            const successDevicesResponse: ProjectState = { devices: devicesResponse.data.Devices };

            yield put(getDevicesSuccess(successDevicesResponse));
        } else {
            const errorSession: ProjectState = { error: 'Not current project selected' };
            yield put(getDevicesFailure(errorSession));
        }
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getDevicesFailure(errorSession));
    }
}

function fetchDeviceById(projectId: string, deviceId: string) {
    return getRequest(`/user/projects/${projectId}/devices/${deviceId}`)
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
}

export function* requestGetDeviceById(data: any) {
    try {
        let currentProject = yield select((state) => state.project.currentProject);

        if (currentProject && data.payload) {
            const deviceResponse = yield call(fetchDeviceById, currentProject.id, data.payload);

            const successDeviceResponse: ProjectState = { currentDevice: deviceResponse.data.Device };

            yield put(getDeviceByIdSuccess(successDeviceResponse));
        } else {
            const errorSession: ProjectState = { error: 'Not current project or device selected' };
            yield put(getDeviceByIdFailure(errorSession));
        }
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getDeviceByIdFailure(errorSession));
    }
}

function fetchTriggers(projectId: string) {
    return getRequest(`/project/${projectId}/triggers`)
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
}

export function* requestGetTriggers() {
    try {
        let currentProject = yield select((state) => state.project.currentProject);

        if (currentProject && currentProject.id) {
            const triggersResponse = yield call(fetchTriggers, currentProject.id);
            console.log(triggersResponse);
            const successTriggersResponse: ProjectState = {
                triggers: { alarm: triggersResponse.data.alarm, periodic: triggersResponse.data.periodic },
            };

            yield put(getTriggersSuccess(successTriggersResponse));
        } else {
            const errorSession: ProjectState = { error: 'Not current project selected' };
            yield put(getTriggersFailure(errorSession));
        }
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getTriggersFailure(errorSession));
    }
}

function fetchActivities(projectId: string) {
    return getRequest(`user/projects/${projectId}/activities`)
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
}

export function* requestGetActivities() {
    try {
        let currentProject = yield select((state) => state.project.currentProject);

        if (currentProject && currentProject.id) {
            const activitiesResponse = yield call(fetchActivities, currentProject.id);

            const successActivitiesResponse: ProjectState = { activities: activitiesResponse.data.Activities };

            yield put(getActivitiesSuccess(successActivitiesResponse));
        } else {
            const errorSession: ProjectState = { error: 'Not current project selected' };
            yield put(getActivitiesFailure(errorSession));
        }
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getActivitiesFailure(errorSession));
    }
}

function fetchDeviceActivities(projectId: string, deviceId: string) {
    return getRequest(`user/projects/${projectId}/device/${deviceId}/activities`)
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
}

export function* requestGetDeviceActivities() {
    try {
        let currentProject = yield select((state) => state.project.currentProject);
        let currentDevice = yield select((state) => state.project.currentDevice);

        if (currentProject && currentDevice) {
            const deviceActivitiesResponse = yield call(fetchDeviceActivities, currentProject.id, currentDevice.id);

            const successDeviceActivitiesResponse: ProjectState = { deviceActivities: deviceActivitiesResponse.data.Activities };

            yield put(getDeviceActivitiesSuccess(successDeviceActivitiesResponse));
        } else {
            const errorSession: ProjectState = { error: 'Not current project selected' };
            yield put(getDeviceActivitiesFailure(errorSession));
        }
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getDeviceActivitiesFailure(errorSession));
    }
}
