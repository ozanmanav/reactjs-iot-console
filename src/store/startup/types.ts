// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StartupState {}

export const STARTUP = '@@startup/STARTUP';
export const STARTUP_SUCCESS = '@@startup/STARTUP_SUCCESS';
export const STARTUP_FAILURE = '@@startup/STARTUP_FAILURE';

interface StartupAction {
  type: typeof STARTUP;
}

interface StartupSuccessAction {
  type: typeof STARTUP_SUCCESS;
}

interface StartupFailureAction {
  type: typeof STARTUP_FAILURE;
}

export type StartupActionTypes = StartupAction | StartupSuccessAction | StartupFailureAction;
