import React, { FunctionComponent, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './login';
import { LandingHeader } from '../components/header';
import { Signup } from './signup';
import { Application } from './app';
import { connect } from 'react-redux';
import { startup } from '../store/startup/actions';
import { AppState, history } from '../store';
import { AuthState } from '../store/auth/types';
import { Loading } from '../components/ui/loading';
import { ConnectedRouter } from 'connected-react-router';

interface ContentBaseProps {
  startup: typeof startup;
  auth: AuthState;
}

const ContentBase: FunctionComponent<ContentBaseProps> = ({ startup, auth }) => {
  useEffect(() => {
    startup();
  }, [startup]);

  if (auth && auth.loading && auth.loading.checkUserAuthFirebase) {
    return <Loading />;
  }

  return (
    <ConnectedRouter history={history}>
      <LandingHeader />
      <Switch>
        <Route path="/app" component={Application} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </ConnectedRouter>
  );
};

const mapStateToProps = (state: AppState) => ({
  auth: state.auth
});

export const Content = connect(
  mapStateToProps,
  { startup }
)(ContentBase);
