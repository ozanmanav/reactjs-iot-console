import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Details } from './Details';

export const Project: FunctionComponent = () => {
    return (
        <Switch>
            <Route path={'/app/projects/:id'} component={Details} />
        </Switch>
    );
};
