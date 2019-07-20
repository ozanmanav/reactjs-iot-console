import { charts } from '../types';
import { getRequest, postRequest } from '../../utils/api/utilFunctions';

export const getAllChartsByDevice = (projectId, deviceId) => dispatch => {
  dispatch({ type: charts.GET_ALL_CHARTS_BY_DEVICE_REQUEST });
  getRequest(`/project/${projectId}/device/${deviceId}/charts`)
    .then(r => {
      dispatch({
        type: charts.GET_ALL_CHARTS_BY_DEVICE_SUCCESS,
        payload: r.data.Charts
      });
    })
    .catch(e => {
      dispatch({
        type: charts.GET_ALL_CHARTS_BY_DEVICE_FAIL,
        payload: e
      });
    });
};

export const getDeviceDataForCharts = (projectId, deviceId) => dispatch => {
  dispatch({ type: charts.GET_DEVICE_DATA_REQUEST });
  getRequest(`/user/projects/${projectId}/devices/${deviceId}/data`,
    {
      page: 1,
      dataInPage: 6
    })
    .then(response => {
      dispatch({
        type: charts.GET_DEVICE_DATA_SUCCESS,
        payload: response.data.Data
      });
    })
    .catch(error => dispatch({
      type: charts.GET_DEVICE_DATA_FAIL,
      payload: error
    }));
};

export const getChartDetails = (projectId, deviceId, chartId) => dispatch => {
  dispatch({ type: charts.GET_CHART_BY_ID_REQUEST });
  getRequest(`/project/${projectId}/device/${deviceId}/chart/${chartId}`)
    .then(response => {
      dispatch({
        type: charts.GET_CHART_BY_ID_SUCCESS,
        payload: response.data.Charts
      });
    })
    .catch(error => dispatch({
      type: charts.GET_CHART_BY_ID_FAIL,
      payload: error
    }));
};

export const getDeviceDataForChartDetail = (projectId, deviceId, page = 1) => dispatch => {
  dispatch({ type: charts.GET_CHART_DATA_REQUEST });
  getRequest(`/user/projects/${projectId}/devices/${deviceId}/data`,
    {
      page,
      dataInPage: 30
    })
    .then(response => {
      console.log(response.data);
      dispatch({
        type: charts.GET_CHART_DATA_SUCCESS,
        payload: response.data.Data,
        values: {
          averages: response.data.averages,
          minValues: response.data.minValues,
          maxValues: response.data.maxValues,
        }
      });
    })
    .catch(error => dispatch({
      type: charts.GET_CHART_DATA_FAIL,
      payload: error
    }));
};

export const createChart = (data) => dispatch => {
  dispatch({ type: charts.CREATE_CHART_REQUEST });
  postRequest('/charts', {}, data)
    .then(response => {
      dispatch({
        type: charts.CREATE_CHART_SUCCESS,
        payload: response.data.Message
      });
    })
    .catch(error => dispatch({
      type: charts.CREATE_CHART_FAIL,
      payload: error
    }));
};
