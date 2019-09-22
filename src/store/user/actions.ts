import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_FAILURE, UserState } from './types';

export function getUserProfile() {
  return {
    type: GET_USER_PROFILE
  };
}

export function getUserProfileSuccess(userState: UserState) {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: userState
  };
}

export function getUserProfileFailure(userState: UserState) {
  return {
    type: GET_USER_PROFILE_FAILURE,
    payload: userState
  };
}
