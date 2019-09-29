import React, { FunctionComponent, useState } from 'react';
import './Cards.scss';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IDevice, ITrigger, IChart } from '../../../store/project/types';
import classNames from 'classnames';
import DeviceImageStatic from '../../../icons/raspberry.png';
import { TwitterPicker, ColorChangeHandler, ColorResult } from 'react-color';
import { Checkbox, Select } from '../inputs';
import { ValueType } from 'react-select/src/types';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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

const chartTypes = [
  {
    label: 'Line',
    value: 'Line'
  },
  {
    label: 'Bar',
    value: 'Bar'
  },
  {
    label: 'Scatter',
    value: 'Scatter'
  },
  {
    label: 'Area',
    value: 'Area'
  }
];

interface IEntityCardProps {
  entityName: string;
  addEntity: (selectedEntity: ISelectEntity) => void;
  removeEntity: (key: string) => void;
}

export interface ISelectEntity {
  type: string;
  key: string;
  color: string;
}

export const EntityCard: FunctionComponent<IEntityCardProps> = ({ entityName, addEntity, removeEntity }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedPickerColor, setSelectedPickerColor] = useState<string>('#000');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const togglePicker = () => {
    setIsPickerOpen(prevState => !prevState);
  };

  const handlePickerSelect: ColorChangeHandler = (color: ColorResult) => {
    setSelectedPickerColor(color.hex);
    togglePicker();
    addEntity({ key: entityName, color: color.hex, type: selectedType });
  };

  const IndicatorButton = styled.button`
    border-radius: 20px;
    height: 24px;
    width: 24px;
    background-color: ${selectedPickerColor};
  `;

  const onChangeActive = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      addEntity({ key: entityName, color: selectedPickerColor, type: selectedType });
    } else {
      removeEntity(entityName);
    }
  };

  const onChangeChartType = (option: ValueType<any>): void => {
    if (option) {
      setSelectedType(option.value);
      addEntity({ key: entityName, color: selectedPickerColor, type: option.value });
    } else {
      setSelectedType('');
    }
  };

  return (
    <div className="c-card__entity-card">
      <div className="c-card__entity-card__header">
        <Checkbox label={entityName} onChangeCapture={onChangeActive} />
        <IndicatorButton onClick={togglePicker} />
        {isPickerOpen && (
          <TwitterPicker
            // color={this.state.entitiesColors[e] || this.state.baseColor}
            onChangeComplete={handlePickerSelect}
          />
        )}
      </div>

      <Select options={chartTypes} onChange={onChangeChartType} />
    </div>
  );
};

export interface IDeviceChartCardProps {
  chart: IChart;
  deviceChartsData: any;
}

export const DeviceChartCard: FunctionComponent<IDeviceChartCardProps> = ({
  chart: { _id, name, elements },
  deviceChartsData
}) => {
  return (
    <div className="c-card__graph-card" key={_id}>
      <div className="c-card__graph-card__info">
        <div className="c-card__graph-card__info-title">{name}</div>
        <button className="c-card__graph-card__info-details-button" onClick={() => console.log('clicked detail')}>
          View Details
        </button>
      </div>
      <div className="c-card__graph-card__graph">
        {' '}
        <ComposedChart
          width={350}
          height={200}
          data={deviceChartsData}
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />

          {elements.map(element => {
            switch (element.type) {
              case 'Line':
                return (
                  <Line
                    key={`cg-line-${_id}-${element.type}-${element.key}-${element.color}`}
                    type="monotone"
                    dataKey={element.key}
                    stroke={element.color}
                    activeDot={false}
                    dot={false}
                  />
                );
              case 'Bar':
                return (
                  <Bar
                    key={`cg-bar-${_id}-${element.type}-${element.key}-${element.color}`}
                    dataKey={element.key}
                    fill={element.color}
                    barSize={45}
                  />
                );
              case 'Area':
                return (
                  <Area
                    key={`cg-area-${_id}-${element.type}-${element.key}-${element.color}`}
                    dataKey={element.key}
                    fill={`url(#${element.key}-def)`}
                    stroke={element.color}
                    activeDot={false}
                    dot={false}
                    type="monotone"
                  />
                );
              default:
                return <div />;
            }
          })}
        </ComposedChart>
      </div>
    </div>
  );
};
