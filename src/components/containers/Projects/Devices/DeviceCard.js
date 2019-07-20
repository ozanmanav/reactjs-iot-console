import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.css';
import styles from './Devices.scss';

const DeviceCard = props => (
  <div
    className={classnames(styles['device-card-container'], 'col-sm-6')}
    style={{ marginBottom: 20 }} key={props.id}
  >
    <Link to={props.deviceLink}>
      <div className={styles['device-card']}>
        <img
          src={props.deviceImage} alt={'device'}
          style={{ width: 50, height: 50 }}
        />
        <div className={styles['device-card-info-container']}>
          <div className={styles['device-title']}>{props.deviceName}</div>
          <div className={styles['device-description']}>{props.deviceDescription}</div>
          <div className={styles['device-location']}>
            {props.deviceModel}
          </div>
        </div>
        <div className={styles['status-container']}>
          <span className={styles['status-text']}>{props.deviceStatus}</span>
          <div
            className={classnames(
              props.deviceStatus === 'Active' ?
                styles['online-icon'] :
                styles['offline-icon']
            )}
          />
        </div>
      </div>
    </Link>
  </div>
);

DeviceCard.propTypes = {
  id: PropTypes.string.isRequired,
  deviceImage: PropTypes.any,
  deviceName: PropTypes.string.isRequired,
  deviceDescription: PropTypes.string,
  deviceLocation: PropTypes.string,
  deviceStatus: PropTypes.string.isRequired,
  deviceLink: PropTypes.string.isRequired,
};

export default DeviceCard;
