export interface StartupState {}

export const STARTUP = 'STARTUP';
export const STARTUP_SUCCESS = 'STARTUP_SUCCESS';
export const STARTUP_FAILURE = 'STARTUP_FAILURE';

interface StartupAction {
    type: typeof STARTUP;
    payload: StartupState;
}

interface StartupSuccessAction {
    type: typeof STARTUP_SUCCESS;
    payload: StartupState;
}

interface StartupFailureAction {
    type: typeof STARTUP_FAILURE;
    payload: StartupState;
}

export type StartupActionTypes = StartupAction | StartupSuccessAction | StartupFailureAction;
