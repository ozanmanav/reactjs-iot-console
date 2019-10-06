import React, { FunctionComponent, useState, useEffect } from 'react';
import './Cards.scss';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IDevice, ITrigger, IChart } from '../../../store/project/types';
import classNames from 'classnames';
import DeviceImageStatic from '../../../icons/raspberry.png';
import { TwitterPicker, ColorChangeHandler, ColorResult } from 'react-color';
import { Checkbox, Select, ISelectOption } from '../inputs';
import { ValueType } from 'react-select/src/types';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart,
  ZAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Button } from '../buttons';
import { SummaryData } from '../../../views/app/device/DeviceChartDetail/utils';

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
    label: 'Area',
    value: 'Area'
  }
];

interface IEntityCardProps {
  entityName: string;

  onlyScatter: boolean;
  addEntity: (selectedEntity: ISelectEntity) => void;
  removeEntity: (key: string) => void;
}

export interface ISelectEntity {
  type: string;
  key: string;
  color: string;
}

export const EntityCard: FunctionComponent<IEntityCardProps> = ({
  entityName,
  addEntity,
  removeEntity,
  onlyScatter
}) => {
  const [selectedType, setSelectedType] = useState<ISelectOption>({
    label: 'Line',
    value: 'Line'
  });

  const [selectedPickerColor, setSelectedPickerColor] = useState<string>('#000');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  useEffect(() => {
    if (onlyScatter) {
      setSelectedType({
        label: 'Scatter',
        value: 'Scatter'
      });
    }
  }, [onlyScatter]);

  const togglePicker = () => {
    setIsPickerOpen(prevState => !prevState);
  };

  const handlePickerSelect: ColorChangeHandler = (color: ColorResult) => {
    setSelectedPickerColor(color.hex);
    togglePicker();
    addEntity({ key: entityName, color: color.hex, type: `${selectedType.value}` });
  };

  const IndicatorButton = styled.button`
    border-radius: 20px;
    height: 24px;
    width: 24px;
    background-color: ${selectedPickerColor};
  `;

  const onChangeActive = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      addEntity({ key: entityName, color: selectedPickerColor, type: `${selectedType.value}` });
    } else {
      removeEntity(entityName);
    }
  };

  const onChangeChartType = (option: ValueType<any>): void => {
    if (option) {
      setSelectedType({
        label: option.value,
        value: option.value
      });
      addEntity({ key: entityName, color: selectedPickerColor, type: option.value });
    } else {
      setSelectedType({
        label: '',
        value: ''
      });
    }
  };

  return (
    <div className="c-card__entity-card">
      <div className="c-card__entity-card__header">
        <Checkbox label={entityName} onChangeCapture={onChangeActive} />
        <IndicatorButton onClick={togglePicker} />
        {isPickerOpen && <TwitterPicker onChangeComplete={handlePickerSelect} />}
      </div>

      <Select options={chartTypes} onChange={onChangeChartType} isDisabled={onlyScatter} value={selectedType} />
    </div>
  );
};

export interface IDeviceChartCardProps {
  chart: IChart;
  deviceChartsData: any;
  chartWidth?: number;
  chartHeight?: number;
  showEditButton?: boolean;
  showDeleteButton?: boolean;
  showTooltip?: boolean;
  onClickDelete?: () => void;
}

export const DeviceChartCard: FunctionComponent<IDeviceChartCardProps> = ({
  chart: { _id, name, elements },
  deviceChartsData,
  chartHeight = 200,
  showEditButton = false,
  showDeleteButton = false,
  showTooltip = false,
  onClickDelete
}) => {
  return (
    <div className="c-card__graph-card _cursor-pointer" key={_id}>
      <div className="c-card__graph-card__info">
        <div className="c-card__graph-card__info-title">{name}</div>
        <div>
          {showDeleteButton && (
            <Button text="Delete Chart" className="c-card__graph-card__info-delete-button" onClick={onClickDelete} />
          )}
          {showEditButton && <Button text="Edit Chart" className="c-card__graph-card__info-edit-button" />}
        </div>
      </div>
      <div className="c-card__graph-card__graph _cursor-pointer">
        <ResponsiveContainer width={'99%'} height={chartHeight}>
          {elements && elements.some(element => element.type === 'Scatter') ? (
            <ScatterChart
              margin={{
                top: 0,
                right: 10,
                bottom: 0,
                left: -35
              }}
            >
              <CartesianGrid />
              {elements.length > 0 && (
                <XAxis type="number" dataKey={elements[0].key} name={elements[0].key} tick={{ fill: '#9b9b9b' }} />
              )}
              {elements.length > 1 && (
                <YAxis type="number" dataKey={elements[1].key} name={elements[1].key} tick={{ fill: '#9b9b9b' }} />
              )}
              {elements.length > 2 && <ZAxis type="number" dataKey={elements[2].key} name={elements[2].key} />}
              {showTooltip && <Tooltip />}
              <Legend />
              <Scatter
                name={elements && elements.map(x => x.key).join('-')}
                data={deviceChartsData}
                fill={elements[0].color}
              />
            </ScatterChart>
          ) : (
            <ComposedChart data={deviceChartsData} margin={{ top: 0, right: 10, left: -35, bottom: 0 }}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis tick={{ fill: '#9b9b9b' }} />
              <YAxis tick={{ fill: '#9b9b9b' }} />
              {showTooltip && <Tooltip />}
              <Legend />
              <defs>
                {elements.map(el => {
                  if (el.type === 'Area') {
                    return (
                      <linearGradient key={`${el.key}-def-key`} id={`${el.key}-def`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={el.color} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={el.color} stopOpacity={0} />
                      </linearGradient>
                    );
                  }
                  return null;
                })}
              </defs>
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
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export interface IDeviceChartSummaryCardProps {
  summaryData: SummaryData;
}

export const DeviceChartSummaryCard: FunctionComponent<IDeviceChartSummaryCardProps> = ({ summaryData }) => {
  const OvalIndicator = styled.div`
    border-radius: 20px;
    background-color: ${props => props.color};
    height: 18px;
    width: 18px;
    margin-right: 5px;
  `;

  return (
    <div className="c-card__summary-card">
      <div className="c-card__summary-card__header">
        <OvalIndicator color={summaryData.color} />
        {summaryData.entityName}
      </div>

      <div className="c-card__summary-card__values">
        <div className="c-card__summary-card__values-value">
          <div className="c-card__summary-card__values-value__data">{summaryData.maxValue}</div>
          <div className="c-card__summary-card__values-value__label">Max Value</div>
        </div>
        <div className="c-card__summary-card__values-value">
          <div className="c-card__summary-card__values-value__data">{summaryData.minValue}</div>
          <div className="c-card__summary-card__values-value__label">Min Value</div>
        </div>
        <div className="c-card__summary-card__values-value">
          <div className="c-card__summary-card__values-value__data">{summaryData.average}</div>
          <div className="c-card__summary-card__values-value__label">Average</div>
        </div>
      </div>
    </div>
  );
};
