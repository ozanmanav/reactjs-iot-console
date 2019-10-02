import { put, call } from 'redux-saga/effects';
import { checkUserAuthFirebase } from '../store/auth/actions';
import { startupSuccess } from '../store/startup/actions';
import { getDeviceBrands } from '../store/project/actions';
import { persistor } from '../App';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
  yield call(persistor.purge);
  yield put(checkUserAuthFirebase());

  yield put(getDeviceBrands());

  yield put(startupSuccess());
}
