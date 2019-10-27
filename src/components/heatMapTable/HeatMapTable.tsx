import React, { FunctionComponent } from 'react';
import ReactApexChart from 'react-apexcharts';
import './HeatMapTable.scss';
import { colors, data } from './utils';

const options = {
  dataLabels: {
    enabled: false
  },
  chart: {
    toolbar: {
      show: false
    }
  },
  colors,
  xaxis: {
    type: 'category',
    categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
  },

  grid: {
    padding: {
      left: 0,
      right: 0
    }
  }
};

export const HeatMapTable: FunctionComponent = () => {
  return (
    <div className="b-heat-map-table">
      <ReactApexChart options={options} series={data} type="heatmap" height="200" width="100%" />
    </div>
  );
};
