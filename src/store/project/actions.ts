import * as types from './types';
import { ProjectState } from './types';
import { IProjectSettingsFormDefaultState } from '../../components/forms/ProjectSettingsForm/definitions';
import { IAddDeviceFormState } from '../../components/forms/AddDeviceForm/definitions';
import { ICreateProjectFormState } from '../../components/forms/CreateProjectForm/definitions';

export function getProjects() {
    return {
        type: types.GET_PROJECTS,
    };
}

export function getProjectsSuccess(projects: ProjectState) {
    return {
        type: types.GET_PROJECTS_SUCCESS,
        payload: projects,
    };
}

export function getProjectsFailure(projects: ProjectState) {
    return {
        type: types.GET_PROJECTS_FAILURE,
        payload: projects,
    };
}

export function getProjectById(id: string) {
    return {
        type: types.GET_PROJECT_BY_ID,
        payload: id,
    };
}

export function getProjectByIdSuccess(projects: ProjectState) {
    return {
        type: types.GET_PROJECT_BY_ID_SUCCESS,
        payload: projects.currentProject,
    };
}

export function getProjectByIdFailure(projects: ProjectState) {
    return {
        type: types.GET_PROJECT_BY_ID_FAILURE,
        payload: projects.currentProject,
    };
}

export function getDevices() {
    return {
        type: types.GET_DEVICES,
    };
}

export function getDevicesSuccess(projects: ProjectState) {
    return {
        type: types.GET_DEVICES_SUCCESS,
        payload: projects,
    };
}

export function getDevicesFailure(projects: ProjectState) {
    return {
        type: types.GET_DEVICES_FAILURE,
        payload: projects,
    };
}

export function getDeviceById(id: string) {
    return {
        type: types.GET_DEVICE_BY_ID,
        payload: id,
    };
}

export function getDeviceByIdSuccess(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_BY_ID_SUCCESS,
        payload: projects.currentDevice,
    };
}

export function getDeviceByIdFailure(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_BY_ID_FAILURE,
        payload: projects.currentDevice,
    };
}

export function getTriggers() {
    return {
        type: types.GET_TRIGGERS,
    };
}

export function getTriggersSuccess(projects: ProjectState) {
    return {
        type: types.GET_TRIGGERS_SUCCESS,
        payload: projects,
    };
}

export function getTriggersFailure(projects: ProjectState) {
    return {
        type: types.GET_TRIGGERS_FAILURE,
        payload: projects,
    };
}

export function getActivities() {
    return {
        type: types.GET_ACTIVITIES,
    };
}

export function getActivitiesSuccess(projects: ProjectState) {
    return {
        type: types.GET_ACTIVITIES_SUCCESS,
        payload: projects,
    };
}

export function getActivitiesFailure(projects: ProjectState) {
    return {
        type: types.GET_ACTIVITIES_FAILURE,
        payload: projects,
    };
}

export function getSettings() {
    return {
        type: types.GET_ACTIVITIES,
    };
}

export function getSettingsSuccess(projects: ProjectState) {
    return {
        type: types.GET_ACTIVITIES_SUCCESS,
        payload: projects,
    };
}

export function getSettingsFailure(projects: ProjectState) {
    return {
        type: types.GET_ACTIVITIES_FAILURE,
        payload: projects,
    };
}

export function getDeviceActivities() {
    return {
        type: types.GET_DEVICE_ACTIVITIES,
    };
}

export function getDeviceActivitiesSuccess(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_ACTIVITIES_SUCCESS,
        payload: projects,
    };
}

export function getDeviceActivitiesFailure(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_ACTIVITIES_FAILURE,
        payload: projects,
    };
}

export function getDeviceSettings() {
    return {
        type: types.GET_DEVICE_SETTINGS,
    };
}

export function getDeviceSettingsSuccess(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_SETTINGS_SUCCESS,
        payload: projects,
    };
}

export function getDeviceSettingsFailure(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_SETTINGS_FAILURE,
        payload: projects,
    };
}

export function getDeviceTokens() {
    return {
        type: types.GET_DEVICE_TOKENS,
    };
}

export function getDeviceTokensSuccess(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_TOKENS_SUCCESS,
        payload: projects,
    };
}

export function getDeviceTokensFailure(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_TOKENS_FAILURE,
        payload: projects,
    };
}

export function saveProjectSettings(newSettings: IProjectSettingsFormDefaultState) {
    return {
        type: types.SAVE_PROJECT_SETTINGS,
        payload: newSettings,
    };
}

export function saveProjectSettingsSuccess(projects: ProjectState) {
    return {
        type: types.SAVE_PROJECT_SETTINGS_SUCCESS,
        payload: projects,
    };
}

export function saveProjectSettingsFailure(projects: ProjectState) {
    return {
        type: types.SAVE_PROJECT_SETTINGS_FAILURE,
        payload: projects,
    };
}

export function getDeviceBrands() {
    return {
        type: types.GET_DEVICE_BRANDS,
    };
}

export function getDeviceBrandsSuccess(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_BRANDS_SUCCESS,
        payload: projects,
    };
}

export function getDeviceBrandsFailure(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_BRANDS_FAILURE,
        payload: projects,
    };
}

export function addDevice(newDevice: IAddDeviceFormState) {
    return {
        type: types.ADD_DEVICE,
        payload: newDevice,
    };
}

export function addDeviceSuccess(projects: ProjectState) {
    return {
        type: types.ADD_DEVICE_SUCCESS,
        payload: projects,
    };
}

export function addDeviceFailure(projects: ProjectState) {
    return {
        type: types.ADD_DEVICE_FAILURE,
        payload: projects,
    };
}

export function getDeviceModels(brandId: string) {
    return {
        type: types.GET_DEVICE_MODELS,
        payload: brandId,
    };
}

export function getDeviceModelsSuccess(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_MODELS_SUCCESS,
        payload: projects,
    };
}

export function getDeviceModelsFailure(projects: ProjectState) {
    return {
        type: types.GET_DEVICE_MODELS_FAILURE,
        payload: projects,
    };
}

export function createProject(newProject: ICreateProjectFormState) {
    return {
        type: types.CREATE_PROJECT,
        payload: newProject,
    };
}

export function createProjectSuccess(projects: ProjectState) {
    return {
        type: types.CREATE_PROJECT_SUCCESS,
        payload: projects,
    };
}

export function createProjectFailure(projects: ProjectState) {
    return {
        type: types.CREATE_PROJECT_FAILURE,
        payload: projects,
    };
}
