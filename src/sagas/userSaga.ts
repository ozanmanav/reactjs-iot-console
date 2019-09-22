import { call, put } from 'redux-saga/effects';
import * as actions from '../store/user/actions';
import { getRequest } from '../utils/dataHelper';
import { showErrorToast } from '../components/ui';
import { auth } from '../firebase';

export function* requestGetUserProfile() {
  try {
    const currentUser = yield call(auth.onAuthStateChanged);
    console.log(currentUser);
    const responseUserProfile = yield call(getRequest, `/user/${currentUser && currentUser.uid}`);
    console.log(responseUserProfile);
    // yield put(
    //   actions.getUserProfileSuccess({
    //     profile: responseUserProfile
    //   })
    // );
  } catch (error) {
    yield put(actions.getUserProfileFailure({ error }));
    showErrorToast(error.message);
  }
}
