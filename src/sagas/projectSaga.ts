import { call, put, select } from 'redux-saga/effects';
import { getRequest, putRequest, postRequest, deleteRequest } from '../utils/dataHelper';
import * as actions from '../store/project/actions';
import {
  ProjectState,
  IDevice,
  AddDeviceAction,
  CreateProjectAction,
  IProject,
  AddDeviceChartAction
} from '../store/project/types';
import { showSuccessToast, showErrorToast } from '../components/ui';
import { PROJECTS_FIRST_LOAD_KEY } from '../config';
import { push } from 'connected-react-router';

export function* requestGetProjects() {
  try {
    const projectsResponse = yield call(getRequest, '/user/projects');

    const successProjectsResponse: ProjectState = {
      projects: projectsResponse.data.Projects
    };

    if (JSON.parse(localStorage.getItem(PROJECTS_FIRST_LOAD_KEY) || 'true')) {
      localStorage.setItem(PROJECTS_FIRST_LOAD_KEY, JSON.stringify(false));
      const firstProject =
        successProjectsResponse.projects &&
        successProjectsResponse.projects.length > 1 &&
        successProjectsResponse.projects[0];
      if (firstProject) {
        yield put(push(`/app/projects/${firstProject.id}`));
      }
    }

    yield put(actions.getProjectsSuccess(successProjectsResponse));
  } catch (error) {
    yield put(actions.getProjectsFailure({ error }));
  }
}

export function* requestGetProjectById(data: any) {
  try {
    const projectResponse = yield call(getRequest, `/user/projects/${data.payload}`);

    yield put(
      actions.getProjectByIdSuccess({
        currentProject: projectResponse.data.ProjectDetail
      })
    );
  } catch (error) {
    yield put(actions.getProjectByIdFailure({ error }));
  }
}

export function* requestGetDevices() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);

    if (!currentProject || !currentProject.id) {
      return yield put(
        actions.getDevicesFailure({
          error: 'Not current project selected'
        })
      );
    }

    const devicesResponse = yield call(getRequest, `/user/projects/${currentProject.id}/devices`);

    yield put(
      actions.getDevicesSuccess({
        devices: devicesResponse.data.Devices
      })
    );
  } catch (error) {
    yield put(actions.getDevicesFailure({ error }));
  }
}

export function* requestGetDeviceById(data: any) {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);

    if (!currentProject || !data.payload) {
      return yield put(
        actions.getDeviceByIdFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const deviceResponse = yield call(getRequest, `/user/projects/${currentProject.id}/devices/${data.payload}`);

    yield put(
      actions.getDeviceByIdSuccess({
        currentDevice: deviceResponse.data.Device
      })
    );

    yield put(actions.getDeviceCharts());
    yield put(actions.getDeviceChartsData());
    yield put(actions.getDeviceEntities());
    yield put(actions.getDeviceActivities());
    yield put(actions.getDeviceTokens());
  } catch (error) {
    yield put(actions.getDeviceByIdFailure({ error }));
  }
}

export function* requestGetTriggers() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);

    if (!currentProject || !currentProject.id) {
      return yield put(
        actions.getTriggersFailure({
          error: 'Not current project selected'
        })
      );
    }

    const triggersResponse = yield call(getRequest, `/project/${currentProject.id}/triggers`);

    yield put(
      actions.getTriggersSuccess({
        triggers: {
          alarm: triggersResponse.data.alarm,
          periodic: triggersResponse.data.periodic
        }
      })
    );
  } catch (error) {
    yield put(actions.getTriggersFailure({ error }));
  }
}

export function* requestGetActivities() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);

    if (!currentProject || !currentProject.id) {
      return yield put(
        actions.getActivitiesFailure({
          error: 'Not current project selected'
        })
      );
    }

    const activitiesResponse = yield call(getRequest, `user/projects/${currentProject.id}/activities`);

    yield put(
      actions.getActivitiesSuccess({
        activities: activitiesResponse.data.Activities
      })
    );
  } catch (error) {
    yield put(actions.getActivitiesFailure({ error }));
  }
}

