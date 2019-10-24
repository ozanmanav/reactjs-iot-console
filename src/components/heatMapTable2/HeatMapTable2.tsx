import React, { FunctionComponent, useState } from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, HeatmapSeries } from 'react-vis';
import './HeatMapTable2.scss';

export const HeatMapTable2: FunctionComponent = () => {
  const generateColorRandom = () => {
    return Math.floor(Math.random() * 11);
  };
  const myData = [
    { x: 1, y: 0, color: generateColorRandom() },
    { x: 1, y: 5, color: generateColorRandom() },
    { x: 1, y: 10, color: generateColorRandom() },
    { x: 1, y: 15, color: generateColorRandom() },
    { x: 1, y: 20, color: generateColorRandom() },
    { x: 2, y: 0, color: generateColorRandom() },
    { x: 2, y: 5, color: generateColorRandom() },
    { x: 2, y: 10, color: Math.floor(Math.random() * 11) },
    { x: 2, y: 15, color: Math.floor(Math.random() * 11) },
    { x: 2, y: 20, color: Math.floor(Math.random() * 11) },
    { x: 3, y: 0, color: Math.floor(Math.random() * 11) },
    { x: 3, y: 5, color: Math.floor(Math.random() * 11) },
    { x: 3, y: 10, color: Math.floor(Math.random() * 11) },
    { x: 3, y: 15, color: Math.floor(Math.random() * 11) },
    { x: 3, y: 20, color: Math.floor(Math.random() * 11) },
    { x: 4, y: 0, color: Math.floor(Math.random() * 11) },
    { x: 4, y: 5, color: Math.floor(Math.random() * 11) },
    { x: 4, y: 10, color: Math.floor(Math.random() * 11) },
    { x: 4, y: 15, color: Math.floor(Math.random() * 11) },
    { x: 4, y: 20, color: Math.floor(Math.random() * 11) },
    { x: 5, y: 0, color: Math.floor(Math.random() * 11) },
    { x: 5, y: 5, color: Math.floor(Math.random() * 11) },
    { x: 5, y: 10, color: Math.floor(Math.random() * 11) },
    { x: 5, y: 15, color: Math.floor(Math.random() * 11) },
    { x: 5, y: 20, color: Math.floor(Math.random() * 11) }
  ];
  return (
    <div className="b-heat-map-table2">
      <XYPlot width={335} height={200}>
        <XAxis />
        <YAxis />
        <HeatmapSeries colorRange={['white', 'orange']} className="heatmap-series-example" data={myData} />
      </XYPlot>
    </div>
  );
};
