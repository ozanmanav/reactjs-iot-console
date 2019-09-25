import { call, put } from 'redux-saga/effects';
import { auth } from '../firebase';
import * as actions from '../store/auth/actions';
import { push } from 'react-router-redux';
import { showErrorToast } from '../components/ui';
import { PROJECTS_FIRST_LOAD_KEY } from '../config';
import { getRequest, postRequestNoAuth } from '../utils/dataHelper';
import moment from 'moment-timezone';

export function* requestUserLogin(data: any) {
  try {
    yield call(auth.doSignInWithEmailAndPassword, data.payload.email, data.payload.password);

    yield put(
      actions.userLoginSuccess({
        loggedIn: true
      })
    );

    yield put(push('/app/dashboard'));
  } catch (error) {
    yield put(actions.userLoginFailure({ error, loggedIn: false }));
    showErrorToast(error.message);
    yield put(push('/login'));
  }
}

export function* requestGoogleLogin(data: any) {
  try {
    yield call(auth.doSignInWithGoogle, data.payload.tokenId, data.payload.accessToken);

    // const responseUserRegister = yield call(
    //   postRequestNoAuth,
    //   `/register`,
    //   {},
    //   {
    //     firstname: data.payload.firstname,
    //     lastname: data.payload.lastname,
    //     email: data.payload.email,
    //     password: data.payload.password,
    //     timezone: moment.tz.guess(true),
    //     location: '',
    //     type: 0
    //   }
    // );

    yield put(
      actions.userGoogleLoginSuccess({
        loggedIn: true
      })
    );

    yield put(push('/app/dashboard'));
  } catch (error) {
    yield put(actions.userGoogleLoginFailure({ error, loggedIn: false }));
    showErrorToast(error.message);
    yield put(push('/login'));
  }
}

export function* requestUserRegister(data: any) {
  try {
    yield call(
      postRequestNoAuth,
      `/register`,
      {},
      {
        firstname: data.payload.firstname,
        lastname: data.payload.lastname,
        email: data.payload.email,
        password: data.payload.password,
        timezone: moment.tz.guess(true),
        location: '',
        type: 0
      }
    );

    yield call(auth.doSignInWithEmailAndPassword, data.payload.email, data.payload.password);

    yield put(
      actions.userRegisterSuccess({
        loggedIn: true
      })
    );
  } catch (error) {
    yield put(push('/signup'));
    showErrorToast(error.message);
    yield put(actions.userRegisterFailure({ error, loggedIn: false }));
  }
}

export function* requestCheckUserAuthFirebase() {
  try {
    yield call(auth.onAuthStateChanged);

    yield put(
      actions.checkUserAuthFirebaseSuccess({
        loggedIn: true
      })
    );
    yield put(push('/app/dashboard'));
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
  }
}

export function* requestCheckUserFeynlab(data: any) {
  try {
    yield call(getRequest, `/checkUser?mail=${data.payload}`);
    yield put(actions.checkUserFeynlabSuccess({ loggedIn: true }));
  } catch (error) {
    showErrorToast(error);
    yield put(push('/login'));
    yield put(actions.userLogout());
    yield put(actions.checkUserFeynlabFailure({ error, loggedIn: false }));
  }
}
