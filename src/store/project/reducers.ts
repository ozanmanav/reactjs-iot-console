import * as types from './types';
import { ProjectState, ITriggerResponse, ProjectActionTypes } from './types';

export const ProjectInitialState: ProjectState = {
  loading: {
    projects: false,
    currentProject: false,
    devices: false,
    currentDevice: false,
    triggers: false,
    activities: false,
    deviceActivities: false,
    deviceTokens: false,
    saveProjectSettings: false,
    brands: false,
    models: false,
    entities: false
  },
  projects: [],
  devices: [],
  activities: [],
  deviceActivities: [],
  deviceEntities: [],
  triggers: {} as ITriggerResponse,
  currentProject: undefined,
  currentDevice: undefined,
  error: undefined
};

export function projectReducer(state = ProjectInitialState, action: ProjectActionTypes): ProjectState {
  switch (action.type) {
    case types.GET_PROJECTS: {
      return {
        ...state
      };
    }
    case types.GET_PROJECTS_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case types.GET_PROJECTS_FAILURE: {
      return {
        ...state,
        ...action.payload,
        projects: []
      };
    }
    case types.GET_PROJECT_BY_ID: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentProject: true
        },
        currentProject: undefined
      };
    }
    case types.GET_PROJECT_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentProject: false
        },
        currentProject: action.payload
      };
    }
    case types.GET_PROJECT_BY_ID_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentProject: false
        },
        currentProject: undefined
      };
    }
    case types.GET_DEVICES: {
      return {
        ...state,
        loading: {
          ...state.loading,
          devices: true
        },
        devices: []
      };
    }
    case types.GET_DEVICES_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          devices: false
        },
        ...action.payload
      };
    }
    case types.GET_DEVICES_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          devices: false
        },
        devices: []
      };
    }
    case types.GET_DEVICE_BY_ID: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentDevice: true
        },
        currentDevice: undefined
      };
    }
    case types.GET_DEVICE_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentDevice: false
        },
        currentDevice: action.payload
      };
    }
    case types.GET_DEVICE_BY_ID_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          currentDevice: false
        },
        currentDevice: undefined
      };
    }
    case types.GET_TRIGGERS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          triggers: true
        },
        triggers: {} as ITriggerResponse
      };
    }
    case types.GET_TRIGGERS_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          triggers: false
        },
        ...action.payload
      };
    }
    case types.GET_TRIGGERS_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          triggers: false
        },
        triggers: {} as ITriggerResponse
      };
    }
    case types.GET_ACTIVITIES: {
      return {
        ...state,
        loading: {
          ...state.loading,
          activities: true
        },
        activities: []
      };
    }
    case types.GET_ACTIVITIES_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          activities: false
        },
        ...action.payload
      };
    }
    case types.GET_ACTIVITIES_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          activities: false
        },
        activities: []
      };
    }
    case types.GET_DEVICE_ACTIVITIES: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deviceActivities: true
        },
        deviceActivities: []
      };
    }
    case types.GET_DEVICE_ACTIVITIES_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deviceActivities: false
        },
        ...action.payload
      };
    }
    case types.GET_DEVICE_ACTIVITIES_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deviceActivities: false
        },
        deviceActivities: []
      };
    }
    case types.GET_DEVICE_SETTINGS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deviceActivities: true
        },
        deviceActivities: []
      };
    }
    case types.GET_DEVICE_SETTINGS_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deviceActivities: false
        },
        ...action.payload
      };
    }
    case types.GET_DEVICE_SETTINGS_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deviceActivities: false
        },
        deviceActivities: []
      };
    }
    case types.GET_DEVICE_TOKENS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deviceTokens: true
        }
      };
    }
    case types.GET_DEVICE_TOKENS_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deviceTokens: false
        },
        currentDevice: action.payload.currentDevice
      };
    }
    case types.GET_DEVICE_TOKENS_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deviceTokens: false
        }
      };
    }
    case types.SAVE_PROJECT_SETTINGS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          saveProjectSettings: true
        }
      };
    }
    case types.SAVE_PROJECT_SETTINGS_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          saveProjectSettings: false
        },
        ...action.payload
      };
    }
    case types.SAVE_PROJECT_SETTINGS_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          saveProjectSettings: false
        }
      };
    }
    case types.GET_DEVICE_BRANDS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          brands: true
        }
      };
    }
    case types.GET_DEVICE_BRANDS_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          brands: false
        },
        ...action.payload
      };
    }
    case types.GET_DEVICE_BRANDS_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          brands: false
        }
      };
    }
    case types.ADD_DEVICE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          addDevice: true
        }
      };
    }
    case types.ADD_DEVICE_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          addDevice: false
        },
        ...action.payload
      };
    }
    case types.ADD_DEVICE_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          addDevice: false
        }
      };
    }
    case types.GET_DEVICE_MODELS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          models: true
        }
      };
    }
    case types.GET_DEVICE_MODELS_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          models: false
        },
        ...action.payload
      };
    }
    case types.GET_DEVICE_MODELS_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          models: false
        }
      };
    }
    case types.CREATE_PROJECT: {
      return {
        ...state,
        loading: {
          ...state.loading,
          createProject: true
        }
      };
    }
    case types.CREATE_PROJECT_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          createProject: false
        },
        ...action.payload
      };
    }
    case types.CREATE_PROJECT_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          createProject: false
        }
      };
    }
    case types.DELETE_PROJECT: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deleteProject: true
        }
      };
    }
    case types.DELETE_PROJECT_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deleteProject: false
        },
        ...action.payload
      };
    }
    case types.DELETE_PROJECT_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          deleteProject: false
        }
      };
    }
    case types.GET_DEVICE_ENTITIES: {
      return {
        ...state,
        loading: {
          ...state.loading,
          entities: true
        }
      };
    }
    case types.GET_DEVICE_ENTITIES_SUCCESS: {
      return {
        ...state,
        loading: {
          ...state.loading,
          entities: false
        },
        ...action.payload
      };
    }
    case types.GET_DEVICE_ENTITIES_FAILURE: {
      return {
        ...state,
        loading: {
          ...state.loading,
          entities: false
        }
      };
    }
    default:
      return state;
  }
}
