import { User } from 'firebase';

// Describing the shape of the system's slice of state
export interface IAuthLoadingState {
    login?: boolean;
    logout?: boolean;
    checkUser?: boolean;
}

export interface AuthState {
    loading?: IAuthLoadingState;
    loggedIn?: boolean;
    email?: string;
    password?: string;
    error?: string;
    user?: User;
}

// Describing the different ACTION NAMES available
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS ';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE ';
export const CHECK_USER = 'CHECK_USER';
export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS ';
export const CHECK_USER_FAILURE = 'CHECK_USER_FAILURE ';
export const USER_LOGOUT = 'USER_LOGOUT';

interface UserLoginAction {
    type: typeof USER_LOGIN;
    payload: AuthState;
}

export interface UserLoginSuccessAction {
    type: typeof USER_LOGIN_SUCCESS;
    payload: AuthState;
}

export interface UserLoginFailureAction {
    type: typeof USER_LOGIN_FAILURE;
    payload: AuthState;
}

interface UserRegisterAction {
    type: typeof USER_REGISTER;
    payload: AuthState;
}

interface UserRegisterFailureAction {
    type: typeof USER_REGISTER_FAILURE;
    payload: AuthState;
}
interface UserRegisterSuccessAction {
    type: typeof USER_REGISTER_SUCCESS;
    payload: AuthState;
}

interface CheckUserAction {
    type: typeof CHECK_USER;
    payload: AuthState;
}

interface CheckUserFailureAction {
    type: typeof CHECK_USER_FAILURE;
    payload: AuthState;
}
interface CheckUserSuccessAction {
    type: typeof CHECK_USER_SUCCESS;
    payload: AuthState;
}

interface UserLogoutAction {
    type: typeof USER_LOGOUT;
    payload: AuthState;
}

export type AuthActionTypes =
    | UserLoginAction
    | UserRegisterAction
    | UserLoginSuccessAction
    | UserLoginFailureAction
    | UserRegisterFailureAction
    | UserRegisterSuccessAction
    | CheckUserAction
    | CheckUserFailureAction
    | CheckUserSuccessAction
    | UserLogoutAction;
