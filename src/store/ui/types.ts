import GridLayout from 'react-grid-layout';

type WidgetTypes =
  | 'liquid-gauge'
  | 'line-chart'
  | 'heat-map'
  | 'bar-chart'
  | 'area-chart'
  | 'scatter-chart'
  | 'pie-chart'
  | 'radar-chart';

export interface IWidget extends GridLayout.Layout {
  name: string;
  type: WidgetTypes;
}

export interface IDashboardLayout {
  id: string;
  title: string;
  layouts?: GridLayout.Layout[];
  widgets: IWidget[];
}

export interface UIState {
  dashboardLayouts?: IDashboardLayout[];
  selectedDashboardLayout?: IDashboardLayout;
}

// Describing the different ACTION NAMES available
export const GET_DASHBOARD_LAYOUTS = 'GET_DASHBOARD_LAYOUTS';
export const GET_DASHBOARD_LAYOUTS_FAILURE = 'GET_DASHBOARD_LAYOUTS_FAILURE';
export const GET_DASHBOARD_LAYOUTS_SUCCESS = 'GET_DASHBOARD_LAYOUTS_SUCCESS';
export const SAVE_DASHBOARD_LAYOUT = 'SAVE_DASHBOARD_LAYOUT';
export const SAVE_DASHBOARD_LAYOUT_FAILURE = 'SAVE_DASHBOARD_LAYOUT_FAILURE';
export const SAVE_DASHBOARD_LAYOUT_SUCCESS = 'SAVE_DASHBOARD_LAYOUT_SUCCESS';
export const SAVE_DASHBOARD_LAYOUTS = 'SAVE_DASHBOARD_LAYOUTS';
export const SAVE_DASHBOARD_LAYOUTS_FAILURE = 'SAVE_DASHBOARD_LAYOUTS_FAILURE';
export const SAVE_DASHBOARD_LAYOUTS_SUCCESS = 'SAVE_DASHBOARD_LAYOUTS_SUCCESS';
export const SET_DASHBOARD_LAYOUT = 'SET_DASHBOARD_LAYOUT';
export const SET_DASHBOARD_LAYOUT_FAILURE = 'SET_DASHBOARD_LAYOUT_FAILURE';
export const SET_DASHBOARD_LAYOUT_SUCCESS = 'SET_DASHBOARD_LAYOUT_SUCCESS';
export const CREATE_DASHBOARD_LAYOUT = 'CREATE_DASHBOARD_LAYOUT';
export const CREATE_DASHBOARD_LAYOUT_FAILURE = 'CREATE_DASHBOARD_LAYOUT_FAILURE';
export const CREATE_DASHBOARD_LAYOUT_SUCCESS = 'CREATE_DASHBOARD_LAYOUT_SUCCESS';

interface GetDashboardLayoutsAction {
  type: typeof GET_DASHBOARD_LAYOUTS;
  payload: UIState;
}
interface GetDashboardLayoutsActionSuccess {
  type: typeof GET_DASHBOARD_LAYOUTS_SUCCESS;
  payload: UIState;
}
interface GetDashboardLayoutsActionFailure {
  type: typeof GET_DASHBOARD_LAYOUTS_FAILURE;
  payload: UIState;
}

interface SaveDashboardLayoutsAction {
  type: typeof SAVE_DASHBOARD_LAYOUTS;
  payload: UIState;
}
interface SaveDashboardLayoutsActionSuccess {
  type: typeof SAVE_DASHBOARD_LAYOUTS_SUCCESS;
  payload: UIState;
}
interface SaveDashboardLayoutsActionFailure {
  type: typeof SAVE_DASHBOARD_LAYOUTS_FAILURE;
  payload: UIState;
}
interface SaveDashboardLayoutAction {
  type: typeof SAVE_DASHBOARD_LAYOUT;
  payload: UIState;
}
interface SaveDashboardLayoutActionSuccess {
  type: typeof SAVE_DASHBOARD_LAYOUT_SUCCESS;
  payload: UIState;
}
interface SaveDashboardLayoutActionFailure {
  type: typeof SAVE_DASHBOARD_LAYOUT_FAILURE;
  payload: UIState;
}

interface SetDashboardLayoutAction {
  type: typeof SET_DASHBOARD_LAYOUT;
  payload: UIState;
}
interface SetDashboardLayoutActionSuccess {
  type: typeof SET_DASHBOARD_LAYOUT_SUCCESS;
  payload: UIState;
}
interface SetDashboardLayoutActionFailure {
  type: typeof SET_DASHBOARD_LAYOUT_FAILURE;
  payload: UIState;
}

interface CreateDashboardLayoutAction {
  type: typeof CREATE_DASHBOARD_LAYOUT;
  payload: UIState;
}
interface CreateDashboardLayoutActionSuccess {
  type: typeof CREATE_DASHBOARD_LAYOUT_SUCCESS;
  payload: UIState;
}
interface CreateDashboardLayoutActionFailure {
  type: typeof CREATE_DASHBOARD_LAYOUT_FAILURE;
  payload: UIState;
}

export type UIActionTypes =
  | SaveDashboardLayoutsAction
  | SaveDashboardLayoutsActionSuccess
  | SaveDashboardLayoutsActionFailure
  | SetDashboardLayoutAction
  | SetDashboardLayoutActionSuccess
  | SetDashboardLayoutActionFailure
  | GetDashboardLayoutsAction
  | GetDashboardLayoutsActionSuccess
  | GetDashboardLayoutsActionFailure
  | SaveDashboardLayoutAction
  | SaveDashboardLayoutActionSuccess
  | SaveDashboardLayoutActionFailure
  | CreateDashboardLayoutAction
  | CreateDashboardLayoutActionSuccess
  | CreateDashboardLayoutActionFailure;
