import React, { FunctionComponent } from 'react';
import './Device.scss';
// import { IProject } from '../../../../store/device/types';
import ProjectImage from '../../../icons/ProjectLogo.png';
import { IDevice } from '../../../store/project/types';

export const DeviceInfo: FunctionComponent<{ device: IDevice }> = ({ device }) => {
    return (
        <div className="b-device-details__info">
            <img src={ProjectImage} alt="device" className="b-device-details__info-container-device-image" />
            <div className="b-device-details__info-container">
                <h1 className="b-device-details__info-container-title">{device.deviceName}</h1>
                <p className="b-device-details__info-container-description">{device.deviceDescription}</p>
            </div>
        </div>
    );
};
