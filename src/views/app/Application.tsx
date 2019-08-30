import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { COPYRIGHT_TEXT } from '../config';

export const Application: FunctionComponent<RouteComponentProps> = ({ history }) => {
    return (
        <>
            {/* <AppHeader /> */}
            <main className="app">
                <Switch>
                    {/* <Route path="/app/cockpit" component={Cockpit} /> */}
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
