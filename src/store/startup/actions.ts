import { STARTUP, STARTUP_SUCCESS, STARTUP_FAILURE, StartupActionTypes } from './types';

export function startup(): StartupActionTypes {
    return {
        type: STARTUP
    };
}

export function startupSuccess(): StartupActionTypes {
    return {
        type: STARTUP_SUCCESS
    };
}

export function startupFailure(): StartupActionTypes {
    return {
        type: STARTUP_FAILURE
    };
}
