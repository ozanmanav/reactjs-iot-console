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
    GET_TRIGGERS,
    GET_TRIGGERS_SUCCESS,
    GET_TRIGGERS_FAILURE,
    GET_ACTIVITIES,
    GET_ACTIVITIES_SUCCESS,
    GET_ACTIVITIES_FAILURE,
    GET_DEVICE_BY_ID,
    GET_DEVICE_BY_ID_SUCCESS,
    GET_DEVICE_BY_ID_FAILURE,
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

export function getDeviceById(id: string) {
    return {
        type: GET_DEVICE_BY_ID,
        payload: id,
    };
}

export function getDeviceByIdSuccess(project: ProjectState) {
    return {
        type: GET_DEVICE_BY_ID_SUCCESS,
        payload: project.currentDevice,
    };
}

export function getDeviceByIdFailure(project: ProjectState) {
    return {
        type: GET_DEVICE_BY_ID_FAILURE,
        payload: project.currentDevice,
    };
}

export function getTriggers() {
    return {
        type: GET_TRIGGERS,
    };
}

export function getTriggersSuccess(triggers: ProjectState) {
    return {
        type: GET_TRIGGERS_SUCCESS,
        payload: triggers,
    };
}

export function getTriggersFailure(triggers: ProjectState) {
    return {
        type: GET_TRIGGERS_FAILURE,
        payload: triggers,
    };
}

export function getActivities() {
    return {
        type: GET_ACTIVITIES,
    };
}

export function getActivitiesSuccess(activities: ProjectState) {
    return {
        type: GET_ACTIVITIES_SUCCESS,
        payload: activities,
    };
}

export function getActivitiesFailure(activities: ProjectState) {
    return {
        type: GET_ACTIVITIES_FAILURE,
        payload: activities,
    };
}

export function getSettings() {
    return {
        type: GET_ACTIVITIES,
    };
}

export function getSettingsSuccess(settings: ProjectState) {
    return {
        type: GET_ACTIVITIES_SUCCESS,
        payload: settings,
    };
}

export function getSettingsFailure(settings: ProjectState) {
    return {
        type: GET_ACTIVITIES_FAILURE,
        payload: settings,
    };
}
