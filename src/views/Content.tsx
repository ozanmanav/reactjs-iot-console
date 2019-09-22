import React, { FunctionComponent, useEffect } from 'react';
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
import { AppState } from '../store';
import { AuthState } from '../store/auth/types';
import { Loading } from '../components/ui/loading';

interface ContentBaseProps {
  startup: typeof startup;
  auth: AuthState;
}

const ContentBase: FunctionComponent<RouteComponentProps & ContentBaseProps> = ({ startup, location, auth }) => {
  useEffect(() => {
    restoreScroll(true);
  }, [location.pathname]);

  useEffect(() => {
    startup();
  }, [startup]);

  if (auth && auth.loading && auth.loading.checkUser) {
    return <Loading />;
  }

  return (
    <>
      <LandingHeader />
      <Switch>
        <Route path="/app" component={Application} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Landing} />
        {/* <Route component={Application} /> */}
      </Switch>
    </>
  );
};

const ContentWithRouter = withRouter(ContentBase);

const mapStateToProps = (state: AppState) => ({
  auth: state.auth
});

export const Content = connect(
  mapStateToProps,
  { startup }
)(ContentWithRouter);