export function* requestGetDeviceActivities() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);
    const currentDevice: IDevice = yield select(state => state.project.currentDevice);

    if (!currentProject || !currentDevice) {
      return yield put(
        actions.getDeviceActivitiesFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const deviceActivitiesResponse = yield call(
      getRequest,
      `user/projects/${currentProject.id}/device/${currentDevice.id}/activities`
    );

    const successDeviceActivitiesResponse: ProjectState = {
      deviceActivities: deviceActivitiesResponse.data.Activities
    };

    yield put(actions.getDeviceActivitiesSuccess(successDeviceActivitiesResponse));
  } catch (error) {
    yield put(actions.getDeviceActivitiesFailure({ error }));
  }
}

export function* requestGetDeviceTokens() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);
    const currentDevice: IDevice = yield select(state => state.project.currentDevice);

    if (!currentProject || !currentDevice || !currentDevice.id) {
      return yield put(
        actions.getDeviceTokensFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const deviceTokensResponse = yield call(
      getRequest,
      `user/projects/${currentProject.id}/devices/${currentDevice.id}/retrievetokens`
    );

    currentDevice.deviceTokens = {
      apiToken: deviceTokensResponse.data.ApiToken,
      clientSecret: deviceTokensResponse.data.ClientSecret
    };

    yield put(actions.getDeviceTokensSuccess({ currentDevice }));
  } catch (error) {
    yield put(actions.getDeviceTokensFailure({ error }));
  }
}

export function* requestSaveProjectSettings(data: any) {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);

    if (!currentProject) {
      return yield put(
        actions.saveProjectSettingsFailure({
          error: 'Not current project selected'
        })
      );
    }

    const saveSettingsResponse = yield call(putRequest, `user/projects/${currentProject.id}`, {}, data.payload);

    if (saveSettingsResponse.data.Message === 'Update successful') {
      const successSaveProjectSettingsResponse: ProjectState = {
        currentProject: {
          ...currentProject,
          projectDescription: data.payload.description,
          projectName: data.payload.name
        }
      };
      showSuccessToast('Project settings successfully saved');
      yield put(actions.saveProjectSettingsSuccess(successSaveProjectSettingsResponse));
      yield put(actions.getProjects());
    }
  } catch (error) {
    yield put(actions.saveProjectSettingsFailure({ error }));
  }
}

export function* requestGetDeviceBrands() {
  try {
    const deviceBrandsResponse = yield call(getRequest, `brands`);

    yield put(
      actions.getDeviceBrandsSuccess({
        deviceBrands: deviceBrandsResponse.data.Models
      })
    );
  } catch (error) {
    yield put(actions.getDeviceBrandsFailure({ error }));
  }
}

export function* requestAddDevice(data: AddDeviceAction) {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);

    if (!currentProject || !currentProject.id) {
      return yield put(
        actions.addDeviceFailure({
          error: 'Not current project selected'
        })
      );
    }

    delete data.payload.loading;
    const addDeviceResponse = yield call(postRequest, `user/projects/${currentProject.id}/devices`, {}, data.payload);

    if (addDeviceResponse.data.Message === 'Added Device successful') {
      const successAddDeviceResponse: ProjectState = {};
      showSuccessToast('Device successfully added');
      yield put(actions.getDevices());
      yield put(push(`/app/projects/${currentProject.id}`));
      yield put(actions.addDeviceSuccess(successAddDeviceResponse));
    } else {
      yield put(
        actions.saveProjectSettingsFailure({
          error: addDeviceResponse.data
        })
      );
    }
  } catch (error) {
    yield put(actions.addDeviceFailure({ error }));
  }
}

