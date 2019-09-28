import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CreateProject } from './CreateProject';
import { AddDevice } from './AddDevice';
import { Project } from './Project';
import { Device } from '../device';
import { AddChart } from '../device/AddChart';

export const ProjectMain: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/app/projects/create" component={CreateProject} />
      <Route exact path="/app/projects/:projectId/devices/:deviceId/add-chart" component={AddChart} />
      <Route exact path="/app/projects/:projectId/devices/:deviceId" component={Device} />
      <Route exact path="/app/projects/:id/add-device" component={AddDevice} />
      <Route exact path="/app/projects/:id" component={Project} />
    </Switch>
  );
};
