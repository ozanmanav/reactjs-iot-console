import * as types from './types';

export const UserInitialState: types.UserState = {
  loading: {} as types.IUserLoadingState,
  currentUser: undefined
};

export function userReducer(state = UserInitialState, action: types.UserActionTypes): types.UserState {
  switch (action.type) {
    case types.GET_USER_PROFILE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentUser: true
        }
      };
    }
    case types.GET_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentUser: false
        },
        ...action.payload
      };
    }
    case types.GET_USER_PROFILE_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentUser: false
        },
        ...action.payload
      };
    }
    case types.SAVE_USER_PROFILE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          saveUserProfile: true
        }
      };
    }
    case types.SAVE_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          saveUserProfile: false
        },
        ...action.payload
      };
    }
    case types.SAVE_USER_PROFILE_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          saveUserProfile: false
        }
      };
    }
    default:
      return state;
  }
}
