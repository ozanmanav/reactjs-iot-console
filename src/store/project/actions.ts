import * as types from './types';
import { ProjectState, ProjectActionTypes } from './types';
import { IAddDeviceFormState } from '../../components/forms/AddDeviceForm/definitions';
import { ICreateProjectFormState } from '../../components/forms/CreateProjectForm/definitions';
import { IAddChartFormState } from '../../components/forms/AddChartForm/definitions';

export function getProjects(): ProjectActionTypes {
  return {
    type: types.GET_PROJECTS
  };
}

export function getProjectsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_PROJECTS_SUCCESS,
    payload: projects
  };
}

export function getProjectsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_PROJECTS_FAILURE,
    payload: projects
  };
}

export function getProjectById(id: string): ProjectActionTypes {
  return {
    type: types.GET_PROJECT_BY_ID,
    payload: id
  };
}

export function getProjectByIdSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_PROJECT_BY_ID_SUCCESS,
    payload: projects.currentProject
  };
}

export function getProjectByIdFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_PROJECT_BY_ID_FAILURE,
    payload: projects.currentProject
  };
}

export function getDevices(): ProjectActionTypes {
  return {
    type: types.GET_DEVICES
  };
}

export function getDevicesSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICES_SUCCESS,
    payload: projects
  };
}

export function getDevicesFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICES_FAILURE,
    payload: projects
  };
}

export function getDeviceById(id: string): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_BY_ID,
    payload: id
  };
}

export function getDeviceByIdSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_BY_ID_SUCCESS,
    payload: projects.currentDevice
  };
}

export function getDeviceByIdFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_BY_ID_FAILURE,
    payload: projects.currentDevice
  };
}

export function getActivities(): ProjectActionTypes {
  return {
    type: types.GET_ACTIVITIES
  };
}

export function getActivitiesSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_ACTIVITIES_SUCCESS,
    payload: projects
  };
}

export function getActivitiesFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_ACTIVITIES_FAILURE,
    payload: projects
  };
}

export function getSettings(): ProjectActionTypes {
  return {
    type: types.GET_ACTIVITIES
  };
}

export function getSettingsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_ACTIVITIES_SUCCESS,
    payload: projects
  };
}

export function getSettingsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_ACTIVITIES_FAILURE,
    payload: projects
  };
}

export function getDeviceActivities(): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_ACTIVITIES
  };
}

export function getDeviceActivitiesSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_ACTIVITIES_SUCCESS,
    payload: projects
  };
}

export function getDeviceActivitiesFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_ACTIVITIES_FAILURE,
    payload: projects
  };
}

export function getDeviceSettings(): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_SETTINGS
  };
}

export function getDeviceSettingsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_SETTINGS_SUCCESS,
    payload: projects
  };
}

export function getDeviceSettingsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_SETTINGS_FAILURE,
    payload: projects
  };
}

export function getDeviceTokens(): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_TOKENS
  };
}

export function getDeviceTokensSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_TOKENS_SUCCESS,
    payload: projects
  };
}

export function getDeviceTokensFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_TOKENS_FAILURE,
    payload: projects
  };
}

export function saveProjectSettings(newSettings: ProjectState): ProjectActionTypes {
  return {
    type: types.SAVE_PROJECT_SETTINGS,
    payload: newSettings
  };
}

export function saveProjectSettingsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.SAVE_PROJECT_SETTINGS_SUCCESS,
    payload: projects
  };
}

export function saveProjectSettingsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.SAVE_PROJECT_SETTINGS_FAILURE,
    payload: projects
  };
}

export function getDeviceBrands(): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_BRANDS
  };
}

export function getDeviceBrandsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_BRANDS_SUCCESS,
    payload: projects
  };
}

export function getDeviceBrandsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_BRANDS_FAILURE,
    payload: projects
  };
}

export function addDevice(newDevice: IAddDeviceFormState): ProjectActionTypes {
  return {
    type: types.ADD_DEVICE,
    payload: newDevice
  };
}

export function addDeviceSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.ADD_DEVICE_SUCCESS,
    payload: projects
  };
}

export function addDeviceFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.ADD_DEVICE_FAILURE,
    payload: projects
  };
}

export function getDeviceModels(brandId: string): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_MODELS,
    payload: brandId
  };
}

export function getDeviceModelsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_MODELS_SUCCESS,
    payload: projects
  };
}

export function getDeviceModelsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_MODELS_FAILURE,
    payload: projects
  };
}

export function createProject(newProject: ICreateProjectFormState): ProjectActionTypes {
  return {
    type: types.CREATE_PROJECT,
    payload: newProject
  };
}

export function createProjectSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.CREATE_PROJECT_SUCCESS,
    payload: projects
  };
}

export function createProjectFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.CREATE_PROJECT_FAILURE,
    payload: projects
  };
}

export function deleteProject(): ProjectActionTypes {
  return {
    type: types.DELETE_PROJECT
  };
}

