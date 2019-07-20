import { push } from 'connected-react-router';
import { devices } from '../types';
import { deleteRequest, getRequest, putRequest } from '../../utils/api/utilFunctions';

export const getProjectDevices = (projectId) => dispatch => {
  dispatch({ type: devices.GET_PROJECT_DEVICES_REQUEST });
  getRequest(`/user/projects/${projectId}/devices`)
    .then(r => dispatch({
      type: devices.GET_PROJECT_DEVICES_SUCCESS,
      payload: r.data.Devices
    }))
    .catch(e => dispatch({
      type: devices.GET_PROJECT_DEVICES_FAIL,
      payload: e
    }));
};

export const getDeviceById = (projectId, deviceId) => dispatch => {
  dispatch({ type: devices.GET_DEVICE_BY_ID_REQUEST });
  getRequest(`/user/projects/${projectId}/devices/${deviceId}`)
    .then(response => {
      dispatch({
        type: devices.GET_DEVICE_BY_ID_SUCCESS,
        payload: response.data.Device
      });
    })
    .catch(error => dispatch({
      type: devices.GET_DEVICE_BY_ID_FAIL,
      payload: error
    }));
};

export const getActivitiesByDevice = (projectId, deviceId) => dispatch => {
  dispatch({ type: devices.GET_ACTIVITIES_BY_DEVICE_REQUEST });
  getRequest(`/user/projects/${projectId}/device/${deviceId}/activities`)
    .then(response => {
      dispatch({
        type: devices.GET_ACTIVITIES_BY_DEVICE_SUCCESS,
        payload: response.data.Activities
      });
    })
    .catch(error => dispatch({
      type: devices.GET_ACTIVITIES_BY_DEVICE_FAIL,
      payload: error
    }));
};

export const getTriggersByDevice = (projectId, deviceId) => dispatch => {
  dispatch({ type: devices.GET_TRIGGERS_BY_DEVICE_REQUEST });
  getRequest(`/project/${projectId}/device/${deviceId}/triggers`)
    .then(response => {
      dispatch({
        type: devices.GET_TRIGGERS_BY_DEVICE_SUCCESS,
        payload: {
          alert: response.data.Alert,
          periodic: response.data.Periodic
        }
      });
    })
    .catch(error => dispatch({
      type: devices.GET_TRIGGERS_BY_DEVICE_FAIL,
      payload: error
    }));
};

export const getApiToken = (projectId, deviceId) => dispatch => {
  dispatch({ type: devices.GET_API_TOKEN_REQUEST });
  getRequest(`/user/projects/${projectId}/devices/${deviceId}/retrievetokens`)
    .then(response => {
      dispatch({
        type: devices.GET_API_TOKEN_SUCCESS,
        payload: response.data.ApiToken
      });
    })
    .catch(error => dispatch({
      type: devices.GET_API_TOKEN_FAIL,
      payload: error
    }));
};

export const editDevice = (projectId, deviceId, data) => dispatch => {
  dispatch({ type: devices.UPDATE_DEVICE_DETAILS_REQUEST });
  putRequest(`/user/projects/${projectId}/devices/${deviceId}`, {}, data)
    .then(response => {
      dispatch({
        type: devices.UPDATE_DEVICE_DETAILS_SUCCESS,
        payload: response.data.Message
      });
      dispatch(getDeviceById(projectId, deviceId));
    })
    .catch(error => dispatch({
      type: devices.UPDATE_DEVICE_DETAILS_FAIL,
      payload: error
    }));
};

export const deleteDevice = (projectId, deviceId) => dispatch => {
  dispatch({ type: devices.DELETE_DEVICE_REQUEST });
  deleteRequest(`/user/projects/${projectId}/devices/${deviceId}`, {})
    .then(response => {
      dispatch({
        type: devices.DELETE_DEVICE_SUCCESS,
        payload: response.data.Message
      });
      dispatch(getProjectDevices(projectId));
    })
    .catch(error => dispatch({
      type: devices.DELETE_DEVICE_FAIL,
      payload: error
    }));
  dispatch(push(`/projects/${projectId}/devices`));
};

export const closeMessage = () => ({
  type: devices.CLOSE_MESSAGE
});
