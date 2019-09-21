import { call, put, select } from 'redux-saga/effects';
import { getRequest, putRequest, postRequest } from '../utils/dataHelper';
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
    getDeviceBrandsSuccess,
    getDeviceBrandsFailure,
    addDeviceSuccess,
    addDeviceFailure,
    getDevices,
    getDeviceModelsSuccess,
    getDeviceModelsFailure,
    createProjectSuccess,
    createProjectFailure,
} from '../store/project/actions';
import { ProjectState, IDevice, AddDeviceAction, CreateProjectAction } from '../store/project/types';
import { IProjectSettingsFormDefaultState } from '../components/forms/ProjectSettingsForm/definitions';
import { showSuccessToast } from '../components/ui';
import { PROJECTS_FIRST_LOAD_KEY } from '../config';
import { push } from 'connected-react-router';

export function* requestGetProjects() {
    try {
        const projectsResponse = yield call(getRequest, '/user/projects');

        const successProjectsResponse: ProjectState = { projects: projectsResponse.data.Projects };

        if (JSON.parse(localStorage.getItem(PROJECTS_FIRST_LOAD_KEY) || 'true')) {
            localStorage.setItem(PROJECTS_FIRST_LOAD_KEY, JSON.stringify(false));
            const firstProject = successProjectsResponse.projects && successProjectsResponse.projects[0];
            if (firstProject) {
                yield put(push(`/app/projects/${firstProject.id}`));
            }
        }

        yield put(getProjectsSuccess(successProjectsResponse));
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getProjectsFailure(errorSession));
    }
}

export function* requestGetProjectById(data: any) {
    try {
        const projectResponse = yield call(getRequest, `/user/projects/${data.payload}`);
        const successProjectResponse: ProjectState = { currentProject: projectResponse.data.ProjectDetail };

        yield put(getProjectByIdSuccess(successProjectResponse));
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getProjectByIdFailure(errorSession));
    }
}

export function* requestGetDevices() {
    try {
        let currentProject = yield select(state => state.project.currentProject);

        if (currentProject && currentProject.id) {
            const devicesResponse = yield call(getRequest, `/user/projects/${currentProject.id}/devices`);

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

export function* requestGetDeviceById(data: any) {
    try {
        let currentProject = yield select(state => state.project.currentProject);

        if (currentProject && data.payload) {
            let deviceResponse = yield call(getRequest, `/user/projects/${currentProject.id}/devices/${data.payload}`);

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

export function* requestGetTriggers() {
    try {
        let currentProject = yield select(state => state.project.currentProject);

        if (currentProject && currentProject.id) {
            const triggersResponse = yield call(getRequest, `/project/${currentProject.id}/triggers`);
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

export function* requestGetActivities() {
    try {
        let currentProject = yield select(state => state.project.currentProject);

        if (currentProject && currentProject.id) {
            const activitiesResponse = yield call(getRequest, `user/projects/${currentProject.id}/activities`);

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
        .then(response => {
            return response;
        })
        .catch(e => {
            return e;
        });
}

export function* requestGetDeviceActivities() {
    try {
        let currentProject = yield select(state => state.project.currentProject);
        let currentDevice = yield select(state => state.project.currentDevice);

        if (currentProject && currentDevice) {
            const deviceActivitiesResponse = yield call(
                getRequest,
                `user/projects/${currentProject.id}/device/${currentDevice.id}/activities`,
            );

            const successDeviceActivitiesResponse: ProjectState = {
                deviceActivities: deviceActivitiesResponse.data.Activities,
            };

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
        .then(response => {
            return response;
        })
        .catch(e => {
            return e;
        });
}

export function* requestGetDeviceTokens() {
    try {
        let currentProject = yield select(state => state.project.currentProject);
        let currentDevice: IDevice = yield select(state => state.project.currentDevice);

        if (currentProject && currentDevice && currentDevice.id) {
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
        .then(response => {
            return response;
        })
        .catch(e => {
            return e;
        });
}

export function* requestSaveProjectSettings(data: any) {
    try {
        let currentProject = yield select(state => state.project.currentProject);

        if (currentProject) {
            const saveSettingsResponse = yield call(putProjectSettings, currentProject.id, data.payload);

            if (saveSettingsResponse.data.Message === 'Update successful') {
                const successSaveProjectSettingsResponse: ProjectState = {
                    currentProject: {
                        ...currentProject,
                        projectDescription: data.payload.description,
                        projectName: data.payload.name,
                    },
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

function fetchDeviceBrands() {
    return getRequest(`brands`)
        .then(response => {
            return response;
        })
        .catch(e => {
            return e;
        });
}

export function* requestGetDeviceBrands() {
    try {
        const deviceBrandsResponse = yield call(fetchDeviceBrands);

        const successDeviceBrandsResponse: ProjectState = { deviceBrands: deviceBrandsResponse.data.Models };

        yield put(getDeviceBrandsSuccess(successDeviceBrandsResponse));
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getDeviceBrandsFailure(errorSession));
    }
}

function postAddDevice(projectId: string, newDevice: any) {
    delete newDevice.loading;
    return postRequest(`user/projects/${projectId}/devices`, {}, newDevice)
        .then(response => {
            return response;
        })
        .catch(e => {
            return e;
        });
}

export function* requestAddDevice(data: AddDeviceAction) {
    try {
        let currentProject = yield select(state => state.project.currentProject);

        if (currentProject) {
            const addDeviceResponse = yield call(postAddDevice, currentProject.id, data.payload);

            if (addDeviceResponse.data.Message === 'Added Device successful') {
                const successAddDeviceResponse: ProjectState = {};
                showSuccessToast('Device successfully added');
                yield put(getDevices());
                yield put(push(`/app/projects/${currentProject.id}`));
                yield put(addDeviceSuccess(successAddDeviceResponse));
            } else {
                yield put(saveProjectSettingsFailure({ error: addDeviceResponse.data }));
            }
        } else {
            const errorSession: ProjectState = { error: 'Not current project selected' };
            yield put(addDeviceFailure(errorSession));
        }
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(addDeviceFailure(errorSession));
    }
}

function fetchDeviceModels(brand: string) {
    return getRequest(`deviceModels`, { brand })
        .then(response => {
            return response;
        })
        .catch(e => {
            return e;
        });
}

export function* requestGetDeviceModels(data: any) {
    try {
        const deviceModelsResponse = yield call(fetchDeviceModels, data.payload);

        const successDeviceModelsResponse: ProjectState = { deviceModels: deviceModelsResponse.data.Models };

        yield put(getDeviceModelsSuccess(successDeviceModelsResponse));
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(getDeviceModelsFailure(errorSession));
    }
}

function postCreateProject(newProject: any) {
    delete newProject.loading;
    return postRequest(`user/projects`, {}, newProject)
        .then(response => {
            return response;
        })
        .catch(e => {
            return e;
        });
}

export function* requestCreateProject(data: CreateProjectAction) {
    try {
        const createProjectResponse = yield call(postCreateProject, data.payload);

        if (createProjectResponse.data.Message && createProjectResponse.data.Message.includes('Project created with')) {
            const successCreateProjectResponse: ProjectState = {};
            showSuccessToast('Project successfully created');
            yield put(getProjects());
            yield put(push(`/app/projects/${createProjectResponse.data.id}`));
            yield put(createProjectSuccess(successCreateProjectResponse));
        } else {
            yield put(createProjectFailure({ error: createProjectResponse.data }));
        }
    } catch (error) {
        const errorSession: ProjectState = { error };
        yield put(createProjectFailure(errorSession));
    }
}
