import React, { FunctionComponent } from 'react';
import './Device.scss';
import { IDevice } from '../../../store/project/types';
import { Icon } from '../../../components/ui';

export const DeviceInfo: FunctionComponent<{ device: IDevice }> = ({ device }) => {
    return (
        <div className="b-device-details__info">
            <img src={device.deviceImage} alt="device" className="b-device-details__info-container-device-image" />
            <div className="b-device-details__info-container">
                <h1 className="b-device-details__info-container-title">{device.deviceName}</h1>
                <p className="b-device-details__info-container-description">{device.deviceDescription}</p>
                <div className="b-device-details__info-container-location">
                    <div className="b-device-details__info-container-location-model">{device.deviceModel} |</div>
                    <div className="b-device-details__info-container-location-inner">
                        <Icon icon="location" width={12} height={12} className="b-device-details__info-container-location-inner-icon" />
                        <div className="b-device-details__info-container-location-inner-text">{device.deviceLocation}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
