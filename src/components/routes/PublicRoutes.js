import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Router } from 'react-router';
import { history } from '../../redux/configureStore';
import Login from '../views/Public/Login';
import Register from '../views/Public/Register';
import ForgotPassword from '../views/Public/ForgotPassword';
import PublicNavBar from '../presentational/NavBars/PublicNavBar';
import ResetPasswordSent from '../views/Public/ResetPasswordSent';

class PublicRoutes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PublicNavBar />
        <Router history={history}>
          <Switch >
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/forgotPassword'} component={ForgotPassword} />
            <Route exact path={'/resetPasswordSent'} component={ResetPasswordSent} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

PublicRoutes.propTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoutes);
