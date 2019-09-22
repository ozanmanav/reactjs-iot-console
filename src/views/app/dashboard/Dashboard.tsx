import React, { FunctionComponent } from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 }
];

const cols = {
  sold: { alias: 'sold' },
  genre: { alias: 'genre' }
};

export const Dashboard: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {' '}
          <Chart width={400} height={400} data={data} scale={cols}>
            <Axis name="genre" title />
            <Axis name="sold" title />
            {/* <Legend position="top" dy={-20} /> */}
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
        </div>
        <div className="col-6">
          {' '}
          <Chart width={400} height={400} data={data} scale={cols}>
            <Axis name="genre" title />
            <Axis name="sold" title />
            {/* <Legend position="top" dy={-20} /> */}
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
        </div>
      </div>
    </div>
  );
};
