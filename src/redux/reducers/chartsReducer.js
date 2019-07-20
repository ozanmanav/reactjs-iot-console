import update from 'immutability-helper';
import { charts } from '../types';

const INITIAL_STATE = {
  getAllLoading: false,
  getAllError: null,
  list: [],
  getChartsDataLoading: false,
  getChartsDataError: null,
  chartsData: [],
  getChartLoading: false,
  getChartError: null,
  chartDetail: {},
  detailData: [],
  detailValues: {
    averages: [],
    minValues: [],
    maxValues: []
  },
  getDetailDataLoading: false,
  getDetailDataError: null,
  create: {
    loading: false,
    result: '',
    error: null,
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case charts.GET_ALL_CHARTS_BY_DEVICE_REQUEST:
      return update(state, {
        getAllLoading: { $set: true },
        getAllError: { $set: null },
      });
    case charts.GET_ALL_CHARTS_BY_DEVICE_SUCCESS:
      return update(state, {
        getAllLoading: { $set: false },
        list: { $set: action.payload },
      });
    case charts.GET_ALL_CHARTS_BY_DEVICE_FAIL:
      return update(state, {
        getAllLoading: { $set: true },
        getAllError: { $set: action.payload },
      });
    case charts.GET_DEVICE_DATA_REQUEST:
      return update(state, {
        getChartsDataLoading: { $set: true },
        getChartsDataError: { $set: null },
      });
    case charts.GET_DEVICE_DATA_SUCCESS:
      return update(state, {
        getChartsDataLoading: { $set: false },
        chartsData: { $set: action.payload },
      });
    case charts.GET_DEVICE_DATA_FAIL:
      return update(state, {
        getChartsDataLoading: { $set: true },
        getChartsDataError: { $set: action.payload },
      });
    case charts.GET_CHART_BY_ID_REQUEST:
      return update(state, {
        getChartLoading: { $set: true },
        getChartError: { $set: null },
      });
    case charts.GET_CHART_BY_ID_SUCCESS:
      return update(state, {
        getChartLoading: { $set: false },
        chartDetail: { $set: action.payload },
      });
    case charts.GET_CHART_BY_ID_FAIL:
      return update(state, {
        getChartLoading: { $set: true },
        getChartError: { $set: action.payload },
      });
    case charts.GET_CHART_DATA_REQUEST:
      return update(state, {
        getDetailDataLoading: { $set: true },
        getDetailDataError: { $set: null },
      });
    case charts.GET_CHART_DATA_SUCCESS:
      return update(state, {
        getDetailDataLoading: { $set: false },
        detailData: { $set: action.payload },
        detailValues: { $set: action.values }
      });
    case charts.GET_CHART_DATA_FAIL:
      return update(state, {
        getDetailDataLoading: { $set: true },
        getDetailDataError: { $set: action.payload },
      });
    case charts.CREATE_CHART_REQUEST:
      return update(state, {
        create: {
          loading: { $set: true },
          error: { $set: null },
          result: { $set: '' },
        }
      });
    case charts.CREATE_CHART_SUCCESS:
      return update(state, {
        create: {
          loading: { $set: false },
          result: { $set: action.payload },
        }
      });
    case charts.CREATE_CHART_FAIL:
      return update(state, {
        addDevice: {
          loading: { $set: false },
          error: { $set: action.payload },
        }
      });
    default:
      return state;
  }
};
