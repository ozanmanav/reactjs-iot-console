import {
    AuthState,
    USER_LOGIN,
    USER_REGISTER,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    CHECK_USER,
    CHECK_USER_SUCCESS,
    CHECK_USER_FAILURE,
} from './types';

export function userLogin(newSession: AuthState) {
    return {
        type: USER_LOGIN,
        payload: newSession,
    };
}

export function userLoginSuccess(newSession: AuthState) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: newSession,
    };
}

export function userLoginFailure(newSession: AuthState) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: newSession,
    };
}

export function userRegister(newSession: AuthState) {
    return {
        type: USER_REGISTER,
        payload: newSession,
    };
}

export function checkUser() {
    return {
        type: CHECK_USER,
    };
}

export function checkUserSuccess(newSession: AuthState) {
    return {
        type: CHECK_USER_SUCCESS,
        payload: newSession,
    };
}

export function checkUserFailure(newSession: AuthState) {
    return {
        type: CHECK_USER_FAILURE,
        payload: newSession,
    };
}
