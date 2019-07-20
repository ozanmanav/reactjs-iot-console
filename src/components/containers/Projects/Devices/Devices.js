import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap-grid.css';
import styles from './Devices.scss';
import { getProjectDevices } from '../../../../redux/actions/deviceActions';
import TitleArea from '../../../presentational/TitleArea/TitleArea';
import DeviceCard from './DeviceCard';

class Devices extends React.Component {
  componentDidMount() {
    this.props.getProjectDevices(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getProjectDevices(this.props.match.params.id);
    }
  }

  render() {
    const { activeDevices } = this.props.accountProperties;
    return (
      <div className={styles['device-container']}>
        {/* Device Title Area */}
        <TitleArea
          title={'DEVICE LIST'}
          addText={'Add Device'}
          addURL={`/projects/${this.props.match.params.id}/devices/add`}
          activeNumber={this.props.device.list.length}
          limitNumber={activeDevices}
          numbers
        />
        {/* Devices */}
        <div style={{ marginTop: 30 }} className={'container-fluid'}>
          <div className={'row'}>
            {this.props.device.list.map(d => (
              <DeviceCard
                key={d.id}
                id={d.id}
                deviceName={d.deviceName}
                deviceStatus={d.deviceStatus}
                deviceImage={d.deviceImage}
                deviceDescription={d.deviceDescription}
                deviceModel={d.deviceModel}
                deviceLink={`${this.props.location.pathname}/${d.id}/graphs`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Devices.propTypes = {
  accountProperties: PropTypes.object,
  getProjectDevices: PropTypes.func.isRequired,
  device: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  accountProperties: state.user.accountProperties,
  device: state.device
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProjectDevices,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Devices);
