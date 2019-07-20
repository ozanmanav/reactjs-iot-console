import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import firebase from 'firebase/app';
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

class Main extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  logout = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <div className={styles.main}>
        <div className={styles['menu-container']}>
          <a
            href={'#'}
            target={'_blank'}
            className={styles['external-navigation']}
            onClick={this.logout}
          >
            Sign Out
          </a>
          <a
            href={'https://blog.feynlab.io'}
            target={'_blank'}
            className={styles['external-navigation']}
          >
            Blog
          </a>
          <a
            href={'https://feedback.feynlab.io'}
            target={'_blank'}
            className={styles['external-navigation']}
          >
            Feedback
          </a>
          <a
            href={'https://forums.feynlab.io'}
            target={'_blank'}
            className={styles['external-navigation']}
          >
            Forums
          </a>
          <a
            href={'https://docs.feynlab.io'}
            target={'_blank'}
            className={styles['external-navigation']}
          >
            Documentation
          </a>
        </div>
        <div id={'main-area'} className={styles.container}>
          <Switch>
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
          </Switch>
        </div>
      </div>
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
