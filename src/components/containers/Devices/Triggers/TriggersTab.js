import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styles from './TriggersTab.scss';
import { getProjectDevices, getTriggersByDevice } from '../../../../redux/actions/deviceActions';
import TriggersContainer from '../../../presentational/Triggers/TriggersContainer';

class TriggersTab extends React.Component {
  componentDidMount() {
    const { projectId, deviceId } = this.props.match.params;
    this.props.getTriggersByDevice(projectId, deviceId);
    this.props.getProjectDevices(projectId);
  }

  render() {
    const { alert, periodic } = this.props.triggers;
    return (
      <div className={styles['trigger-container']}>
        <TriggersContainer
          activeNumber={alert.length}
          devices={this.props.devices}
          title={'Alerts'}
          type={'alert'}
          triggers={this.props.triggers}
        />
        <TriggersContainer
          triggers={this.props.triggers}
          title={'Periodics'}
          type={'periodic'}
          devices={this.props.devices}
          activeNumber={periodic.length}
        />
      </div>
    );
  }
}

TriggersTab.propTypes = {
  router: PropTypes.object.isRequired,
  getTriggersByDevice: PropTypes.func.isRequired,
  getProjectDevices: PropTypes.func.isRequired,
  triggers: PropTypes.object,
  devices: PropTypes.array,
};

const mapStateToProps = (state) => ({
  router: state.router,
  triggers: state.device.triggers,
  devices: state.device.list,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getTriggersByDevice,
  getProjectDevices
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TriggersTab);