export function* requestGetDeviceModels(data: any) {
  try {
    const deviceModelsResponse = yield call(getRequest, `deviceModels`, {
      brand: data.payload
    });

    yield put(
      actions.getDeviceModelsSuccess({
        deviceModels: deviceModelsResponse.data.Models
      })
    );
  } catch (error) {
    yield put(actions.getDeviceModelsFailure({ error }));
  }
}

export function* requestCreateProject(data: CreateProjectAction) {
  try {
    delete data.payload.loading;
    const createProjectResponse = yield call(postRequest, `user/projects`, {}, data.payload);

    if (!createProjectResponse.data.Message || !createProjectResponse.data.Message.includes('Project created with')) {
      return yield put(
        actions.createProjectFailure({
          error: createProjectResponse.data
        })
      );
    }

    showSuccessToast('Project successfully created');
    yield put(actions.getProjects());
    yield put(push(`/app/projects/${createProjectResponse.data.id}`));
    yield put(actions.createProjectSuccess({}));
  } catch (error) {
    yield put(actions.createProjectFailure({ error }));
  }
}

export function* requestDeleteProject() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);

    if (!currentProject || !currentProject.id) {
      return yield put(
        actions.deleteProjectFailure({
          error: 'Not current project selected'
        })
      );
    }

    const deleteProjectResponse = yield call(deleteRequest, `user/projects/${currentProject.id}`, {}, {});

    if (!deleteProjectResponse.data.Message || !deleteProjectResponse.data.Message.includes('Project deleted')) {
      return yield put(
        actions.deleteProjectFailure({
          error: deleteProjectResponse.data
        })
      );
    }

    yield put(actions.getProjects());

    const projects: IProject[] = yield select(state => state.project.projects);

    const firstProject = yield projects && projects.length > 1 && projects[0];
    if (firstProject) {
      yield put(push(`/app/projects/${firstProject.id}`));
    }

    showSuccessToast('Project successfully deleted');
    yield put(actions.deleteProjectSuccess({}));
  } catch (error) {
    yield put(actions.deleteProjectFailure({ error }));
  }
}

export function* requestGetDeviceEntities() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);
    const currentDevice: IDevice = yield select(state => state.project.currentDevice);

    if (!currentProject || !currentDevice) {
      return yield put(
        actions.getDeviceEntitiesFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const deviceEntitiesResponse = yield call(
      getRequest,
      `/user/projects/${currentProject.id}/devices/${currentDevice.id}/entities`
    );
    console.log(deviceEntitiesResponse);
    yield put(
      actions.getDeviceEntitiesSuccess({
        deviceEntities: deviceEntitiesResponse.data
      })
    );
  } catch (error) {
    yield put(actions.getDeviceEntitiesFailure({ error }));
  }
}

export function* requestAddDeviceChart(data: AddDeviceChartAction) {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);
    const currentDevice: IDevice = yield select(state => state.project.currentDevice);

    if (!currentProject || !currentDevice) {
      return yield put(
        actions.addDeviceChartFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const addChartResponse = yield call(
      postRequest,
      `charts`,
      {},
      {
        ...data.payload,
        deviceId: currentDevice.id,
        projectId: currentProject.id,
        type: 'Composed'
      }
    );

    if (addChartResponse.data.Message === 'Chart added succesfully') {
      showSuccessToast('Chart successfully added');
      yield put(actions.getDeviceCharts());
      yield put(push(`/app/projects/${currentProject.id}/devices/${currentDevice.id}`));
      yield put(actions.addDeviceChartSuccess({}));
    } else {
      yield put(
        actions.addDeviceChartFailure({
          error: addChartResponse.data
        })
      );
    }
  } catch (error) {
    showErrorToast(error);
    yield put(actions.addDeviceChartFailure({ error }));
  }
}

