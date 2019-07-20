import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styles from './DeviceInfo.scss';
import InfoLoading from '../../../presentational/InfoLoading/InfoLoading';

class DeviceInfo extends React.Component {
  render() {
    const { deviceName, deviceDescription, deviceImage, deviceModel } = this.props.deviceDetails;
    return (
      <div className={styles.container}>
        {
          this.props.getDeviceLoading ?
            <InfoLoading /> :
            <React.Fragment>
              <img src={deviceImage} alt="device" className={styles['device-image']} />
              <div className={styles['info-area']}>
                <h1 className={styles.title}>{deviceName}</h1>
                <p className={styles.description}>{deviceDescription}</p>
                <div className={styles['device-location']}>
                  {deviceModel}
                </div>
              </div>
            </React.Fragment>
        }
      </div>
    );
  }
}

DeviceInfo.propTypes = {
  router: PropTypes.object,
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
  deviceDetails: state.device.deviceDetails,
  getDeviceLoading: state.device.getDetailsLoading
});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeviceInfo);
