import {
  UserActionTypes,
  UserState,
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  IUserLoadingState
} from './types';

export const UserInitialState: UserState = {
  loading: {} as IUserLoadingState,
  currentUser: undefined
};

export function userReducer(state = UserInitialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case GET_USER_PROFILE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentUser: true
        }
      };
    }
    case GET_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentUser: false
        },
        ...action.payload
      };
    }
    case GET_USER_PROFILE_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentUser: false
        },
        ...action.payload
      };
    }
    default:
      return state;
  }
}
