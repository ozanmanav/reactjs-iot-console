import update from 'immutability-helper';
import { projects } from '../types';

const INITIAL_STATE = {
  list: [],
  getLoading: false,
  getError: null,
  getByIdLoading: false,
  getByIdError: null,
  projectDetails: {},
  getTriggersByProjectLoading: false,
  getTriggersByProjectError: null,
  projectTriggers: {
    alert: [],
    periodic: []
  },
  getActivitiesLoading: false,
  getActivitiesError: null,
  activities: [],
  update: {
    loading: false,
    error: null,
    result: ''
  },
  delete: {
    loading: false,
    error: null,
    result: ''
  },
  create: {
    loading: false,
    error: null,
    result: ''
  },
  brands: {
    loading: false,
    error: null,
    result: []
  },
  models: {
    loading: false,
    error: null,
    result: []
  },
  addDevice: {
    loading: false,
    error: null,
    result: ''
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case projects.GET_PROJECTS_REQUEST:
      return update(state, {
        getError: { $set: null },
        getLoading: { $set: true },
      });
    case projects.GET_PROJECTS_SUCCESS:
      return update(state, {
        getError: { $set: null },
        getLoading: { $set: false },
        list: { $set: action.payload },
      });
    case projects.GET_PROJECTS_FAIL:
      return update(state, {
        getError: { $set: action.payload },
        getLoading: { $set: false },
      });
    case projects.GET_PROJECT_BY_ID_REQUEST:
      return update(state, {
        getByIdError: { $set: null },
        getByIdLoading: { $set: true },
      });
    case projects.GET_PROJECT_BY_ID_SUCCESS:
      return update(state, {
        getByIdError: { $set: null },
        getByIdLoading: { $set: false },
        projectDetails: { $set: action.payload },
      });
    case projects.GET_PROJECT_BY_ID_FAIL:
      return update(state, {
        getByIdError: { $set: action.payload },
        getByIdLoading: { $set: false },
      });
    case projects.GET_TRIGGERS_BY_PROJECT_REQUEST:
      return update(state, {
        getTriggersByProjectError: { $set: null },
        getTriggersByProjectLoading: { $set: true },
      });
    case projects.GET_TRIGGERS_BY_PROJECT_SUCCESS:
      return update(state, {
        getTriggersByProjectLoading: { $set: false },
        projectTriggers: { $set: action.payload },
      });
    case projects.GET_TRIGGERS_BY_PROJECT_FAIL:
      return update(state, {
        getTriggersByProjectError: { $set: action.payload },
        getTriggersByProjectLoading: { $set: false },
      });
    case projects.GET_ACTIVITIES_BY_PROJECT_REQUEST:
      return update(state, {
        getActivitiesError: { $set: null },
        getActivitiesLoading: { $set: true },
      });
    case projects.GET_ACTIVITIES_BY_PROJECT_SUCCESS:
      return update(state, {
        getActivitiesLoading: { $set: false },
        activities: { $set: action.payload },
      });
    case projects.GET_ACTIVITIES_BY_PROJECT_FAIL:
      return update(state, {
        getActivitiesError: { $set: action.payload },
        getActivitiesLoading: { $set: false },
      });
    case projects.UPDATE_PROJECT_DETAILS_REQUEST:
      return update(state, {
        update: {
          loading: { $set: true },
          error: { $set: null },
          result: { $set: '' },
        }
      });
    case projects.UPDATE_PROJECT_DETAILS_SUCCESS:
      return update(state, {
        update: {
          loading: { $set: false },
          result: { $set: action.payload },
        }
      });
    case projects.UPDATE_PROJECT_DETAILS_FAIL:
      return update(state, {
        update: {
          loading: { $set: false },
          error: { $set: action.payload },
        }
      });
    case projects.DELETE_PROJECT_REQUEST:
      return update(state, {
        delete: {
          loading: { $set: true },
          error: { $set: null },
          result: { $set: '' },
        }
      });
    case projects.DELETE_PROJECT_SUCCESS:
      return update(state, {
        delete: {
          loading: { $set: false },
          result: { $set: action.payload },
        }
      });
    case projects.DELETE_PROJECT_FAIL:
      return update(state, {
        delete: {
          loading: { $set: false },
          error: { $set: action.payload },
        }
      });
    case projects.CLOSE_MESSAGE:
      return update(state, {
        delete: {
          error: { $set: null },
          result: { $set: '' },
        },
        update: {
          error: { $set: null },
          result: { $set: '' },
        },
        create: {
          error: { $set: null },
          result: { $set: '' },
        },
      });
    case projects.CREATE_PROJECT_REQUEST:
      return update(state, {
        create: {
          loading: { $set: true },
          error: { $set: null },
          result: { $set: '' },
        }
      });
    case projects.CREATE_PROJECT_SUCCESS:
      return update(state, {
        create: {
          loading: { $set: false },
          result: { $set: action.payload },
        }
      });
    case projects.CREATE_PROJECT_FAIL:
      return update(state, {
        create: {
          loading: { $set: false },
          error: { $set: action.payload },
        }
      });
    case projects.GET_BRANDS_REQUEST:
      return update(state, {
        brands: {
          loading: { $set: true },
          error: { $set: null },
          result: { $set: [] },
        }
      });
    case projects.GET_BRANDS_SUCCESS:
      return update(state, {
        brands: {
          loading: { $set: false },
          result: { $set: action.payload },
        }
      });
    case projects.GET_BRANDS_FAIL:
      return update(state, {
        brands: {
          loading: { $set: false },
          error: { $set: action.payload },
        }
      });
    case projects.GET_MODELS_REQUEST:
      return update(state, {
        models: {
          loading: { $set: true },
          error: { $set: null },
          result: { $set: [] },
        }
      });
    case projects.GET_MODELS_SUCCESS:
      return update(state, {
        models: {
          loading: { $set: false },
          result: { $set: action.payload },
        }
      });
    case projects.GET_MODELS_FAIL:
      return update(state, {
        models: {
          loading: { $set: false },
          error: { $set: action.payload },
        }
      });
    case projects.ADD_DEVICE_REQUEST:
      return update(state, {
        addDevice: {
          loading: { $set: true },
          error: { $set: null },
          result: { $set: '' },
        }
      });
    case projects.ADD_DEVICE_SUCCESS:
      return update(state, {
        addDevice: {
          loading: { $set: false },
          result: { $set: action.payload },
        }
      });
    case projects.ADD_DEVICE_FAIL:
      return update(state, {
        addDevice: {
          loading: { $set: false },
          error: { $set: action.payload },
        }
      });
    default:
      return state;
  }
}
