import {
  SAVE_DASHBOARD_LAYOUTS,
  SAVE_DASHBOARD_LAYOUTS_SUCCESS,
  SAVE_DASHBOARD_LAYOUTS_FAILURE,
  UIState,
  SET_DASHBOARD_LAYOUT,
  SET_DASHBOARD_LAYOUT_SUCCESS,
  SET_DASHBOARD_LAYOUT_FAILURE,
  GET_DASHBOARD_LAYOUTS,
  GET_DASHBOARD_LAYOUTS_SUCCESS,
  GET_DASHBOARD_LAYOUTS_FAILURE,
  SAVE_DASHBOARD_LAYOUT,
  SAVE_DASHBOARD_LAYOUT_SUCCESS,
  SAVE_DASHBOARD_LAYOUT_FAILURE,
  CREATE_DASHBOARD_LAYOUT,
  CREATE_DASHBOARD_LAYOUT_SUCCESS,
  CREATE_DASHBOARD_LAYOUT_FAILURE
} from './types';
import { IAddNewDashboardModalState } from '../../components/modals/addNewDashboardModal/AddNewDashboardModal';

export function getDashboardLayouts() {
  return {
    type: GET_DASHBOARD_LAYOUTS
  };
}

export function getDashboardLayoutsSuccess(uiState: UIState) {
  return {
    type: GET_DASHBOARD_LAYOUTS_SUCCESS,
    payload: uiState
  };
}

export function getDashboardLayoutsFailure(uiState: UIState) {
  return {
    type: GET_DASHBOARD_LAYOUTS_FAILURE,
    payload: uiState
  };
}

export function saveDashboardLayouts(uiState: UIState) {
  return {
    type: SAVE_DASHBOARD_LAYOUTS,
    payload: uiState
  };
}

export function saveDashboardLayoutsSuccess(uiState: UIState) {
  return {
    type: SAVE_DASHBOARD_LAYOUTS_SUCCESS,
    payload: uiState
  };
}

export function saveDashboardLayoutsFailure(uiState: UIState) {
  return {
    type: SAVE_DASHBOARD_LAYOUTS_FAILURE,
    payload: uiState
  };
}

export function setDashboardLayout(uiState: UIState) {
  return {
    type: SET_DASHBOARD_LAYOUT,
    payload: uiState
  };
}

export function setDashboardLayoutSuccess(uiState: UIState) {
  return {
    type: SET_DASHBOARD_LAYOUT_SUCCESS,
    payload: uiState
  };
}

export function setDashboardLayoutFailure(uiState: UIState) {
  return {
    type: SET_DASHBOARD_LAYOUT_FAILURE,
    payload: uiState
  };
}

export function saveDashboardLayout(uiState: UIState) {
  return {
    type: SAVE_DASHBOARD_LAYOUT,
    payload: uiState
  };
}

export function saveDashboardLayoutSuccess(uiState: UIState) {
  return {
    type: SAVE_DASHBOARD_LAYOUT_SUCCESS,
    payload: uiState
  };
}

export function saveDashboardLayoutFailure(uiState: UIState) {
  return {
    type: SAVE_DASHBOARD_LAYOUT_FAILURE,
    payload: uiState
  };
}

export function createDashboardLayout(newDashboardValues: IAddNewDashboardModalState) {
  return {
    type: CREATE_DASHBOARD_LAYOUT,
    payload: newDashboardValues
  };
}

export function createDashboardLayoutSuccess(uiState: UIState) {
  return {
    type: CREATE_DASHBOARD_LAYOUT_SUCCESS,
    payload: uiState
  };
}

export function createDashboardLayoutFailure(uiState: UIState) {
  return {
    type: CREATE_DASHBOARD_LAYOUT_FAILURE,
    payload: uiState
  };
}
