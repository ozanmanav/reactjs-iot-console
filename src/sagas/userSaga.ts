import { call, put } from 'redux-saga/effects';
import * as actions from '../store/user/actions';
import { getRequest } from '../utils/dataHelper';
import { showErrorToast } from '../components/ui';
import { auth } from '../firebase';

export function* requestGetUserProfile() {
  try {
    const currentAuthenticatedUser = yield call(auth.onAuthStateChanged);
    const responseUserProfile = yield call(getRequest, `/user/${currentAuthenticatedUser.uid}`);

    yield put(
      actions.getUserProfileSuccess({
        currentUser: {
          email: currentAuthenticatedUser.email,
          firstname: responseUserProfile.data.User.name,
          accountProperties: responseUserProfile.data.User.accountProperties,
          accountTypeImage: responseUserProfile.data.User.accountTypeImage,
          profilePhoto: responseUserProfile.data.User.image
        }
      })
    );
  } catch (error) {
    yield put(actions.getUserProfileFailure({ error }));
    showErrorToast(error.message);
  }
}
