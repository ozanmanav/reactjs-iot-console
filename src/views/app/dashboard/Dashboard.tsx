import React, { FunctionComponent, useState, useEffect } from 'react';
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
import { useLocalStorage, useDimensions } from '../../../hooks';
import { GridWidgetCard } from '../../../components/ui/cards';
import { DashboardNavbar } from '../../../components/dashboardNavbar';
import { AddButton } from '../../../components/ui';
import { LiquidGauge } from '../../../components/liquidGauge';
import { AppState } from '../../../store/index.js';
import { getDashboardLayouts } from '../../../store/ui/actions';
import { connect } from 'react-redux';
import { IDashboardLayout } from '../../../store/ui/types.js';

const primaryColor = '#F68A4D';
const secondaryColor = '#4A4A4A';

interface DashboardBaseProps {
  getDashboardLayouts: typeof getDashboardLayouts;
  selectedDashboardLayout?: IDashboardLayout;
}

const DashboardBase: FunctionComponent<DashboardBaseProps> = ({ selectedDashboardLayout, getDashboardLayouts }) => {
  const [gridWidth, setGridWidth] = useState<number>(1200);
  const [ref, dimensions] = useDimensions();
  // const [savedLayout, saveLayout] = useLocalStorage('savedLayout', defaultLayout);

  useEffect(() => {
    if (getDashboardLayouts) {
      getDashboardLayouts();
    }
  }, []);

  useEffect(() => {
    if (dimensions && dimensions.width && !isNaN(dimensions.width)) {
      setGridWidth(dimensions.width);
    }
  }, [dimensions]);

  const onChangeLayout = (layout: GridLayout.Layout[]) => {
    // saveLayout(layout);
  };

  return (
    <div className="b-dashboard" ref={ref}>
      <DashboardNavbar />
      {selectedDashboardLayout && (
        <>
          <div className="b-dashboard-header">
            <div className="b-dashboard-header__title">{selectedDashboardLayout.title}</div>
            <AddButton text="Add Widget" />
          </div>

          <GridLayout
            className="b-dashboard-layout"
            layout={selectedDashboardLayout.layout}
            cols={12}
            rowHeight={30}
            width={gridWidth || 1200}
            onLayoutChange={onChangeLayout}
          >
            <div key="l1_1">
              <GridWidgetCard widgetName="Environmental Sensor Humidity">
                <ResponsiveContainer width="99%">
                  <LiquidGauge value={32} />
                </ResponsiveContainer>
              </GridWidgetCard>
            </div>
            <div key="l1_2">
              <GridWidgetCard widgetName="Nano I">
                <ResponsiveContainer width="99%">
                  <LiquidGauge value={37} />
                </ResponsiveContainer>
              </GridWidgetCard>
            </div>
            <div key="l1_3">
              <GridWidgetCard widgetName="Refrigerated Vehicle Battery">
                <ResponsiveContainer width="99%">
                  <LiquidGauge value={86} />
                </ResponsiveContainer>
              </GridWidgetCard>
            </div>
            <div key="l1_4">
              <GridWidgetCard widgetName="Water Level">
                <ResponsiveContainer width="99%">
                  <LiquidGauge value={21} />
                </ResponsiveContainer>
              </GridWidgetCard>
            </div>
            <div key="l2_1">
              <GridWidgetCard widgetName="PV/UV Weekdays Line Widget">
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
              </GridWidgetCard>
            </div>
            <div key="l2_2">
              <GridWidgetCard widgetName="PV/UV Weekdays Bar Widget">
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
              </GridWidgetCard>
            </div>
            <div key="l2_3">
              <GridWidgetCard widgetName="PV/UV Weekdays Area Widget">
                <ResponsiveContainer width="99%">
                  <AreaChart data={rechartsDataArea}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Temp" fill={primaryColor} stroke={secondaryColor} />
                  </AreaChart>
                </ResponsiveContainer>
              </GridWidgetCard>
            </div>
            <div key="l3_1">
              <GridWidgetCard widgetName="PV/UV Weekdays Scatter Widget">
                <ResponsiveContainer width="99%">
                  <ScatterChart>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="Amper" unit="Amp" />
                    <YAxis type="number" dataKey="y" name="Temprature" unit="Temp" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="A school" data={rechartsDataScatter} fill={primaryColor} />
                  </ScatterChart>
                </ResponsiveContainer>
              </GridWidgetCard>
            </div>
            <div key="l3_2">
              <GridWidgetCard widgetName="Work Counts Pie Widget">
                <ResponsiveContainer width="99%">
                  <PieChart>
                    <Pie dataKey="value" isAnimationActive={false} data={rechartsDataPie} fill={primaryColor} label />

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </GridWidgetCard>
            </div>
            <div key="l3_3">
              <GridWidgetCard widgetName="Watering Flowers by Day">
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
              </GridWidgetCard>
            </div>
          </GridLayout>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  selectedDashboardLayout: state.ui.selectedDashboardLayout
});

export const Dashboard = connect(
  mapStateToProps,
  { getDashboardLayouts }
)(DashboardBase);
