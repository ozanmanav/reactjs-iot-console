import * as types from './types';
import { AuthState, AuthActionTypes } from './types';

export function userLogin(newSession: AuthState): AuthActionTypes {
  return {
    type: types.USER_LOGIN,
    payload: newSession
  };
}

export function userLoginSuccess(newSession: AuthState): AuthActionTypes {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload: newSession
  };
}

export function userLoginFailure(newSession: AuthState): AuthActionTypes {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload: newSession
  };
}

export function userGoogleLogin(newSession: AuthState): AuthActionTypes {
  return {
    type: types.USER_GOOGLE_LOGIN,
    payload: newSession
  };
}

export function userGoogleLoginSuccess(newSession: AuthState): AuthActionTypes {
  return {
    type: types.USER_GOOGLE_LOGIN_SUCCESS,
    payload: newSession
  };
}

export function userGoogleLoginFailure(newSession: AuthState): AuthActionTypes {
  return {
    type: types.USER_GOOGLE_LOGIN_FAILURE,
    payload: newSession
  };
}

export function checkUser(): AuthActionTypes {
  return {
    type: types.CHECK_USER
  };
}

export function checkUserSuccess(newSession: AuthState): AuthActionTypes {
  return {
    type: types.CHECK_USER_SUCCESS,
    payload: newSession
  };
}

export function checkUserFailure(newSession: AuthState): AuthActionTypes {
  return {
    type: types.CHECK_USER_FAILURE,
    payload: newSession
  };
}

export function userLogout(): AuthActionTypes {
  return {
    type: types.USER_LOGOUT
  };
}

export function userRegister(newSession: AuthState): AuthActionTypes {
  return {
    type: types.USER_REGISTER,
    payload: newSession
  };
}

export function userRegisterSuccess(newSession: AuthState): AuthActionTypes {
  return {
    type: types.USER_REGISTER_SUCCESS,
    payload: newSession
  };
}

export function userRegisterFailure(newSession: AuthState): AuthActionTypes {
  return {
    type: types.USER_REGISTER_FAILURE,
    payload: newSession
  };
}
