import React, { FunctionComponent } from 'react';
import './Widget.scss';
import { GridWidgetCard } from '../ui/cards';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Bar,
  BarChart,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { IWidget } from '../../store/ui/types';
import rechartsDataLine from './data/rechartsData.json';
import rechartsDataBar from './data/rechartsDataBar.json';
import rechartsDataArea from './data/rechartsDataArea.json';
import rechartsDataScatter from './data/rechartsDataScatter.json';
import rechartsDataPie from './data/rechartsDataPie.json';
import rechartsDataRadar from './data/rechartsDataRadar.json';
import { LiquidGauge } from '../liquidGauge';
import { HeatMapTable } from '../heatMapTable';

interface IWidgetProps {
  widget: IWidget;
}

const primaryColor = '#F68A4D';
const secondaryColor = '#4A4A4A';

export const Widget: FunctionComponent<IWidgetProps> = ({ widget }) => {
  return (
    <GridWidgetCard widgetName={widget.name}>
      <ResponsiveContainer width="99%">
        {(() => {
          switch (widget.type) {
            case 'liquid-gauge':
              return <LiquidGauge value={32} startColor="red" endColor="red" />;
            case 'line-chart':
              return (
                <LineChart data={rechartsDataLine}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />

                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke={primaryColor} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke={secondaryColor} />
                </LineChart>
              );
            case 'bar-chart':
              return (
                <BarChart data={rechartsDataBar}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />

                  <Legend />
                  <Bar dataKey="pv" fill={'red'} />
                  <Bar dataKey="uv" fill={'blue'} />
                </BarChart>
              );
            case 'area-chart':
              return (
                <AreaChart data={rechartsDataArea}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />

                  <Area type="monotone" dataKey="Temp" fill={primaryColor} stroke={secondaryColor} />
                </AreaChart>
              );
            case 'scatter-chart':
              return (
                <ScatterChart>
                  <CartesianGrid />
                  <XAxis type="number" dataKey="x" name="Amper" unit="Amp" />
                  <YAxis type="number" dataKey="y" name="Temprature" unit="Temp" />
                  <Scatter name="A school" data={rechartsDataScatter} fill={primaryColor} />
                </ScatterChart>
              );
            case 'pie-chart':
              return (
                <PieChart>
                  <Pie dataKey="value" isAnimationActive={false} data={rechartsDataPie} fill={primaryColor} label />
                </PieChart>
              );
            case 'radar-chart':
              return (
                <RadarChart data={rechartsDataRadar}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Watering Flowers"
                    dataKey="A"
                    stroke={secondaryColor}
                    fill={primaryColor}
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              );
            case 'heat-map':
              return <HeatMapTable />;
            default:
              return null;
          }
        })()}
      </ResponsiveContainer>
    </GridWidgetCard>
  );
};
