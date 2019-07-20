import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getTriggersByProject } from '../../../../redux/actions/projectActions';
import styles from './TriggersTab.scss';
import { getProjectDevices } from '../../../../redux/actions/deviceActions';
import TriggersContainer from '../../../presentational/Triggers/TriggersContainer';

class TriggersTab extends React.Component {
  componentDidMount() {
    this.props.getTriggersByProject(this.props.match.params.projectId);
    this.props.getProjectDevices(this.props.match.params.projectId);
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
          devices={this.props.devices}
          type={'periodic'}
          activeNumber={periodic.length}
        />
      </div>
    );
  }
}

TriggersTab.propTypes = {
  router: PropTypes.object.isRequired,
  getTriggersByProject: PropTypes.func.isRequired,
  getProjectDevices: PropTypes.func.isRequired,
  triggers: PropTypes.object,
  devices: PropTypes.array,
};

const mapStateToProps = (state) => ({
  router: state.router,
  triggers: state.projects.projectTriggers,
  devices: state.device.list,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getTriggersByProject,
  getProjectDevices,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TriggersTab);
