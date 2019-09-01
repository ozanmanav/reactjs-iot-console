import { call, put } from 'redux-saga/effects';
import { auth } from '../firebase';
import { AuthState } from '../store/auth/types';
import { userLoginSuccess, userLoginFailure, checkUserSuccess, checkUserFailure } from '../store/auth/actions';
import { push } from 'react-router-redux';
import { showErrorToast } from '../components/ui';

export function* requestUserLogin(data: any) {
    try {
        const response = yield call(auth.doSignInWithEmailAndPassword, data.payload.email, data.payload.password);

        const successSession: AuthState = { user: response.user, loggedIn: true };

        yield put(userLoginSuccess(successSession));
        yield put(push('/app'));
    } catch (error) {
        yield put(push('/login'));
        const errorSession: AuthState = { error, loggedIn: false };
        showErrorToast(error.message);
        yield put(userLoginFailure(errorSession));
    }
}

export function* checkUserAuth() {
    try {
        const currentUser = yield call(auth.onAuthStateChanged);

        const successCheckSession: AuthState = { user: currentUser, loggedIn: true };

        yield put(checkUserSuccess(successCheckSession));
    } catch (error) {
        yield put(push('/login'));
        const errorSession: AuthState = { error, loggedIn: false };
        showErrorToast(error.message);
        yield put(checkUserFailure(errorSession));
    }
}
