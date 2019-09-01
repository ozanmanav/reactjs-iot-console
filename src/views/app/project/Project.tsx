import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProjectDetails } from './projectDetails';

export const Project: FunctionComponent = () => {
    return (
        <>
            <Switch>
                <Route path={['/app/project/:id']} exact component={ProjectDetails} />
            </Switch>
        </>
    );
};
