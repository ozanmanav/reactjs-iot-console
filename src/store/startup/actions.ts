import { STARTUP, STARTUP_SUCCESS, STARTUP_FAILURE } from './types';

export function startup() {
    return {
        type: STARTUP,
    };
}

export function startupSuccess() {
    return {
        type: STARTUP_SUCCESS,
    };
}

export function startupFailure() {
    return {
        type: STARTUP_FAILURE,
    };
}
