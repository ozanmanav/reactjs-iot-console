import { StartupState, StartupActionTypes, STARTUP, STARTUP_SUCCESS, STARTUP_FAILURE } from './types';

export const StartupInitialState: StartupState = {};

export function startupReducer(state = StartupInitialState, action: StartupActionTypes): StartupState {
  switch (action.type) {
    case STARTUP: {
      return {
        ...state
      };
    }
    case STARTUP_SUCCESS: {
      return {
        ...state
      };
    }
    case STARTUP_FAILURE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
