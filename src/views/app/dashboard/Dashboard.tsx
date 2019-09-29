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
  Area
} from 'recharts';
import rechartsDataLine from './rechartsData.json';
import rechartsDataBar from './rechartsDataBar.json';
import rechartsDataArea from './rechartsDataArea.json';
import rechartsDataScatter from './rechartsDataScatter.json';
import './Dashboard.scss';

export const Dashboard: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">
          {' '}
          <LineChart
            width={500}
            height={300}
            data={rechartsDataLine}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="col-6">
          <BarChart
            width={500}
            height={300}
            data={rechartsDataBar}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          {' '}
          <ScatterChart
            width={500}
            height={300}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={rechartsDataScatter} fill="#8884d8" />
          </ScatterChart>
        </div>
        <div className="col-6">
          {' '}
          <AreaChart
            width={500}
            height={300}
            data={rechartsDataArea}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};
