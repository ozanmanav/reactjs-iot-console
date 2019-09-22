import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CreateProject } from './CreateProject';
import { AddDevice } from './AddDevice';
import { Project } from './Project';
import { Device } from '../device';

export const ProjectMain: FunctionComponent = () => {
  return (
    <>
      <Switch>
        <Route path="/app/projects/create" component={CreateProject} />
        <Route path="/app/projects/:projectId/devices/:deviceId" component={Device} />
        <Route path="/app/projects/:id/add-device" component={AddDevice} />
        <Route path="/app/projects/:id" component={Project} />

        {/* <Route path="/app/object/add/simple" component={AddObjectSimple} />
                <Route path="/app/object/add" component={AddObject} />
                <Route path="/app/object/:objectID/organization/:organizationID" component={RemoveOrganization} />
                <Route path={["/app/building/:id", "/app/object/:id"]} exact component={ObjectDetails} />
                <Route path={["/app/building/:id/installations", "/app/object/:id/installations"]} 
                component={Installations} />
                <Route path={["/app/building/:id/history", "/app/object/:id/history"]} component={ObjectHistory} />
                <Route path={["/app/building/:id/admin", "/app/object/:id/admin"]} component={ObjectAdmin} />
                <Route path={["/app/building/:id/related", "/app/object/:id/related"]} component={ObjectRelated} />
                <Route path={["/app/building/:id/organizations", "/app/object/:id/organizations"]} 
                exact component={ObjectOrganizations} /> */}
      </Switch>
    </>
  );
};
