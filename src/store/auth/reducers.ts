import { AuthState, AuthActionTypes, USER_LOGIN, USER_REGISTER } from './types';

const initialState: AuthState = {
    loggedIn: false,
    session: '',
};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case USER_LOGIN: {
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
        default:
            return state;
    }
}
