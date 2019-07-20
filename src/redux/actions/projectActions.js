import { push } from 'connected-react-router';
import { deleteRequest, getRequest, postRequest, putRequest } from '../../utils/api/utilFunctions';
import { projects } from '../types';

export const getProjects = () => dispatch => {
  dispatch({ type: projects.GET_PROJECTS_REQUEST });
  getRequest('/user/projects')
    .then(response => {
      dispatch({
        type: projects.GET_PROJECTS_SUCCESS,
        payload: response.data.Projects
      });
    })
    .catch(error => dispatch({
      type: projects.GET_PROJECTS_FAIL,
      payload: error
    }));
};

export const getProjectById = (id) => dispatch => {
  dispatch({ type: projects.GET_PROJECT_BY_ID_REQUEST });
  getRequest(`/user/projects/${id}`)
    .then(response => {
      dispatch({
        type: projects.GET_PROJECT_BY_ID_SUCCESS,
        payload: response.data.ProjectDetail
      });
    })
    .catch(error => dispatch({
      type: projects.GET_PROJECT_BY_ID_FAIL,
      payload: error
    }));
};

export const getTriggersByProject = (id) => dispatch => {
  dispatch({ type: projects.GET_TRIGGERS_BY_PROJECT_REQUEST });
  getRequest(`/project/${id}/triggers`)
    .then(response => {
      dispatch({
        type: projects.GET_TRIGGERS_BY_PROJECT_SUCCESS,
        payload: {
          alert: response.data.alert,
          periodic: response.data.periodic
        }
      });
    })
    .catch(error => dispatch({
      type: projects.GET_TRIGGERS_BY_PROJECT_FAIL,
      payload: error
    }));
};

export const getActivitiesByProject = (id) => dispatch => {
  dispatch({ type: projects.GET_ACTIVITIES_BY_PROJECT_REQUEST });
  getRequest(`/user/projects/${id}/activities`)
    .then(response => {
      dispatch({
        type: projects.GET_ACTIVITIES_BY_PROJECT_SUCCESS,
        payload: response.data.Activities
      });
    })
    .catch(error => dispatch({
      type: projects.GET_ACTIVITIES_BY_PROJECT_FAIL,
      payload: error
    }));
};

export const editProject = (projectId, data) => dispatch => {
  dispatch({ type: projects.UPDATE_PROJECT_DETAILS_REQUEST });
  putRequest(`/user/projects/${projectId}`, {}, data)
    .then(response => {
      dispatch({
        type: projects.UPDATE_PROJECT_DETAILS_SUCCESS,
        payload: response.data.Message
      });
      dispatch(getProjectById(projectId));
    })
    .catch(error => dispatch({
      type: projects.UPDATE_PROJECT_DETAILS_FAIL,
      payload: error
    }));
};

export const deleteProject = (projectId) => dispatch => {
  dispatch({ type: projects.DELETE_PROJECT_REQUEST });
  deleteRequest(`/user/projects/${projectId}`, {})
    .then(response => {
      dispatch({
        type: projects.DELETE_PROJECT_SUCCESS,
        payload: response.data.Message
      });
      dispatch(push('/'));
      dispatch(getProjects());
    })
    .catch(error => dispatch({
      type: projects.DELETE_PROJECT_FAIL,
      payload: error
    }));
};

export const closeMessage = () => ({
  type: projects.CLOSE_MESSAGE
});

export const createProject = (data) => dispatch => {
  dispatch({ type: projects.CREATE_PROJECT_REQUEST });
  postRequest('/user/projects', {}, data)
    .then(response => {
      dispatch({
        type: projects.CREATE_PROJECT_SUCCESS,
        payload: response.data.Message
      });
      dispatch(getProjects());
      dispatch(push(`/projects/${response.data.id}/devices`));
    })
    .catch(error => dispatch({
      type: projects.CREATE_PROJECT_FAIL,
      payload: error
    }));
};

export const getBrands = () => dispatch => {
  dispatch({ type: projects.GET_BRANDS_REQUEST });
  getRequest('/brands', {})
    .then(response => {
      dispatch({
        type: projects.GET_BRANDS_SUCCESS,
        payload: response.data.Models
      });
    })
    .catch(error => dispatch({
      type: projects.GET_BRANDS_FAIL,
      payload: error
    }));
};

export const getModels = (brand) => dispatch => {
  dispatch({ type: projects.GET_MODELS_REQUEST });
  getRequest('/deviceModels', { brand })
    .then(response => {
      dispatch({
        type: projects.GET_MODELS_SUCCESS,
        payload: response.data.Models
      });
    })
    .catch(error => dispatch({
      type: projects.GET_MODELS_FAIL,
      payload: error
    }));
};

export const addDevice = (projectId, data) => dispatch => {
  dispatch({ type: projects.ADD_DEVICE_REQUEST });
  postRequest(`/user/projects/${projectId}/devices`, {}, data)
    .then(response => {
      dispatch({
        type: projects.ADD_DEVICE_SUCCESS,
        payload: response.data.message
      });
    })
    .catch(error => dispatch({
      type: projects.ADD_DEVICE_FAIL,
      payload: error
    }));
};
