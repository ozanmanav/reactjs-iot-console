import { put } from 'redux-saga/effects';
import { setSidebarStatusSuccess } from '../store/ui/actions';
/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* requestSidebarOpen(data: any) {
    yield put(setSidebarStatusSuccess(data.payload.isSidebarOpen));
}
