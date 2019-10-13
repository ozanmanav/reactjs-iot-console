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
  ResponsiveContainer
} from 'recharts';
import rechartsDataLine from './rechartsData.json';
import rechartsDataBar from './rechartsDataBar.json';
import rechartsDataArea from './rechartsDataArea.json';
import rechartsDataScatter from './rechartsDataScatter.json';
import GridLayout from 'react-grid-layout';
import './Dashboard.scss';
import { useLocalStorage } from '../../../hooks';

const defaultLayout = [
  { i: 'a', x: 0, y: 0, w: 4, h: 6 },
  { i: 'b', x: 4, y: 0, w: 4, h: 6 },
  { i: 'c', x: 8, y: 0, w: 4, h: 6 },
  { i: 'd', x: 0, y: 8, w: 4, h: 6 }
];

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
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
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
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div key="d">
          <ResponsiveContainer width="99%">
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="stature" unit="cm" />
              <YAxis type="number" dataKey="y" name="weight" unit="kg" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="A school" data={rechartsDataScatter} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </GridLayout>
    </>
  );
};
