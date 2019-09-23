import {
  UserActionTypes,
  UserState,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
} from './types';

export const UserInitialState: UserState = {
  profile: undefined
};

export function uiReducer(state = UserInitialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case GET_USER_PROFILE: {
      return {
        ...state
      };
    }
    case GET_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case GET_USER_PROFILE_FAILURE: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
