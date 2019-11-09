import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { COPYRIGHT_TEXT } from '../config';
import { Sidebar } from '../../components/sidebar';
import { ProjectMain } from './project/ProjectMain';
import { Dashboard } from './dashboard';
import './Application.scss';
import { Account } from './account';
import { Onboard } from '../../components/onboard';

export const Application: FunctionComponent = () => {
  return (
    <>
      <main className="app">
        <Sidebar />
        <div className={'content'}>
          <Switch>
            <Route path="/app/projects" component={ProjectMain} />
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/account" component={Account} />
          </Switch>
        </div>
        <p className="_text-grey h6 _text-center app__copyright">{COPYRIGHT_TEXT}</p>
      </main>
    </>
  );
};
