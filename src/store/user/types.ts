import { IUser } from '../auth/types';

export interface IUserLoadingState {
  currentUser?: boolean;
  saveUserProfile?: boolean;
}

export interface UserState {
  loading?: IUserLoadingState;
  currentUser?: IUser;
  error?: string;
}

// Describing the different ACTION NAMES available
export const GET_USER_PROFILE = '@@user/GET_USER_PROFILE';
export const GET_USER_PROFILE_FAILURE = '@@user/GET_USER_PROFILE_FAILURE';
export const GET_USER_PROFILE_SUCCESS = '@@user/GET_USER_PROFILE_SUCCESS';
export const SAVE_USER_PROFILE = '@@user/SAVE_USER_PROFILE';
export const SAVE_USER_PROFILE_FAILURE = '@@user/SAVE_USER_PROFILE_FAILURE';
export const SAVE_USER_PROFILE_SUCCESS = '@@user/SAVE_USER_PROFILE_SUCCESS';

interface GetUserProfileAction {
  type: typeof GET_USER_PROFILE;
  payload: UserState;
}
interface GetUserProfileActionSuccess {
  type: typeof GET_USER_PROFILE_FAILURE;
  payload: UserState;
}
interface GetUserProfileActionFailure {
  type: typeof GET_USER_PROFILE_SUCCESS;
  payload: UserState;
}

interface SaveUserProfileAction {
  type: typeof SAVE_USER_PROFILE;
  payload: UserState;
}
interface SaveUserProfileActionSuccess {
  type: typeof SAVE_USER_PROFILE_FAILURE;
  payload: UserState;
}
interface SaveUserProfileActionFailure {
  type: typeof SAVE_USER_PROFILE_SUCCESS;
  payload: UserState;
}

export type UserActionTypes =
  | GetUserProfileAction
  | GetUserProfileActionSuccess
  | GetUserProfileActionFailure
  | SaveUserProfileAction
  | SaveUserProfileActionSuccess
  | SaveUserProfileActionFailure;
