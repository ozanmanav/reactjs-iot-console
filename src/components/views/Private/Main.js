import 'react-dropdown/style.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import firebase from 'firebase/app';
import Avatar from 'react-avatar';
import Dropdown from 'react-dropdown';
import 'firebase/auth';
import styles from './Main.scss';
import Project from './Project';
import { getUser } from '../../../redux/actions/userActions';
import AddDevice from '../../containers/Projects/AddDevice/AddDevice';
import Device from './Device';
import ChartDetail from '../../containers/Charts/ChartDetail/ChartDetail';
import AddChart from '../../containers/Charts/Add/Add';
import Account from './Account';
import Create from '../../containers/Projects/Create/Create';

const options = [
  'Sign Out'
];

class Main extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  logout = () => {
    firebase.auth().signOut();
  };

  _onSelect = (selectedOption) => {
    if (selectedOption.value === 'Sign Out') {
      this.logout();
    }
  };

  render() {
    return (
      <Switch>
        <div className={styles.main}>
          <div className={styles['menu-container']}>
            <a
              className={styles['external-navigation']}
            // onClick={this.logout}
            >
              <Dropdown
                controlClassName={styles['avatar-control']}
                options={options}
                onChange={this._onSelect}
                value="Ozan Manav"
                placeholder="Select an option"
              />
            </a>
            <NavLink to="/account">
              <Avatar
                name="Ozan Manav"
                size="40"
                round="20px"
                className={[styles['external-navigation-avatar']]}
              />
            </NavLink>
            <a className={styles['external-navigation-divider']} />

          </div>
          <div id={'main-area'} className={styles.container}>

            <Route exact path={'/projects/create'} component={Create} />
            <Route exact path={'/projects/:id/devices/add'} component={AddDevice} />
            <Route
              exact path={'/projects/:projectId/devices/:deviceId/graphs/add'}
              component={AddChart}
            />
            <Route
              exact path={'/projects/:projectId/devices/:deviceId/graphs/:chartId'}
              component={ChartDetail}
            />
            <Route path={'/projects/:projectId/devices/:deviceId'} component={Device} />
            <Route path={'/projects/:id'} component={Project} />
            <Route path={'/account'} component={Account} />

          </div>
        </div>
      </Switch>
    );
  }
}

Main.propTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
