import React, { FunctionComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import rechartsDataLine from './rechartsData.json';
import rechartsDataBar from './rechartsDataBar.json';
import rechartsDataArea from './rechartsDataArea.json';
import rechartsDataScatter from './rechartsDataScatter.json';
import rechartsDataPie from './rechartsDataPie.json';
import rechartsDataRadar from './rechartsDataRadar.json';
import GridLayout from 'react-grid-layout';
import './Dashboard.scss';
import { useLocalStorage } from '../../../hooks';

const defaultLayout = [
  { i: 'a', x: 0, y: 0, w: 4, h: 6 },
  { i: 'b', x: 4, y: 0, w: 4, h: 6 },
  { i: 'c', x: 8, y: 0, w: 4, h: 6 },
  { i: 'd', x: 0, y: 8, w: 4, h: 6 },
  { i: 'e', x: 4, y: 8, w: 4, h: 6 },
  { i: 'f', x: 8, y: 8, w: 4, h: 6 }
];

const primaryColor = '#F68A4D';
const secondaryColor = '#4A4A4A';

export const Dashboard: FunctionComponent = () => {
  const [savedLayout, saveLayout] = useLocalStorage('savedLayout', defaultLayout);

  const onChangeLayout = (layout: GridLayout.Layout[]) => {
    saveLayout(layout);
  };

  return (
    <>
      <GridLayout
        className="layout"
        layout={savedLayout}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={onChangeLayout}
      >
        <div key="a">
          <ResponsiveContainer width="99%">
            <LineChart data={rechartsDataLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke={primaryColor} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke={secondaryColor} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div key="b">
          <ResponsiveContainer width="99%">
            <BarChart data={rechartsDataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill={primaryColor} />
              <Bar dataKey="uv" fill={secondaryColor} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div key="c">
          <ResponsiveContainer width="99%">
            <AreaChart data={rechartsDataArea}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="Temp" fill={primaryColor} stroke={secondaryColor} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div key="d">
          <ResponsiveContainer width="99%">
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="Amper" unit="Amp" />
              <YAxis type="number" dataKey="y" name="Temprature" unit="Temp" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="A school" data={rechartsDataScatter} fill={primaryColor} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div key="e">
          <ResponsiveContainer width="99%">
            <PieChart>
              <Pie dataKey="value" isAnimationActive={false} data={rechartsDataPie} fill={primaryColor} label />

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div key="f">
          <ResponsiveContainer width="99%">
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
          </ResponsiveContainer>
        </div>
      </GridLayout>
    </>
  );
};
