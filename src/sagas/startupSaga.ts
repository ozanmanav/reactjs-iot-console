import { put } from 'redux-saga/effects';
import { checkUser } from '../store/auth/actions';
import { startupSuccess } from '../store/startup/actions';
/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
    yield put(checkUser());

    yield put(startupSuccess());
}