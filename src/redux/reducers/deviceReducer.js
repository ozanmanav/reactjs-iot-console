import update from 'immutability-helper';
import { devices } from '../types';

const INITIAL_STATE = {
  list: [],
  getLoading: false,
  getError: null,
  getDetailsLoading: false,
  getDetailError: null,
  deviceDetails: {
    id: '',
    deviceModel: '',
    deviceName: '',
    deviceLocation: '',
    deviceImage: '',
    deviceDescription: '',
    deviceStatus: '',
    deviceLastSeen: '',
    deviceEntities: []
  },
  getApiTokenLoading: false,
  getApiTokenError: null,
  apiToken: '',
  getActivitiesLoading: false,
  getActivitiesError: null,
  activities: [],
  triggers: {
    alert: [],
    periodic: []
  },
  triggerLoading: false,
  triggerError: null,
  updateDeviceError: null,
  updateDeviceLoading: false,
  updateDeviceResult: '',
  update: {
    loading: false,
    error: null,
    result: '',
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case devices.GET_PROJECT_DEVICES_REQUEST:
      return update(state, {
        getError: { $set: null },
        getLoading: { $set: true },
      });
    case devices.GET_PROJECT_DEVICES_SUCCESS:
      return update(state, {
        getError: { $set: null },
        getLoading: { $set: false },
        list: { $set: action.payload },
      });
    case devices.GET_PROJECT_DEVICES_FAIL:
      return update(state, {
        getError: { $set: action.payload },
        getLoading: { $set: false },
      });
    case devices.GET_DEVICE_BY_ID_REQUEST:
      return update(state, {
        getDetailError: { $set: null },
        getDetailsLoading: { $set: true },
      });
    case devices.GET_DEVICE_BY_ID_SUCCESS:
      return update(state, {
        getDetailError: { $set: null },
        getDetailsLoading: { $set: false },
        deviceDetails: { $set: action.payload },
      });
    case devices.GET_DEVICE_BY_ID_FAIL:
      return update(state, {
        getDetailError: { $set: action.payload },
        getDetailsLoading: { $set: false },
      });
    case devices.GET_ACTIVITIES_BY_DEVICE_REQUEST:
      return update(state, {
        getActivitiesError: { $set: null },
        getActivitiesLoading: { $set: true },
      });
    case devices.GET_ACTIVITIES_BY_DEVICE_SUCCESS:
      return update(state, {
        getActivitiesLoading: { $set: false },
        activities: { $set: action.payload },
      });
    case devices.GET_ACTIVITIES_BY_DEVICE_FAIL:
      return update(state, {
        getActivitiesError: { $set: action.payload },
        getActivitiesLoading: { $set: false },
      });
    case devices.GET_TRIGGERS_BY_DEVICE_REQUEST:
      return update(state, {
        triggerError: { $set: null },
        triggerLoading: { $set: true },
      });
    case devices.GET_TRIGGERS_BY_DEVICE_SUCCESS:
      return update(state, {
        triggerLoading: { $set: false },
        triggers: { $set: action.payload },
      });
    case devices.GET_TRIGGERS_BY_DEVICE_FAIL:
      return update(state, {
        triggerError: { $set: action.payload },
        triggerLoading: { $set: false },
      });
    case devices.GET_API_TOKEN_REQUEST:
      return update(state, {
        getApiTokenError: { $set: null },
        getApiTokenLoading: { $set: true },
      });
    case devices.GET_API_TOKEN_SUCCESS:
      return update(state, {
        getApiTokenLoading: { $set: false },
        apiToken: { $set: action.payload },
      });
    case devices.GET_API_TOKEN_FAIL:
      return update(state, {
        updateDeviceError: { $set: action.payload },
        updateDeviceLoading: { $set: false },
      });
    case devices.UPDATE_DEVICE_DETAILS_REQUEST:
      return update(state, {
        update: {
          error: { $set: null },
          loading: { $set: true },
          result: { $set: '' },
        }
      });
    case devices.UPDATE_DEVICE_DETAILS_SUCCESS:
      return update(state, {
        update: {
          loading: { $set: false },
          result: { $set: action.payload },
        }
      });
    case devices.UPDATE_DEVICE_DETAILS_FAIL:
      return update(state, {
        update: {
          error: { $set: action.payload },
          loading: { $set: false },
        }
      });
    case devices.CLOSE_MESSAGE:
      return update(state, {
        update: {
          error: { $set: null },
          loading: { $set: false },
          result: { $set: '' }
        }
      });
    case devices.DELETE_DEVICE_REQUEST:
      return update(state, {
        deleteDeviceError: { $set: null },
        deleteDeviceLoading: { $set: true },
      });
    case devices.DELETE_DEVICE_SUCCESS:
      return update(state, {
        deleteDeviceLoading: { $set: false },
        deleteDeviceResult: { $set: action.payload },
      });
    case devices.DELETE_DEVICE_FAIL:
      return update(state, {
        deleteDeviceError: { $set: action.payload },
        deleteDeviceLoading: { $set: false },
      });
    default:
      return state;
  }
}
