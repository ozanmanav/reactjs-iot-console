import React, { FunctionComponent } from 'react';
import './Cards.scss';
import { Link } from 'react-router-dom';
import { IDevice, ITrigger } from '../../../store/project/types';
import classNames from 'classnames';
import DeviceImageStatic from '../../../icons/raspberry.png';

export interface IDeviceCardProps {
  device: IDevice;
}

export const DeviceCard: FunctionComponent<IDeviceCardProps> = ({
  device: { id, deviceImage, deviceName, deviceDescription, deviceModel, deviceStatus }
}) => {
  return (
    <div key={id}>
      <div className="c-card__device-card">
        <img
          src={deviceImage}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = DeviceImageStatic;
          }}
          alt={'device'}
          style={{ width: 50, height: 50 }}
        />
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
    </div>
  );
};

export interface ITriggerCardProps {
  trigger: ITrigger;
}

export const TriggerCard: FunctionComponent<ITriggerCardProps> = ({
  trigger: { id, name, triggerType, integration, triggerImage }
}) => {
  return (
    <div className="c-card__device-container" key={id}>
      <Link to="{device.deviceLink}">
        <div className="c-card__device-card">
          <img
            src={triggerImage}
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = DeviceImageStatic;
            }}
            alt={'device'}
            style={{ width: 50, height: 50 }}
          />
          <div className="c-card__device-card-info">
            <div className="c-card__device-card-info-title">{name}</div>
            <div className="c-card__device-card-info-description">{integration}</div>
            <div className="c-card__device-card-info-location">{triggerType}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
