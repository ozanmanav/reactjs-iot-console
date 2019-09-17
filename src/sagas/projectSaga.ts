import { call, put, select } from 'redux-saga/effects';
import { getRequest, putRequest } from '../utils/dataHelper';
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
    getDeviceTokensSuccess,
    getDeviceTokensFailure,
    saveProjectSettingsSuccess,
    saveProjectSettingsFailure,
    getProjects,
} from '../store/project/actions';
import { ProjectState, IDevice } from '../store/project/types';
import { IProjectSettingsFormDefaultState } from '../components/forms/ProjectSettingsForm/definitions';
import { showSuccessToast } from '../components/ui';

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
            let deviceResponse = yield call(fetchDeviceById, currentProject.id, data.payload);

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

function fetchDeviceTokens(projectId: string, deviceId: string) {
    return getRequest(`user/projects/${projectId}/devices/${deviceId}/retrievetokens`)
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
}

export function* requestGetDeviceTokens() {
    try {
        let currentProject = yield select((state) => state.project.currentProject);
        let currentDevice: IDevice = yield select((state) => state.project.currentDevice);

        if (currentProject && currentDevice) {
            const deviceTokensResponse = yield call(fetchDeviceTokens, currentProject.id, currentDevice.id);

            currentDevice.deviceTokens = {
                apiToken: deviceTokensResponse.data.ApiToken,
                clientSecret: deviceTokensResponse.data.ClientSecret,
            };

            const successDeviceTokensResponse: ProjectState = { currentDevice };

            yield put(getDeviceTokensSuccess(successDeviceTokensResponse));
        } else {
            const errorSession: ProjectState = { error: 'Not current project or device selected' };
            yield put(getDeviceTokensFailure(errorSession));
        }
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getDeviceTokensFailure(errorSession));
    }
}

function putProjectSettings(projectId: string, newSettings: IProjectSettingsFormDefaultState) {
    return putRequest(`user/projects/${projectId}`, {}, newSettings)
        .then((response) => {
            return response;
        })
        .catch((e) => {
            return e;
        });
}

export function* requestSaveProjectSettings(data: any) {
    try {
        let currentProject = yield select((state) => state.project.currentProject);

        if (currentProject) {
            const saveSettingsResponse = yield call(putProjectSettings, currentProject.id, data.payload);

            if (saveSettingsResponse.data.Message === 'Update successful') {
                const successSaveProjectSettingsResponse: ProjectState = {
                    currentProject: { ...currentProject, projectDescription: data.payload.description, projectName: data.payload.name },
                };
                showSuccessToast('Project settings successfully saved');
                yield put(saveProjectSettingsSuccess(successSaveProjectSettingsResponse));
                yield put(getProjects());
            } else {
                yield put(saveProjectSettingsFailure({ error: saveSettingsResponse.data }));
            }
        } else {
            const errorSession: ProjectState = { error: 'Not current project selected' };
            yield put(saveProjectSettingsFailure(errorSession));
        }
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(saveProjectSettingsFailure(errorSession));
    }
}
