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

export function checkUserAuthFirebase(): AuthActionTypes {
  return {
    type: types.CHECK_USER_AUTH_FIREBASE
  };
}

export function checkUserAuthFirebaseSuccess(newSession: AuthState): AuthActionTypes {
  return {
    type: types.CHECK_USER_AUTH_FIREBASE_SUCCESS,
    payload: newSession
  };
}

export function checkUserAuthFirebaseFailure(newSession: AuthState): AuthActionTypes {
  return {
    type: types.CHECK_USER_AUTH_FIREBASE_FAILURE,
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

export function checkUserFeynlab(email: string): AuthActionTypes {
  return {
    type: types.CHECK_USER_FEYNLAB,
    payload: email
  };
}

export function checkUserFeynlabSuccess(newSession: AuthState): AuthActionTypes {
  return {
    type: types.CHECK_USER_FEYNLAB_SUCCESS,
    payload: newSession
  };
}

export function checkUserFeynlabFailure(newSession: AuthState): AuthActionTypes {
  return {
    type: types.CHECK_USER_FEYNLAB_FAILURE,
    payload: newSession
  };
}

export function registerUserFeynlab(email: string): AuthActionTypes {
  return {
    type: types.REGISTER_USER_FEYNLAB,
    payload: email
  };
}

export function registerUserFeynlabSuccess(newSession: AuthState): AuthActionTypes {
  return {
    type: types.REGISTER_USER_FEYNLAB_SUCCESS,
    payload: newSession
  };
}

export function registerUserFeynlabFailure(newSession: AuthState): AuthActionTypes {
  return {
    type: types.REGISTER_USER_FEYNLAB_FAILURE,
    payload: newSession
  };
}
