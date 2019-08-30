// Describing the shape of the system's slice of state
export interface AuthState {
    loggedIn?: boolean;
    session?: string;
    email?: string;
    password?: string;
}

// Describing the different ACTION NAMES available
export const USER_LOGIN = 'USER_LOGIN';
export const USER_REGISTER = 'USER_REGISTER';

interface UserLoginAction {
    type: typeof USER_LOGIN;
    payload: AuthState;
}

interface UserRegisterAction {
    type: typeof USER_REGISTER;
    payload: AuthState;
}

export type AuthActionTypes = UserLoginAction | UserRegisterAction;
