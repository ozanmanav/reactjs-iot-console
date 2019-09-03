import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Switch, Route, RouteComponentProps, Router } from 'react-router-dom';
import { COPYRIGHT_TEXT } from '../config';
import { Dashboard } from './dashboard';
import { Sidebar } from '../../components/sidebar';
import { Project } from './project/Project';
import './Application.scss';
import { CreateProject } from './project/CreateProject';

export const Application: FunctionComponent<RouteComponentProps> = ({ history }) => {
    return (
        <>
            <main className="app">
                <Sidebar />
                <Switch>
                    <Route path="/app/dashboard" component={Dashboard} />
                    <Route path="/app/projects/create" component={CreateProject} />
                    <Route path={'/app/projects/:id'} component={Project} />
                    {/* <Route path="/app/event/add" component={AddEvent} />
                    <Route path="/app/event/:id" component={Event} />
                    <Route path={["/app/building", "/app/object"]} component={Object} />
                    <Route path={"/app/settings"} component={Settings} />
                    <Route path={"/app/admin"} component={AdminPanel} />
                    <Route path="/app/export" component={Export} /> */}
                </Switch>

                <p className="_text-grey h6 _text-center app__copyright">{COPYRIGHT_TEXT}</p>
            </main>
        </>
    );
};
