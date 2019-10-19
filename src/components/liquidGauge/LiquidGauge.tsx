import React, { FunctionComponent } from 'react';
import LiquidFillGauge from 'react-liquid-gauge';
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import './LiquidGauge.scss';

interface ILiquidGaugeProps {
  value?: number;
}

export const LiquidGauge: FunctionComponent<ILiquidGaugeProps> = ({ value = 0 }) => {
  const startColor = '#f68a4d'; // cornflowerblue
  const endColor = '#f68a4d'; // crimson
  const radius = 200;
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(value / 100);
  const stopColor = color(fillColor);

  const gradientStops = [
    {
      key: '0%',
      stopColor,
      stopOpacity: 1,
      offset: '0%'
    },
    {
      key: '50%',
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: '50%'
    },
    {
      key: '100%',
      stopColor: color(fillColor),
      stopOpacity: 0.5,
      offset: '100%'
    }
  ];
  return (
    <div className="b-liquid-gauge">
      <LiquidFillGauge
        style={{ margin: '0 auto' }}
        width={radius - 40}
        height={radius - 40}
        value={value}
        percent="%"
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={(props: any) => {
          const value = Math.round(props.value);
          const radius = Math.min(props.height / 2, props.width / 2);
          const textPixels = (props.textSize * radius) / 2;
          const valueStyle = {
            fontSize: textPixels
          };
          const percentStyle = {
            fontSize: textPixels * 0.6
          };

          return (
            <tspan>
              <tspan className="value" style={valueStyle}>
                {value}
              </tspan>
              <tspan style={percentStyle}>{props.percent}</tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={2}
        waveAmplitude={1}
        gradient
        gradientStops={gradientStops}
        circleStyle={{
          fill: fillColor
        }}
        waveStyle={{
          fill: fillColor
        }}
        textStyle={{
          fill: color('#444'),
          fontFamily: 'Arial'
        }}
        waveTextStyle={{
          fill: color('#fff'),
          fontFamily: 'Arial'
        }}
        onClick={() => {
          console.log('ok');
        }}
      />
    </div>
  );
};
