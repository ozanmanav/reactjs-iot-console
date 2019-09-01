import React, { FunctionComponent, useState, useEffect } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Login } from './login';
import { Landing } from './landing';
import { LandingHeader } from '../components/header';
import { Signup } from './signup';
import { Application } from './app';
import { connect } from 'react-redux';
import { startup } from '../store/startup/actions';
import { restoreScroll } from '../hooks';

interface ContentBaseProps {
    startup: typeof startup;
}

const ContentBase: FunctionComponent<RouteComponentProps & ContentBaseProps> = ({ startup, location }) => {
    useEffect(() => {
        restoreScroll(true);
    }, [location.pathname]);

    useEffect(() => {
        startup();
    }, []);

    return (
        <>
            <LandingHeader />
            <Switch>
                <Route path="/app" component={Application} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Landing} />
            </Switch>
        </>
    );
};

const ContentWithRouter = withRouter(ContentBase);

export const Content = connect(
    null,
    { startup }
)(ContentWithRouter);
