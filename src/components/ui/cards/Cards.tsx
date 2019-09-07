import React, { FunctionComponent } from 'react';
import './Cards.scss';
import { Link } from 'react-router-dom';
import { IDevice } from '../../../store/project/types';
import classNames from 'classnames';
import DeviceImageStatic from '../../../icons/raspberry.png';

interface ICardBaseProps {}

export interface IDeviceCardProps extends ICardBaseProps {
    device: IDevice;
}

export const DeviceCard: FunctionComponent<IDeviceCardProps> = ({
    device: { id, deviceImage, deviceName, deviceDescription, deviceModel, deviceStatus },
}) => {
    return (
        <div className="c-card__device-container" style={{ marginBottom: 20 }} key={id}>
            <Link to="{device.deviceLink}">
                <div className="c-card__device-card">
                    <img src={DeviceImageStatic} alt={'device'} style={{ width: 50, height: 50 }} />
                    <div className="c-card__device-card-info">
                        <div className="c-card__device-card-info-title">{deviceName}</div>
                        <div className="c-card__device-card-info-description">{deviceDescription}</div>
                        <div className="c-card__device-card-info-location">{deviceModel}</div>
                    </div>
                    <div className="c-card__device-card-status">
                        <span className="c-card__device-card-status-text">{deviceStatus}</span>
                        <div
                            className={classNames(
                                deviceStatus === 'Active'
                                    ? 'c-card__device-card-status-online-icon'
                                    : 'c-card__device-card-status-offline-icon'
                            )}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};
