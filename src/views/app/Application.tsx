import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { COPYRIGHT_TEXT } from '../config';
import { Sidebar } from '../../components/sidebar';
import './Application.scss';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { UIState } from '../../store/ui/types';
import { ProjectMain } from './project/ProjectMain';
import { Dashboard } from './dashboard';

interface ApplicationBaseProps {
  ui?: UIState;
}

export const ApplicationBase: FunctionComponent<ApplicationBaseProps> = ({ ui }) => {
  return (
    <>
      <main className="app">
        <Sidebar />
        <div
          className={classNames('content', {
            _close: ui && !ui.isSidebarOpen
          })}
        >
          <Switch>
            <Route path="/app/projects" component={ProjectMain} />
            {/* <Route path="/app/projects/:id" component={Project} />
                        <Route path="/app/projects/:projectId/devices/:deviceId" component={Device} /> */}
            {/* <Route path="/app/event/add" component={AddEvent} />
                    <Route path="/app/event/:id" component={Event} />
                    <Route path={["/app/building", "/app/object"]} component={Object} />
                    <Route path={"/app/settings"} component={Settings} />
                    <Route path={"/app/admin"} component={AdminPanel} />
                    <Route path="/app/export" component={Export} /> */}
            {/* <Route component={Dashboard} /> */}
            <Route exact path="/app/dashboard" component={Dashboard} />
          </Switch>
        </div>
        <p className="_text-grey h6 _text-center app__copyright">{COPYRIGHT_TEXT}</p>
      </main>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  ui: state.ui
});

export const Application = connect(
  mapStateToProps,
  null
)(ApplicationBase);
