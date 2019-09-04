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
} from './types';
import { CRYPT_JS_SECRET_KEY } from '../../config';
import { AES } from 'crypto-js';

const initialState: AuthState = {
    loading: <IAuthLoadingState>{},
    loggedIn: false,
    email: '',
    password: '',
    error: undefined,
};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case USER_LOGIN: {
            state.loading = { login: true };
            return {
                ...state,
                ...action.payload,
            };
        }
        case USER_LOGIN_SUCCESS: {
            state.loading = { login: false };
            if (typeof state.password === 'string') {
                var passwordHash = AES.encrypt(state.password, CRYPT_JS_SECRET_KEY || '');
                action.payload.password = passwordHash.toString();
            }
            return {
                ...state,
                ...action.payload,
            };
        }
        case USER_LOGIN_FAILURE: {
            state.loading = { login: false };
            return {
                ...state,
                ...action.payload,
            };
        }
        case USER_REGISTER: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case USER_REGISTER_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case USER_REGISTER_FAILURE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case CHECK_USER: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case CHECK_USER_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case CHECK_USER_FAILURE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case USER_LOGOUT: {
            state.loggedIn = false;
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}
