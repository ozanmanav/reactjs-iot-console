import * as types from './types';

export function getUserProfile() {
  return {
    type: types.GET_USER_PROFILE
  };
}

export function getUserProfileSuccess(userState: types.UserState) {
  return {
    type: types.GET_USER_PROFILE_SUCCESS,
    payload: userState
  };
}

export function getUserProfileFailure(userState: types.UserState) {
  return {
    type: types.GET_USER_PROFILE_FAILURE,
    payload: userState
  };
}

export function saveUserProfile(newSettings: types.UserState): types.UserActionTypes {
  return {
    type: types.SAVE_USER_PROFILE,
    payload: newSettings
  };
}

export function saveUserProfileSuccess(userState: types.UserState): types.UserActionTypes {
  return {
    type: types.SAVE_USER_PROFILE_SUCCESS,
    payload: userState
  };
}

export function saveUserProfileFailure(userState: types.UserState): types.UserActionTypes {
  return {
    type: types.SAVE_USER_PROFILE_FAILURE,
    payload: userState
  };
}
