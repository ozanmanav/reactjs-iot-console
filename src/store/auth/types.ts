export interface IAuthLoadingState {
  login?: boolean;
  register?: boolean;
  logout?: boolean;
  checkUserAuthFirebase?: boolean;
  googleLogin?: boolean;
  checkUserFeynlab?: boolean;
  registerUserFeynlab?: boolean;
}

export interface IUser {
  id?: string;
  firstname?: string;
  lastname?: string;
  profilePhoto?: string;
  accountProperties: {
    deviceLimit?: string;
    accountType?: string;
  };
  accountTypeImage?: object;
  timezone?: object;
  email?: string;
}

export interface AuthState {
  loading?: IAuthLoadingState;
  loggedIn?: boolean;
  email?: string;
  password?: string;
  error?: string;
  currentUser?: IUser;
}

export const USER_LOGIN = '@@auth/USER_LOGIN';
export const USER_LOGIN_SUCCESS = '@@auth/USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = '@@auth/USER_LOGIN_FAILURE';
export const USER_REGISTER = '@@auth/USER_REGISTER';
export const USER_REGISTER_SUCCESS = '@@auth/USER_REGISTER_SUCCESS ';
export const USER_REGISTER_FAILURE = '@@auth/USER_REGISTER_FAILURE ';
export const CHECK_USER_AUTH_FIREBASE = '@@auth/CHECK_USER_AUTH_FIREBASE';
export const CHECK_USER_AUTH_FIREBASE_SUCCESS = '@@auth/CHECK_USER_AUTH_FIREBASE_SUCCESS ';
export const CHECK_USER_AUTH_FIREBASE_FAILURE = '@@auth/CHECK_USER_AUTH_FIREBASE_FAILURE ';
export const USER_LOGOUT = '@@auth/USER_LOGOUT';
export const USER_GOOGLE_LOGIN = '@@auth/USER_GOOGLE_LOGIN';
export const USER_GOOGLE_LOGIN_SUCCESS = '@@auth/USER_GOOGLE_LOGIN_SUCCESS';
export const USER_GOOGLE_LOGIN_FAILURE = '@@auth/USER_GOOGLE_LOGIN_FAILURE';
export const CHECK_USER_FEYNLAB = '@@auth/CHECK_USER_FEYNLAB';
export const CHECK_USER_FEYNLAB_SUCCESS = '@@auth/CHECK_USER_FEYNLAB_SUCCESS ';
export const CHECK_USER_FEYNLAB_FAILURE = '@@auth/CHECK_USER_FEYNLAB_FAILURE ';
export const REGISTER_USER_FEYNLAB = '@@auth/REGISTER_USER_FEYNLAB';
export const REGISTER_USER_FEYNLAB_SUCCESS = '@@auth/REGISTER_USER_FEYNLAB_SUCCESS ';
export const REGISTER_USER_FEYNLAB_FAILURE = '@@auth/REGISTER_USER_FEYNLAB_FAILURE ';

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

interface CheckUserAuthFirebaseAction {
  type: typeof CHECK_USER_AUTH_FIREBASE;
}

interface CheckUserAuthFirebaseFailureAction {
  type: typeof CHECK_USER_AUTH_FIREBASE_FAILURE;
  payload: AuthState;
}
interface CheckUserAuthFirebaseSuccessAction {
  type: typeof CHECK_USER_AUTH_FIREBASE_SUCCESS;
  payload: AuthState;
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

interface UserGoogleLoginAction {
  type: typeof USER_GOOGLE_LOGIN;
  payload: AuthState;
}

export interface UserGoogleLoginSuccessAction {
  type: typeof USER_GOOGLE_LOGIN_SUCCESS;
  payload: AuthState;
}

export interface UserGoogleLoginFailureAction {
  type: typeof USER_GOOGLE_LOGIN_FAILURE;
  payload: AuthState;
}

interface CheckUserFeynlabAction {
  type: typeof CHECK_USER_FEYNLAB;
  payload: string;
}

interface CheckUserFeynlabFailureAction {
  type: typeof CHECK_USER_FEYNLAB_FAILURE;
  payload: AuthState;
}
interface CheckUserFeynlabSuccessAction {
  type: typeof CHECK_USER_FEYNLAB_SUCCESS;
  payload: AuthState;
}

interface RegisterUserFeynlabAction {
  type: typeof REGISTER_USER_FEYNLAB;
  payload: AuthState;
}

interface RegisterUserFeynlabFailureAction {
  type: typeof REGISTER_USER_FEYNLAB_FAILURE;
  payload: AuthState;
}
interface RegisterUserFeynlabSuccessAction {
  type: typeof REGISTER_USER_FEYNLAB_SUCCESS;
  payload: AuthState;
}

export type AuthActionTypes =
  | UserLoginAction
  | UserRegisterAction
  | UserLoginSuccessAction
  | UserLoginFailureAction
  | UserRegisterFailureAction
  | UserRegisterSuccessAction
  | CheckUserAuthFirebaseAction
  | CheckUserAuthFirebaseFailureAction
  | CheckUserAuthFirebaseSuccessAction
  | UserLogoutAction
  | UserGoogleLoginAction
  | UserGoogleLoginSuccessAction
  | UserGoogleLoginFailureAction
  | CheckUserFeynlabAction
  | CheckUserFeynlabSuccessAction
  | CheckUserFeynlabFailureAction
  | RegisterUserFeynlabAction
  | RegisterUserFeynlabSuccessAction
  | RegisterUserFeynlabFailureAction;
