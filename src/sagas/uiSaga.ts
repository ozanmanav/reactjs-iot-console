import { put } from 'redux-saga/effects';
import {
  saveDashboardLayoutsSuccess,
  setDashboardLayoutSuccess,
  getDashboardLayoutsSuccess,
  getDashboardLayoutsFailure,
  saveDashboardLayoutsFailure
} from '../store/ui/actions';
import { UIState } from '../store/ui/types';

export function* requestGetDashboardLayouts(data: any) {
  try {
    const data = yield localStorage.getItem('savedlayouts');

    yield put(
      getDashboardLayoutsSuccess({
        dashboardLayouts: data ? JSON.parse(data) : [{ id: 'dashboard_1', title: 'First Floor', widgets: [] }]
      } as UIState)
    );
  } catch (error) {
    yield put(getDashboardLayoutsFailure(error));
  }
}

export function* requestSaveDashboardLayouts(data: any) {
  try {
    yield localStorage.setItem('savedlayouts', JSON.stringify(data));

    yield put(saveDashboardLayoutsSuccess({ dashboardLayouts: data } as UIState));
  } catch (error) {
    yield put(saveDashboardLayoutsFailure(error));
  }
}

export function* requestSetDashboardLayout(data: any) {
  yield put(setDashboardLayoutSuccess(data.payload));
}
