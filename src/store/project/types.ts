import { IAddDeviceFormState } from '../../components/forms/AddDeviceForm/definitions';
import { ICreateProjectFormState } from '../../components/forms/CreateProjectForm/definitions';
import { IAddChartFormState } from '../../components/forms/AddChartForm/definitions';
import { ISelectEntity } from '../../components/ui/cards';

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
  currentDevice?: boolean;
  devices?: boolean;
  triggers?: boolean;
  activities?: boolean;
  deviceActivities?: boolean;
  deviceTokens?: boolean;
  saveProjectSettings?: boolean;
  brands?: boolean;
  models?: boolean;
  entities?: boolean;
  addDevice?: boolean;
  createProject?: boolean;
  deleteProject?: boolean;
  deleteDevice?: boolean;
  addChart?: boolean;
  deviceCharts?: boolean;
  deviceChartsData?: boolean;
  saveDeviceSettings?: boolean;
  currentChart?: boolean;
}

export interface IDeviceToken {
  apiToken: string;
  clientSecret: string;
}

export interface IDevice {
  id?: string;
  deviceModel: string;
  deviceBrand?: string;
  deviceName: string;
  deviceLocation: string;
  deviceImage?: string;
  deviceDescription: string;
  deviceStatus?: string;
  deviceLastSeen?: string;
  deviceTokens?: IDeviceToken;
}

interface ITriggerThresholds {
  entity: string;
  min: number;
  max: number;
  timestamp_min: number;
  timestamp_max: number;
}

export interface ITrigger {
  id: string;
  name: string;
  triggerType: string;
  integrationWebhook: string;
  integration: string;
  triggerImage: string;
  thresholds: ITriggerThresholds[];
}

export interface ITriggerResponse {
  alarm: ITrigger[];
  periodic: ITrigger[];
}

export interface IActivity {
  activity_id: string;
  activityDescription: string;
  activityCreated: string;
}

export interface IChart {
  _id: string;
  name: string;
  userId: string;
  deviceId: string;
  projectId: string;
  type: string;
  elements: ISelectEntity[];
}

export interface ProjectState {
  loading?: IProjectLoadingState;
  projects?: IProject[];
  devices?: IDevice[];
  triggers?: ITriggerResponse;
  activities?: IActivity[];
  deviceActivities?: IActivity[];
  currentProject?: IProject;
  currentDevice?: IDevice;
  deviceBrands?: any;
  deviceModels?: any;
  deviceEntities?: any;
  deviceCharts?: IChart[];
  deviceChartsData?: any;
  currentChart?: IChart;
  error?: string;
}

