import {
  AuthState,
  AuthActionTypes,
  USER_LOGIN,
  USER_REGISTER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  CHECK_USER,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
  USER_LOGOUT,
  IAuthLoadingState,
  USER_GOOGLE_LOGIN,
  USER_GOOGLE_LOGIN_SUCCESS,
  USER_GOOGLE_LOGIN_FAILURE
} from './types';
import { CRYPT_JS_SECRET_KEY } from '../../config';
import { AES } from 'crypto-js';

export const AuthInitialState: AuthState = {
  loading: {} as IAuthLoadingState,
  loggedIn: false,
  email: '',
  password: '',
  error: undefined
};

export function authReducer(state = AuthInitialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        loading: {
          ...state.loading,
          login: true
        },
        ...action.payload
      };
    }
    case USER_LOGIN_SUCCESS: {
      if (typeof state.password === 'string') {
        const passwordHash = AES.encrypt(state.password, CRYPT_JS_SECRET_KEY || '');
        action.payload.password = passwordHash.toString();
      }

      return {
        ...state,
        loading: {
          ...state.loading,
          login: false
        },
        ...action.payload
      };
    }
    case USER_LOGIN_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          login: false
        },
        ...action.payload
      };
    }
    case USER_REGISTER: {
      return {
        ...state,
        loading: {
          ...state.loading,
          register: true
        },
        ...action.payload
      };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          register: false
        },
        ...action.payload
      };
    }
    case USER_REGISTER_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          register: false
        },
        ...action.payload
      };
    }
    case CHECK_USER: {
      return {
        ...state,
        loading: {
          ...state.loading,
          checkUser: true
        }
      };
    }
    case CHECK_USER_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          checkUser: false
        },
        ...action.payload
      };
    }
    case CHECK_USER_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          checkUser: false
        },
        ...action.payload
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        loggedIn: false
      };
    }
    case USER_GOOGLE_LOGIN: {
      return {
        ...state,
        loading: {
          ...state.loading,
          googleLogin: true
        },
        ...action.payload
      };
    }
    case USER_GOOGLE_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          googleLogin: false
        },
        ...action.payload
      };
    }
    case USER_GOOGLE_LOGIN_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          googleLogin: false
        },
        ...action.payload
      };
    }
    default:
      return state;
  }
}
