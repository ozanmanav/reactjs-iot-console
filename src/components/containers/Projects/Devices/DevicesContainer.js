import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap-grid.css';
import DeviceCard from './DeviceCard';


const DevicesContainer = ({ devices }) => (
  <div style={{ marginTop: 30 }} className={'container-fluid'}>
    <div className={'row'}>
      {devices.map(d => (
        <DeviceCard
          id={d.id}
          deviceName={d.deviceName}
          deviceStatus={d.deviceStatus}
          deviceLocation={d.deviceLocation}
          deviceDescription={d.deviceDescription}
          deviceImage={d.deviceImage}
        />
      ))}
    </div>
  </div>
);

DevicesContainer.propTypes = {
  devices: PropTypes.array,
};

export default DevicesContainer;