export const GET_PROJECTS = '@@project/GET_PROJECTS';
export const GET_PROJECTS_SUCCESS = '@@project/GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = '@@project/GET_PROJECTS_FAILURE';
export const GET_PROJECT_BY_ID = '@@project/GET_PROJECT_BY_ID';
export const GET_PROJECT_BY_ID_SUCCESS = '@@project/GET_PROJECT_BY_ID_SUCCESS';
export const GET_PROJECT_BY_ID_FAILURE = '@@project/GET_PROJECT_BY_ID_FAILURE';
export const GET_DEVICES = '@@project/GET_DEVICES';
export const GET_DEVICES_SUCCESS = '@@project/GET_DEVICES_SUCCESS';
export const GET_DEVICES_FAILURE = '@@project/GET_DEVICES_FAILURE';
export const GET_DEVICE_BY_ID = '@@project/GET_DEVICE_BY_ID';
export const GET_DEVICE_BY_ID_SUCCESS = '@@project/GET_DEVICE_BY_ID_SUCCESS';
export const GET_DEVICE_BY_ID_FAILURE = '@@project/GET_DEVICE_BY_ID_FAILURE';
export const GET_TRIGGERS = '@@project/GET_TRIGGERS';
export const GET_TRIGGERS_SUCCESS = '@@project/GET_TRIGGERS_SUCCESS';
export const GET_TRIGGERS_FAILURE = '@@project/GET_TRIGGERS_FAILURE';
export const GET_ACTIVITIES = '@@project/GET_ACTIVITIES';
export const GET_ACTIVITIES_SUCCESS = '@@project/GET_ACTIVITIES_SUCCESS';
export const GET_ACTIVITIES_FAILURE = '@@project/GET_ACTIVITIES_FAILURE';
export const GET_DEVICE_ACTIVITIES = '@@project/GET_DEVICE_ACTIVITIES';
export const GET_DEVICE_ACTIVITIES_SUCCESS = '@@project/GET_DEVICE_ACTIVITIES_SUCCESS';
export const GET_DEVICE_ACTIVITIES_FAILURE = '@@project/GET_DEVICE_ACTIVITIES_FAILURE';
export const GET_DEVICE_SETTINGS = '@@project/GET_DEVICE_SETTINGS';
export const GET_DEVICE_SETTINGS_SUCCESS = '@@project/GET_DEVICE_SETTINGS_SUCCESS';
export const GET_DEVICE_SETTINGS_FAILURE = '@@project/GET_DEVICE_SETTINGS_FAILURE';
export const GET_DEVICE_TOKENS = '@@project/GET_DEVICE_TOKENS';
export const GET_DEVICE_TOKENS_SUCCESS = '@@project/GET_DEVICE_TOKENS_SUCCESS';
export const GET_DEVICE_TOKENS_FAILURE = '@@project/GET_DEVICE_TOKENS_FAILURE';
export const SAVE_PROJECT_SETTINGS = '@@project/SAVE_PROJECT_SETTINGS';
export const SAVE_PROJECT_SETTINGS_SUCCESS = '@@project/SAVE_PROJECT_SETTINGS_SUCCESS';
export const SAVE_PROJECT_SETTINGS_FAILURE = '@@project/SAVE_PROJECT_SETTINGS_FAILURE';
export const GET_DEVICE_BRANDS = '@@project/GET_DEVICE_BRANDS';
export const GET_DEVICE_BRANDS_SUCCESS = '@@project/GET_DEVICE_BRANDS_SUCCESS';
export const GET_DEVICE_BRANDS_FAILURE = '@@project/GET_DEVICE_BRANDS_FAILURE';
export const ADD_DEVICE = '@@project/ADD_DEVICE';
export const ADD_DEVICE_SUCCESS = '@@project/ADD_DEVICE_SUCCESS';
export const ADD_DEVICE_FAILURE = '@@project/ADD_DEVICE_FAILURE';
export const GET_DEVICE_MODELS = '@@project/GET_DEVICE_MODELS';
export const GET_DEVICE_MODELS_SUCCESS = '@@project/GET_DEVICE_MODELS_SUCCESS';
export const GET_DEVICE_MODELS_FAILURE = '@@project/GET_DEVICE_MODELS_FAILURE';
export const CREATE_PROJECT = '@@project/CREATE_PROJECT';
export const CREATE_PROJECT_SUCCESS = '@@project/CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = '@@project/CREATE_PROJECT_FAILURE';
export const DELETE_PROJECT = '@@project/DELETE_PROJECT';
export const DELETE_PROJECT_SUCCESS = '@@project/DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = '@@project/DELETE_PROJECT_FAILURE';
export const GET_DEVICE_ENTITIES = '@@project/GET_DEVICE_ENTITIES';
export const GET_DEVICE_ENTITIES_SUCCESS = '@@project/GET_DEVICE_ENTITIES_SUCCESS';
export const GET_DEVICE_ENTITIES_FAILURE = '@@project/GET_DEVICE_ENTITIES_FAILURE';
export const ADD_DEVICE_CHART = '@@project/ADD_DEVICE_CHART';
export const ADD_DEVICE_CHART_SUCCESS = '@@project/ADD_DEVICE_CHART_SUCCESS';
export const ADD_DEVICE_CHART_FAILURE = '@@project/ADD_DEVICE_CHART_FAILURE';
export const GET_DEVICE_CHARTS = '@@project/GET_DEVICE_CHARTS';
export const GET_DEVICE_CHARTS_SUCCESS = '@@project/GET_DEVICE_CHARTS_SUCCESS';
export const GET_DEVICE_CHARTS_FAILURE = '@@project/GET_DEVICE_CHARTS_FAILURE';
export const DELETE_DEVICE = '@@project/DELETE_DEVICE';
export const DELETE_DEVICE_SUCCESS = '@@project/DELETE_DEVICE_SUCCESS';
export const DELETE_DEVICE_FAILURE = '@@project/DELETE_DEVICE_FAILURE';
export const GET_DEVICE_CHARTS_DATA = '@@project/GET_DEVICE_CHARTS_DATA';
export const GET_DEVICE_CHARTS_DATA_SUCCESS = '@@project/GET_DEVICE_CHARTS_DATA_SUCCESS';
export const GET_DEVICE_CHARTS_DATA_FAILURE = '@@project/GET_DEVICE_CHARTS_DATA_FAILURE';
export const SAVE_DEVICE_SETTINGS = '@@project/SAVE_DEVICE_SETTINGS';
export const SAVE_DEVICE_SETTINGS_SUCCESS = '@@project/SAVE_DEVICE_SETTINGS_SUCCESS';
export const SAVE_DEVICE_SETTINGS_FAILURE = '@@project/SAVE_DEVICE_SETTINGS_FAILURE';
export const GET_DEVICE_CHART_BY_ID = '@@project/GET_DEVICE_CHART_BY_ID';
export const GET_DEVICE_CHART_BY_ID_SUCCESS = '@@project/GET_DEVICE_CHART_BY_ID_SUCCESS';
export const GET_DEVICE_CHART_BY_ID_FAILURE = '@@project/GET_DEVICE_CHART_BY_ID_FAILURE';
export const DELETE_DEVICE_CHART_BY_ID = '@@project/DELETE_DEVICE_CHART_BY_ID';
export const DELETE_DEVICE_CHART_BY_ID_SUCCESS = '@@project/DELETE_DEVICE_CHART_BY_ID_SUCCESS';
export const DELETE_DEVICE_CHART_BY_ID_FAILURE = '@@project/DELETE_DEVICE_CHART_BY_ID_FAILURE';

