import { call, put } from 'redux-saga/effects';
import { auth } from '../firebase';
import { AuthState } from '../store/auth/types';
import {
    userLoginSuccess,
    userLoginFailure,
    checkUserSuccess,
    checkUserFailure,
    userRegisterSuccess,
    userRegisterFailure,
    userGoogleLoginSuccess,
    userGoogleLoginFailure,
} from '../store/auth/actions';
import { push } from 'react-router-redux';
import { showErrorToast } from '../components/ui';

export function* requestUserLogin(data: any) {
    try {
        const response = yield call(auth.doSignInWithEmailAndPassword, data.payload.email, data.payload.password);

        const successSession: AuthState = { user: response.user, loggedIn: true };

        yield put(userLoginSuccess(successSession));
        yield put(push('/app/dashboard'));
    } catch (error) {
        yield put(push('/login'));
        const errorSession: AuthState = { error, loggedIn: false };
        showErrorToast(error.message);
        yield put(userLoginFailure(errorSession));
    }
}

export function* requestGoogleLogin(data: any) {
    try {
        const response = yield call(auth.doSignInWithGoogle, data.payload.tokenId, data.payload.accessToken);

        const successSession: AuthState = { user: response.user, loggedIn: true };

        yield put(userGoogleLoginSuccess(successSession));
        yield put(push('/app/dashboard'));
    } catch (error) {
        yield put(push('/login'));
        const errorSession: AuthState = { error, loggedIn: false };
        showErrorToast(error.message);
        yield put(userGoogleLoginFailure(errorSession));
    }
}

export function* requestUserRegister(data: any) {
    try {
        const response = yield call(auth.doCreateUserWithEmailAndPassword, data.payload.email, data.payload.password);

        const successSession: AuthState = { user: response.user, loggedIn: true };

        yield put(userRegisterSuccess(successSession));
        yield put(push('/app/dashboard'));
    } catch (error) {
        yield put(push('/signup'));
        const errorSession: AuthState = { error, loggedIn: false };
        showErrorToast(error.message);
        yield put(userRegisterFailure(errorSession));
    }
}

export function* checkUserAuth() {
    try {
        const currentUser = yield call(auth.onAuthStateChanged);

        const successCheckSession: AuthState = { user: currentUser, loggedIn: true };

        yield put(checkUserSuccess(successCheckSession));
        yield put(push('/app'));
    } catch (error) {
        console.log(error);
        yield put(push('/login'));
        const errorSession: AuthState = { error, loggedIn: false };
        showErrorToast(error);
        yield put(checkUserFailure(errorSession));
    }
}

export function* requestUserLogout() {
    try {
        yield call(auth.doSignOut);
        yield put(push('/login'));
    } catch (error) {
        yield put(push('/login'));
        const errorSession: AuthState = { error, loggedIn: false };
        showErrorToast(error);
        yield put(checkUserFailure(errorSession));
    }
}
