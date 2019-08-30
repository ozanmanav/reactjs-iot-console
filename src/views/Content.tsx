import React, { FunctionComponent, useState } from 'react';
import { Application } from './app';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { LoginWithRedux } from './login';

const ContentBase: FunctionComponent<RouteComponentProps> = () => {
    return (
        <Switch>
            <Route path="/" component={LoginWithRedux} />
            {/* <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/restore-password" component={RestorePassword} />
            <Route path="/" component={Landing} /> */}
        </Switch>
    );
};

export const Content = withRouter(ContentBase);