export function* requestGetDeviceCharts() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);
    const currentDevice: IDevice = yield select(state => state.project.currentDevice);

    if (!currentProject || !currentDevice) {
      return yield put(
        actions.getDeviceChartsFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const deviceChartsResponse = yield call(
      getRequest,
      `/project/${currentProject.id}/device/${currentDevice.id}/charts`
    );

    yield put(
      actions.getDeviceChartsSuccess({
        deviceCharts: deviceChartsResponse.data.Charts
      })
    );
  } catch (error) {
    yield put(actions.getDeviceChartsFailure({ error }));
  }
}

export function* requestGetDeviceChartsData() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);
    const currentDevice: IDevice = yield select(state => state.project.currentDevice);

    if (!currentProject || !currentDevice) {
      return yield put(
        actions.getDeviceChartsDataFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const deviceChartsDataResponse = yield call(
      getRequest,
      `/user/projects/${currentProject.id}/devices/${currentDevice.id}/data`,
      {
        page: 1,
        dataInPage: 200
      }
    );

    yield put(
      actions.getDeviceChartsDataSuccess({
        deviceChartsData: deviceChartsDataResponse.data
      })
    );
  } catch (error) {
    yield put(actions.getDeviceChartsDataFailure({ error }));
  }
}

export function* requestDeleteDevice() {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);
    const currentDevice: IDevice = yield select(state => state.project.currentDevice);

    if (!currentProject || !currentDevice) {
      return yield put(
        actions.deleteDeviceFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const deleteDeviceResponse = yield call(
      deleteRequest,
      `user/projects/${currentProject.id}/devices/${currentDevice.id}`,
      {},
      {}
    );

    if (!deleteDeviceResponse.data.Message || !deleteDeviceResponse.data.Message.includes('Device deleted')) {
      return yield put(
        actions.deleteDeviceFailure({
          error: deleteDeviceResponse.data
        })
      );
    }

    yield put(actions.getDevices());
    yield put(push(`/app/projects/${currentProject.id}`));
    showSuccessToast('Device successfully deleted');
    yield put(actions.deleteDeviceSuccess({}));
  } catch (error) {
    yield put(actions.deleteDeviceFailure({ error }));
  }
}

export function* requestSaveDeviceSettings(data: any) {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);
    const currentDevice: IDevice = yield select(state => state.project.currentDevice);

    if (!currentProject || !currentDevice || !currentDevice.id) {
      return yield put(
        actions.saveDeviceSettingsFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const saveDeviceSettingsResponse = yield call(
      putRequest,
      `user/projects/${currentProject.id}/devices/${currentDevice.id}`,
      {},
      data.payload
    );

    if (saveDeviceSettingsResponse.data.Message === 'Device update successful') {
      showSuccessToast('Device settings successfully saved');
      yield put(
        actions.saveDeviceSettingsSuccess({
          currentDevice: {
            ...currentDevice,
            deviceName: data.payload.name,
            deviceDescription: data.payload.deviceDescription,
            deviceLocation: data.payload.deviceLocation
          }
        })
      );
      yield put(actions.getDeviceById(currentDevice.id));
    }
  } catch (error) {
    yield put(actions.saveDeviceSettingsFailure({ error }));
  }
}

export function* requestGetDeviceChartById(data: any) {
  try {
    const currentProject: IProject = yield select(state => state.project.currentProject);
    const currentDevice: IDevice = yield select(state => state.project.currentDevice);

    if (!currentProject || !currentDevice || !currentDevice.id) {
      return yield put(
        actions.getDeviceChartByIdFailure({
          error: 'Not current project or device selected'
        })
      );
    }

    const deviceChartResponse = yield call(
      getRequest,
      `/project/${currentProject.id}/device/${currentDevice.id}/chart/${data.payload}`
    );

    yield put(
      actions.getDeviceChartByIdSuccess({
        currentChart: deviceChartResponse.data.Charts
      })
    );

    yield put(actions.getDeviceChartsData());
  } catch (error) {
    yield put(actions.getDeviceChartByIdFailure({ error }));
  }
}
