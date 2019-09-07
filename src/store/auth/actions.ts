import {
    AuthState,
    USER_LOGIN,
    USER_REGISTER,
    USER_LOGIN_SUCCESS,
    CHECK_USER,
    CHECK_USER_SUCCESS,
    CHECK_USER_FAILURE,
    USER_LOGOUT,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_GOOGLE_LOGIN,
    USER_GOOGLE_LOGIN_SUCCESS,
    USER_GOOGLE_LOGIN_FAILURE,
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

export function userGoogleLogin(newSession: AuthState) {
    return {
        type: USER_GOOGLE_LOGIN,
        payload: newSession,
    };
}

export function userGoogleLoginSuccess(newSession: AuthState) {
    return {
        type: USER_GOOGLE_LOGIN_SUCCESS,
        payload: newSession,
    };
}

export function userGoogleLoginFailure(newSession: AuthState) {
    return {
        type: USER_GOOGLE_LOGIN_FAILURE,
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

export function userLogout() {
    return {
        type: USER_LOGOUT,
    };
}

export function userRegister(newSession: AuthState) {
    return {
        type: USER_REGISTER,
        payload: newSession,
    };
}

export function userRegisterSuccess(newSession: AuthState) {
    return {
        type: USER_REGISTER_SUCCESS,
        payload: newSession,
    };
}

export function userRegisterFailure(newSession: AuthState) {
    return {
        type: USER_REGISTER_FAILURE,
        payload: newSession,
    };
}
