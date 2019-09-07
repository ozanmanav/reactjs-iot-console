import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { COPYRIGHT_TEXT } from '../config';
import { Dashboard } from './dashboard';
import { SidebarWrapped } from '../../components/sidebar';
import { Project } from './project/Project';
import './Application.scss';
import { CreateProject } from './project/CreateProject';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { UIState } from '../../store/ui/types';

interface ApplicationBaseProps {
    ui?: UIState;
}

export const ApplicationBase: FunctionComponent<ApplicationBaseProps> = ({ ui }) => {
    return (
        <>
            <main className="app">
                <SidebarWrapped />
                <div className={classNames('content', { _close: ui && !ui.isSidebarOpen })}>
                    <Switch>
                        <Route exact path="/app/dashboard" component={Dashboard} />
                        <Route path="/app/projects/create" component={CreateProject} />
                        <Route path="/app/projects/:id" component={Project} />
                        {/* <Route path="/app/event/add" component={AddEvent} />
                    <Route path="/app/event/:id" component={Event} />
                    <Route path={["/app/building", "/app/object"]} component={Object} />
                    <Route path={"/app/settings"} component={Settings} />
                    <Route path={"/app/admin"} component={AdminPanel} />
                    <Route path="/app/export" component={Export} /> */}
                        <Route component={Dashboard} />
                    </Switch>
                </div>
                <p className="_text-grey h6 _text-center app__copyright">{COPYRIGHT_TEXT}</p>
            </main>
        </>
    );
};

const mapStateToProps = (state: AppState) => ({
    ui: state.ui,
});

export const Application = connect(
    mapStateToProps,
    null
)(ApplicationBase);
