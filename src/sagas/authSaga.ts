import { call, put } from 'redux-saga/effects';
import { auth } from '../firebase';
import * as actions from '../store/auth/actions';
import { push } from 'react-router-redux';
import { showErrorToast } from '../components/ui';
import { PROJECTS_FIRST_LOAD_KEY } from '../config';
import { getRequest } from '../utils/dataHelper';

export function* requestUserLogin(data: any) {
  try {
    const response = yield call(auth.doSignInWithEmailAndPassword, data.payload.email, data.payload.password);

    yield put(
      actions.userLoginSuccess({
        user: response.user
      })
    );

    yield put(actions.checkUserFeynlab(response.user && response.user.email));
  } catch (error) {
    yield put(actions.userLoginFailure({ error, loggedIn: false }));
    showErrorToast(error.message);
    yield put(push('/login'));
  }
}

export function* requestGoogleLogin(data: any) {
  try {
    const response = yield call(auth.doSignInWithGoogle, data.payload.tokenId, data.payload.accessToken);

    yield put(
      actions.userGoogleLoginSuccess({
        user: response.user
      })
    );

    yield put(actions.checkUserFeynlab(response.user && response.user.email));
  } catch (error) {
    yield put(actions.userGoogleLoginFailure({ error, loggedIn: false }));
    showErrorToast(error.message);
    yield put(push('/login'));
  }
}

export function* requestUserRegister(data: any) {
  try {
    const response = yield call(auth.doCreateUserWithEmailAndPassword, data.payload.email, data.payload.password);

    yield put(
      actions.userRegisterSuccess({
        user: response.user
      })
    );

    yield put(actions.checkUserFeynlab(response.user && response.user.email));
  } catch (error) {
    yield put(push('/signup'));
    showErrorToast(error.message);
    yield put(actions.userRegisterFailure({ error, loggedIn: false }));
  }
}

export function* requestCheckUserAuthFirebase() {
  try {
    const currentUser = yield call(auth.onAuthStateChanged);

    yield put(actions.checkUserFeynlab(currentUser && currentUser.email));

    yield put(
      actions.checkUserAuthFirebaseSuccess({
        user: currentUser
      })
    );
  } catch (error) {
    yield put(push('/login'));
    showErrorToast(error);
    yield put(actions.checkUserAuthFirebaseFailure({ error, loggedIn: false }));
  }
}

export function* requestUserLogout() {
  try {
    yield call(auth.doSignOut);
    localStorage.setItem(PROJECTS_FIRST_LOAD_KEY, JSON.stringify(true));
    yield put(push('/login'));
  } catch (error) {
    yield put(push('/login'));
    showErrorToast(error);
    yield put(actions.checkUserAuthFirebaseFailure({ error, loggedIn: false }));
  }
}

export function* requestCheckUserFeynlab(data: any) {
  try {
    yield call(getRequest, `/checkUser?mail=${data.payload}`);

    yield put(actions.checkUserFeynlabSuccess({ loggedIn: true }));
    yield put(push('/app/dashboard'));
  } catch (error) {
    showErrorToast(error.Message === 'Mail does not exist' ? error.Message : error);

    yield put(push('/login'));
    yield put(actions.userLogout());
    yield put(actions.checkUserFeynlabFailure({ error, loggedIn: false }));
  }
}