interface GetProjectsAction {
  type: typeof GET_PROJECTS;
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
  payload?: IProject;
}

interface GetProjectByIdFailureAction {
  type: typeof GET_PROJECT_BY_ID_FAILURE;
  payload?: IProject;
}

interface GetDevicesAction {
  type: typeof GET_DEVICES;
  payload?: ProjectState;
}

interface GetDevicesSuccessAction {
  type: typeof GET_DEVICES_SUCCESS;
  payload: ProjectState;
}

interface GetDevicesFailureAction {
  type: typeof GET_DEVICES_FAILURE;
  payload: ProjectState;
}

interface GetDeviceByIdAction {
  type: typeof GET_DEVICE_BY_ID;
  payload: string;
}

interface GetDeviceByIdSuccessAction {
  type: typeof GET_DEVICE_BY_ID_SUCCESS;
  payload?: IDevice;
}

interface GetDeviceByIdFailureAction {
  type: typeof GET_DEVICE_BY_ID_FAILURE;
  payload?: IDevice;
}

interface GetTriggersAction {
  type: typeof GET_TRIGGERS;
}

interface GetTriggersSuccessAction {
  type: typeof GET_TRIGGERS_SUCCESS;
  payload: ProjectState;
}

interface GetTriggersFailureAction {
  type: typeof GET_TRIGGERS_FAILURE;
  payload: ProjectState;
}

interface GetActivitiesAction {
  type: typeof GET_ACTIVITIES;
}

interface GetActivitiesSuccessAction {
  type: typeof GET_ACTIVITIES_SUCCESS;
  payload: ProjectState;
}

interface GetActivitiesFailureAction {
  type: typeof GET_ACTIVITIES_FAILURE;
  payload: ProjectState;
}

interface GetDeviceActivitiesAction {
  type: typeof GET_DEVICE_ACTIVITIES;
}

interface GetDeviceActivitiesSuccessAction {
  type: typeof GET_DEVICE_ACTIVITIES_SUCCESS;
  payload: ProjectState;
}

interface GetDeviceActivitiesFailureAction {
  type: typeof GET_DEVICE_ACTIVITIES_FAILURE;
  payload: ProjectState;
}

interface GetDeviceSettingsAction {
  type: typeof GET_DEVICE_SETTINGS;
}

interface GetDeviceSettingsSuccessAction {
  type: typeof GET_DEVICE_SETTINGS_SUCCESS;
  payload: ProjectState;
}

interface GetDeviceSettingsFailureAction {
  type: typeof GET_DEVICE_SETTINGS_FAILURE;
  payload: ProjectState;
}

interface GetDeviceTokensAction {
  type: typeof GET_DEVICE_TOKENS;
}

interface GetDeviceTokensSuccessAction {
  type: typeof GET_DEVICE_TOKENS_SUCCESS;
  payload: ProjectState;
}

