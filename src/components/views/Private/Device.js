import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../containers/Breadcrumbs/Breadcrumbs';
import TabsMenu from '../../containers/Tabs/TabsMenu';
import DeviceInfo from '../../containers/Devices/DeviceInfo/DeviceInfo';
import { getDeviceById } from '../../../redux/actions/deviceActions';
import { getProjectById } from '../../../redux/actions/projectActions';
import Charts from '../../containers/Devices/Charts/Charts';
import Activities from '../../containers/Devices/Activities/Activities';
import TriggersTab from '../../containers/Devices/Triggers/TriggersTab';
import Settings from '../../containers/Devices/Settings/Settings';

class Device extends React.Component {
  componentDidMount() {
    const { projectId, deviceId } = this.props.match.params;
    if (deviceId) this.props.getDeviceById(projectId, deviceId);
    if (projectId) this.props.getProjectById(projectId);
  }

  componentDidUpdate(prevProps) {
    const { projectId, deviceId } = this.props.match.params;
    if (deviceId !== prevProps.match.params.deviceId) {
      this.props.getDeviceById(projectId, deviceId);
    }
    if (projectId !== prevProps.match.params.projectId) {
      this.props.getProjectById(projectId);
    }
  }

  render() {
    const { projectName } = this.props.projectDetails;
    const { deviceName } = this.props.deviceDetails;
    const rootPath = '/projects/:projectId/devices/:deviceId';
    return (
      <React.Fragment>
        <Breadcrumbs
          route={'Projects / '}
          present={deviceName}
          linkText={projectName}
          link={`/projects/${this.props.match.params.projectId}/devices`}
        />
        <DeviceInfo />
        <TabsMenu items={['graphs', 'triggers', 'activities', 'archive', 'settings']} />
        <Switch>
          <Route exact path={`${rootPath}/graphs`} component={props => <Charts {...props} />} />
          {/* eslint-disable-next-line max-len */}
          <Route exact path={`${rootPath}/triggers`} component={props => <TriggersTab {...props} />} />
          {/* eslint-disable-next-line max-len */}
          <Route exact path={`${rootPath}/activities`} component={props => <Activities {...props} />} />
          <Route exact path={`${rootPath}/archive`} component={() => <h1>archive</h1>} />
          <Route exact path={`${rootPath}/settings`} component={props => <Settings {...props} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

Device.propTypes = {
  router: PropTypes.object.isRequired,
  getProjectById: PropTypes.func.isRequired,
  getDeviceById: PropTypes.func.isRequired,
  projectDetails: PropTypes.shape({
    id: PropTypes.string,
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
    projectImage: PropTypes.string,
  }),
  deviceDetails: PropTypes.shape({
    id: PropTypes.string.isRequired,
    deviceModel: PropTypes.string.isRequired,
    deviceName: PropTypes.string.isRequired,
    deviceLocation: PropTypes.string.isRequired,
    deviceImage: PropTypes.string.isRequired,
    deviceDescription: PropTypes.string.isRequired,
    deviceStatus: PropTypes.string.isRequired,
    deviceLastSeen: PropTypes.string.isRequired,
    deviceEntities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

const mapStateToProps = (state) => ({
  router: state.router,
  projectDetails: state.projects.projectDetails,
  deviceDetails: state.device.deviceDetails,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProjectById,
  getDeviceById,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Device));
