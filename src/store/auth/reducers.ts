import {
    AuthState,
    AuthActionTypes,
    USER_LOGIN,
    USER_REGISTER,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
} from './types';
import { CRYPT_JS_SECRET_KEY } from '../../config';
import { AES } from 'crypto-js';

const initialState: AuthState = {
    loggedIn: false,
    email: '',
    password: '',
    error: undefined,
};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case USER_LOGIN_SUCCESS: {
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
        default:
            return state;
    }
}