interface GetDeviceTokensFailureAction {
  type: typeof GET_DEVICE_TOKENS_FAILURE;
  payload: ProjectState;
}

interface SaveProjectSettingsAction {
  type: typeof SAVE_PROJECT_SETTINGS;
  payload: ProjectState;
}

interface SaveProjectSettingsSuccessAction {
  type: typeof SAVE_PROJECT_SETTINGS_SUCCESS;
  payload: ProjectState;
}

interface SaveProjectSettingsFailureAction {
  type: typeof SAVE_PROJECT_SETTINGS_FAILURE;
  payload: ProjectState;
}

interface GetDeviceBrandsAction {
  type: typeof GET_DEVICE_BRANDS;
}

interface GetDeviceBrandsSuccessAction {
  type: typeof GET_DEVICE_BRANDS_SUCCESS;
  payload: ProjectState;
}

interface GetDeviceBrandsFailureAction {
  type: typeof GET_DEVICE_BRANDS_FAILURE;
  payload: ProjectState;
}
export interface AddDeviceAction {
  type: typeof ADD_DEVICE;
  payload: IAddDeviceFormState;
}

interface AddDeviceSuccessAction {
  type: typeof ADD_DEVICE_SUCCESS;
  payload: ProjectState;
}

interface AddDeviceFailureAction {
  type: typeof ADD_DEVICE_FAILURE;
  payload: ProjectState;
}

interface GetDeviceModelsAction {
  type: typeof GET_DEVICE_MODELS;
  payload: string;
}

interface GetDeviceModelsSuccessAction {
  type: typeof GET_DEVICE_MODELS_SUCCESS;
  payload: ProjectState;
}

interface GetDeviceModelsFailureAction {
  type: typeof GET_DEVICE_MODELS_FAILURE;
  payload: ProjectState;
}

export interface CreateProjectAction {
  type: typeof CREATE_PROJECT;
  payload: ICreateProjectFormState;
}

interface CreateProjectSuccessAction {
  type: typeof CREATE_PROJECT_SUCCESS;
  payload: ProjectState;
}

interface CreateProjectFailureAction {
  type: typeof CREATE_PROJECT_FAILURE;
  payload: ProjectState;
}

export interface DeleteProjectAction {
  type: typeof DELETE_PROJECT;
}

interface DeleteProjectSuccessAction {
  type: typeof DELETE_PROJECT_SUCCESS;
  payload: ProjectState;
}

interface DeleteProjectFailureAction {
  type: typeof DELETE_PROJECT_FAILURE;
  payload: ProjectState;
}

export interface GetDeviceEntitiesAction {
  type: typeof GET_DEVICE_ENTITIES;
}

interface GetDeviceEntitiesSuccessAction {
  type: typeof GET_DEVICE_ENTITIES_SUCCESS;
  payload: ProjectState;
}

interface GetDeviceEntitiesFailureAction {
  type: typeof GET_DEVICE_ENTITIES_FAILURE;
  payload: ProjectState;
}

export interface AddDeviceChartAction {
  type: typeof ADD_DEVICE_CHART;
  payload: IAddChartFormState;
}

interface AddDeviceChartSuccessAction {
  type: typeof ADD_DEVICE_CHART_SUCCESS;
  payload: ProjectState;
}

interface AddDeviceChartFailureAction {
  type: typeof ADD_DEVICE_CHART_FAILURE;
  payload: ProjectState;
}

export interface GetDeviceChartsAction {
  type: typeof GET_DEVICE_CHARTS;
}

interface GetDeviceChartsSuccessAction {
  type: typeof GET_DEVICE_CHARTS_SUCCESS;
  payload: ProjectState;
}

interface GetDeviceChartsFailureAction {
  type: typeof GET_DEVICE_CHARTS_FAILURE;
  payload: ProjectState;
}

export interface DeleteDeviceAction {
  type: typeof DELETE_DEVICE;
}

interface DeleteDeviceSuccessAction {
  type: typeof DELETE_DEVICE_SUCCESS;
  payload: ProjectState;
}

interface DeleteDeviceFailureAction {
  type: typeof DELETE_DEVICE_FAILURE;
  payload: ProjectState;
}

export interface GetDeviceChartsDataAction {
  type: typeof GET_DEVICE_CHARTS_DATA;
}

interface GetDeviceChartsDataSuccessAction {
  type: typeof GET_DEVICE_CHARTS_DATA_SUCCESS;
  payload: ProjectState;
}

