import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './TriggerCard.scss';

const TriggerCard = props => (
  <div
    key={props._id}
    className={classnames(styles['trigger-card-container'], 'col-sm-6')}
    style={{ marginBottom: 20 }}
  >
    <Link to={'#'}>
      <div className={styles['trigger-card']}>
        <img
          src={props.triggerImage} alt={'trigger'}
          style={{ width: 50, height: 50 }}
        />
        <div className={styles['trigger-card-info-container']}>
          <div className={styles['trigger-title']}>{props.name}</div>
          <div className={styles['trigger-description']}>
            {
              props.devices.filter(d => d.id === props.deviceId)[0].deviceName
            }
          </div>
          <div className={styles['trigger-type']}>
            {props.integration}
          </div>
        </div>
      </div>
    </Link>
  </div>);

TriggerCard.propTypes = {
  _id: PropTypes.string.isRequired,
  triggerImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  integration: PropTypes.string.isRequired,
  devices: PropTypes.array.isRequired,
  deviceId: PropTypes.string.isRequired,
};

export default TriggerCard;
