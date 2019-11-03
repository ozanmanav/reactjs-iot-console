import {
  UIState,
  UIActionTypes,
  SAVE_DASHBOARD_LAYOUTS,
  SAVE_DASHBOARD_LAYOUTS_FAILURE,
  SAVE_DASHBOARD_LAYOUTS_SUCCESS,
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

// export const defaultLayout = [
//   { i: 'l1_1', x: 0, y: 0, w: 3, h: 6 },
//   { i: 'l1_2', x: 3, y: 0, w: 3, h: 6 },
//   { i: 'l1_3', x: 6, y: 0, w: 3, h: 6 },
//   { i: 'l1_4', x: 9, y: 0, w: 3, h: 6 },
//   { i: 'l2_1', x: 0, y: 8, w: 4, h: 6 },
//   { i: 'l2_2', x: 4, y: 8, w: 4, h: 6 },
//   { i: 'l2_3', x: 8, y: 8, w: 4, h: 6 },
//   { i: 'l3_1', x: 0, y: 16, w: 4, h: 6 },
//   { i: 'l3_2', x: 4, y: 16, w: 4, h: 6 },
//   { i: 'l3_3', x: 8, y: 16, w: 4, h: 6 }
// ];

export const UIInitialState: UIState = {
  dashboardLayouts: [{ id: 'dashboard_1', title: 'First Floor', widgets: [] }],
  selectedDashboardLayout: { id: 'dashboard_1', title: 'First Floor', widgets: [] }
};

export function uiReducer(state = UIInitialState, action: UIActionTypes): UIState {
  switch (action.type) {
    case GET_DASHBOARD_LAYOUTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GET_DASHBOARD_LAYOUTS_SUCCESS: {
      return {
        ...state,
        dashboardLayouts: action.payload.dashboardLayouts
      };
    }
    case GET_DASHBOARD_LAYOUTS_FAILURE: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SAVE_DASHBOARD_LAYOUTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SAVE_DASHBOARD_LAYOUTS_SUCCESS: {
      return {
        ...state,
        dashboardLayouts: action.payload.dashboardLayouts
      };
    }
    case SAVE_DASHBOARD_LAYOUTS_FAILURE: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SET_DASHBOARD_LAYOUT: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SET_DASHBOARD_LAYOUT_SUCCESS: {
      return {
        ...state,
        selectedDashboardLayout: action.payload.selectedDashboardLayout
      };
    }
    case SET_DASHBOARD_LAYOUT_FAILURE: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SAVE_DASHBOARD_LAYOUT: {
      return {
        ...state,
        ...action.payload
      };
    }
    case SAVE_DASHBOARD_LAYOUT_SUCCESS: {
      return {
        ...state,
        selectedDashboardLayout: action.payload.selectedDashboardLayout
      };
    }
    case SAVE_DASHBOARD_LAYOUT_FAILURE: {
      return {
        ...state,
        ...action.payload
      };
    }
    case CREATE_DASHBOARD_LAYOUT: {
      return {
        ...state,
        ...action.payload
      };
    }
    case CREATE_DASHBOARD_LAYOUT_SUCCESS: {
      return {
        ...state
        // selectedDashboardLayout: action.payload.selectedDashboardLayout
      };
    }
    case CREATE_DASHBOARD_LAYOUT_FAILURE: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
