export interface IUser {
  id: string;
}
export interface UserState {
  profile?: IUser;
  error?: string;
}

// Describing the different ACTION NAMES available
export const GET_USER_PROFILE = '@@user/GET_USER_PROFILE';
export const GET_USER_PROFILE_FAILURE = '@@user/GET_USER_PROFILE_FAILURE';
export const GET_USER_PROFILE_SUCCESS = '@@user/GET_USER_PROFILE_SUCCESS';

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

export type UserActionTypes = GetUserProfileAction | GetUserProfileActionSuccess | GetUserProfileActionFailure;