export function deleteProjectSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.DELETE_PROJECT_SUCCESS,
    payload: projects
  };
}

export function deleteProjectFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.DELETE_PROJECT_FAILURE,
    payload: projects
  };
}

export function getDeviceEntities(): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_ENTITIES
  };
}

export function getDeviceEntitiesSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_ENTITIES_SUCCESS,
    payload: projects
  };
}

export function getDeviceEntitiesFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_ENTITIES_FAILURE,
    payload: projects
  };
}

export function addDeviceChart(newChart: IAddChartFormState): ProjectActionTypes {
  return {
    type: types.ADD_DEVICE_CHART,
    payload: newChart
  };
}

export function addDeviceChartSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.ADD_DEVICE_CHART_SUCCESS,
    payload: projects
  };
}

export function addDeviceChartFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.ADD_DEVICE_CHART_FAILURE,
    payload: projects
  };
}

export function getDeviceCharts(): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_CHARTS
  };
}

export function getDeviceChartsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_CHARTS_SUCCESS,
    payload: projects
  };
}

export function getDeviceChartsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_CHARTS_FAILURE,
    payload: projects
  };
}

export function deleteDevice(): ProjectActionTypes {
  return {
    type: types.DELETE_DEVICE
  };
}

export function deleteDeviceSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.DELETE_DEVICE_SUCCESS,
    payload: projects
  };
}

export function deleteDeviceFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.DELETE_DEVICE_FAILURE,
    payload: projects
  };
}

export function getDeviceChartsData(): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_CHARTS_DATA
  };
}

export function getDeviceChartsDataSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_CHARTS_DATA_SUCCESS,
    payload: projects
  };
}

export function getDeviceChartsDataFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_CHARTS_DATA_FAILURE,
    payload: projects
  };
}

export function saveDeviceSettings(newSettings: ProjectState): ProjectActionTypes {
  return {
    type: types.SAVE_DEVICE_SETTINGS,
    payload: newSettings
  };
}

export function saveDeviceSettingsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.SAVE_DEVICE_SETTINGS_SUCCESS,
    payload: projects
  };
}

export function saveDeviceSettingsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.SAVE_DEVICE_SETTINGS_FAILURE,
    payload: projects
  };
}

export function getDeviceChartById(id: string): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_CHART_BY_ID,
    payload: id
  };
}

export function getDeviceChartByIdSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_CHART_BY_ID_SUCCESS,
    payload: projects.currentChart
  };
}

export function getDeviceChartByIdFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_CHART_BY_ID_FAILURE,
    payload: projects
  };
}

export function deleteDeviceChartById(id: string): ProjectActionTypes {
  return {
    type: types.DELETE_DEVICE_CHART_BY_ID,
    payload: id
  };
}

export function deleteDeviceChartByIdSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.DELETE_DEVICE_CHART_BY_ID_SUCCESS,
    payload: projects
  };
}

export function deleteDeviceChartByIdFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.DELETE_DEVICE_CHART_BY_ID_FAILURE,
    payload: projects
  };
}

export function getDeviceTriggers(): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_TRIGGERS
  };
}

export function getDeviceTriggersSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_TRIGGERS_SUCCESS,
    payload: projects
  };
}

export function getDeviceTriggersFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_DEVICE_TRIGGERS_FAILURE,
    payload: projects
  };
}

export function getTriggerTypes(): ProjectActionTypes {
  return {
    type: types.GET_TRIGGER_TYPES
  };
}

export function getTriggerTypesSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_TRIGGER_TYPES_SUCCESS,
    payload: projects
  };
}

export function getTriggerTypesFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_TRIGGER_TYPES_FAILURE,
    payload: projects
  };
}

export function getTriggerIntegrations(): ProjectActionTypes {
  return {
    type: types.GET_TRIGGER_INTEGRATIONS
  };
}

export function getTriggerIntegrationsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_TRIGGER_INTEGRATIONS_SUCCESS,
    payload: projects
  };
}

export function getTriggerIntegrationsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_TRIGGER_INTEGRATIONS_FAILURE,
    payload: projects
  };
}

export function getTriggerIntervals(): ProjectActionTypes {
  return {
    type: types.GET_TRIGGER_INTERVALS
  };
}

export function getTriggerIntervalsSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_TRIGGER_INTERVALS_SUCCESS,
    payload: projects
  };
}

export function getTriggerIntervalsFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.GET_TRIGGER_INTERVALS_FAILURE,
    payload: projects
  };
}

export function saveDeviceChart(newChart: types.IChart): ProjectActionTypes {
  return {
    type: types.SAVE_DEVICE_CHART,
    payload: newChart
  };
}

export function saveDeviceChartSuccess(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.SAVE_DEVICE_CHART_SUCCESS,
    payload: projects
  };
}

export function saveDeviceChartFailure(projects: ProjectState): ProjectActionTypes {
  return {
    type: types.SAVE_DEVICE_CHART_FAILURE,
    payload: projects
  };
}
