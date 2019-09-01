import { StartupState, StartupActionTypes, STARTUP, STARTUP_SUCCESS, STARTUP_FAILURE } from './types';

const initialState: StartupState = {};

export function startupReducer(state = initialState, action: StartupActionTypes): StartupState {
    switch (action.type) {
        case STARTUP: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case STARTUP_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case STARTUP_FAILURE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}
