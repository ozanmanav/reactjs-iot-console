import React, { FunctionComponent } from 'react';
import './Device.scss';
import { IDevice } from '../../../store/project/types';
import { Icon } from '../../../components/ui';
import { ClipLoader } from 'react-spinners';

export const DeviceInfo: FunctionComponent<{ device: IDevice; loading?: boolean }> = ({ device, loading = false }) => {
  if (loading) {
    return <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={true} />;
  }

  return (
    <div className="b-device-details__info">
      <img src={device.deviceImage} alt="device" className="b-device-details__info-container-device-image" />
      <div className="b-device-details__info-container">
        <div className="b-device-details__info-container-titleInner">{device.deviceName}</div>
        <p className="b-device-details__info-container-description">{device.deviceDescription}</p>
        <div className="b-device-details__info-container-location">
          <div className="b-device-details__info-container-location-model">{device.deviceModel} |</div>
          <div className="b-device-details__info-container-location-inner">
            <Icon
              icon="location"
              width={12}
              height={12}
              className="b-device-details__info-container-location-inner-icon"
            />
            <div className="b-device-details__info-container-location-inner-text">{device.deviceLocation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
