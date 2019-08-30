import { AuthState, USER_LOGIN, USER_REGISTER } from './types';

export function userLogin(newSession: AuthState) {
    return {
        type: USER_LOGIN,
        payload: newSession,
    };
}

export function userRegister(newSession: AuthState) {
    return {
        type: USER_REGISTER,
        payload: newSession,
    };
}
