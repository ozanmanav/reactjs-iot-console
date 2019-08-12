import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as classnames from 'classnames';
import { Route, Switch } from 'react-router';
import styles from './Account.scss';
import TabsMenu from '../../containers/Tabs/TabsMenu';
import Profile from './Profile';
// import Security from '../../containers/Account/Security/Security';
// import PropTypes from 'prop-types';

class Account extends Component {
  render() {
    return (
      <div className={classnames('container-fluid', styles.container)}>
        {/* Breadcrumbs */}
        {/* Header */}
        <h1 className={classnames('row', styles.header)}>Account</h1>
        {/* Account Details */}
        <h2 className={classnames('row', styles.details)}>Showing Account Details</h2>
        {/* Tab */}
        <div className={classnames('row', styles.tab)}>
          <TabsMenu
            items={['profile']}
          />
        </div>
        {/* Switch & Routing */}
        <Switch>
          <Route path={'/account/profile'} component={Profile} />
          {/* <Route path={'/account/billing'} component={() => <h1>Billing</h1>} />
          <Route path={'/account/security'} component={Security} /> */}
        </Switch>
      </div>
    );
  }
}

Account.propTypes = {};

const mapStateToProps = (state) => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