interface GetDeviceChartsDataFailureAction {
  type: typeof GET_DEVICE_CHARTS_DATA_FAILURE;
  payload: ProjectState;
}

interface SaveDeviceSettingsAction {
  type: typeof SAVE_DEVICE_SETTINGS;
  payload: ProjectState;
}

interface SaveDeviceSettingsSuccessAction {
  type: typeof SAVE_DEVICE_SETTINGS_SUCCESS;
  payload: ProjectState;
}

interface SaveDeviceSettingsFailureAction {
  type: typeof SAVE_DEVICE_SETTINGS_FAILURE;
  payload: ProjectState;
}

interface GetChartByIdAction {
  type: typeof GET_DEVICE_CHART_BY_ID;
  payload: string;
}

interface GetChartByIdSuccessAction {
  type: typeof GET_DEVICE_CHART_BY_ID_SUCCESS;
  payload?: IChart;
}

interface GetChartByIdFailureAction {
  type: typeof GET_DEVICE_CHART_BY_ID_FAILURE;
  payload?: ProjectState;
}

interface DeleteChartByIdAction {
  type: typeof DELETE_DEVICE_CHART_BY_ID;
  payload: string;
}

interface DeleteChartByIdSuccessAction {
  type: typeof DELETE_DEVICE_CHART_BY_ID_SUCCESS;
  payload?: ProjectState;
}

interface DeleteChartByIdFailureAction {
  type: typeof DELETE_DEVICE_CHART_BY_ID_FAILURE;
  payload?: ProjectState;
}

export type ProjectActionTypes =
  | GetProjectsAction
  | GetProjectsSuccessAction
  | GetProjectsFailureAction
  | GetProjectByIdAction
  | GetProjectByIdSuccessAction
  | GetProjectByIdFailureAction
  | GetDevicesAction
  | GetDevicesSuccessAction
  | GetDevicesFailureAction
  | GetTriggersAction
  | GetTriggersSuccessAction
  | GetTriggersFailureAction
  | GetActivitiesAction
  | GetActivitiesSuccessAction
  | GetActivitiesFailureAction
  | GetDeviceByIdAction
  | GetDeviceByIdSuccessAction
  | GetDeviceByIdFailureAction
  | GetDeviceActivitiesAction
  | GetDeviceActivitiesSuccessAction
  | GetDeviceActivitiesFailureAction
  | GetDeviceSettingsAction
  | GetDeviceSettingsSuccessAction
  | GetDeviceSettingsFailureAction
  | GetDeviceTokensAction
  | GetDeviceTokensSuccessAction
  | GetDeviceTokensFailureAction
  | SaveProjectSettingsAction
  | SaveProjectSettingsSuccessAction
  | SaveProjectSettingsFailureAction
  | GetDeviceBrandsAction
  | GetDeviceBrandsSuccessAction
  | GetDeviceBrandsFailureAction
  | AddDeviceAction
  | AddDeviceSuccessAction
  | AddDeviceFailureAction
  | GetDeviceModelsAction
  | GetDeviceModelsSuccessAction
  | GetDeviceModelsFailureAction
  | CreateProjectAction
  | CreateProjectSuccessAction
  | CreateProjectFailureAction
  | DeleteProjectAction
  | DeleteProjectFailureAction
  | DeleteProjectSuccessAction
  | GetDeviceEntitiesAction
  | GetDeviceEntitiesSuccessAction
  | GetDeviceEntitiesFailureAction
  | AddDeviceChartAction
  | AddDeviceChartSuccessAction
  | AddDeviceChartFailureAction
  | GetDeviceChartsAction
  | GetDeviceChartsSuccessAction
  | GetDeviceChartsFailureAction
  | DeleteDeviceAction
  | DeleteDeviceSuccessAction
  | DeleteDeviceFailureAction
  | GetDeviceChartsDataAction
  | GetDeviceChartsDataSuccessAction
  | GetDeviceChartsDataFailureAction
  | SaveDeviceSettingsAction
  | SaveDeviceSettingsSuccessAction
  | SaveDeviceSettingsFailureAction
  | GetChartByIdAction
  | GetChartByIdSuccessAction
  | GetChartByIdFailureAction
  | DeleteChartByIdAction
  | DeleteChartByIdFailureAction
  | DeleteChartByIdSuccessAction;
