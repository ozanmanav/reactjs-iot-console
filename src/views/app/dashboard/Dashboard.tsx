import React, { FunctionComponent, useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import './Dashboard.scss';
import { useDimensions, useLocalStorage } from '../../../hooks';
import { DashboardNavbar } from '../../../components/dashboardNavbar';
import { AppState } from '../../../store/index.js';
import { getDashboardLayouts, createDashboardLayout } from '../../../store/ui/actions';
import { connect } from 'react-redux';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { IWidget } from '../../../store/ui/types';
import { Widget } from '../../../components/widget';
import { sampleDashboard } from './config';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface DashboardBaseProps {}

const DashboardBase: FunctionComponent<DashboardBaseProps> = () => {
  const [dashboard, setDashboard] = useLocalStorage('dashboard', sampleDashboard);
  const [gridWidth, setGridWidth] = useState<number>(1200);
  const [ref, dimensions] = useDimensions();

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

  const onLayoutChange = (currentLayout: GridLayout.Layout[], allLayouts: GridLayout.Layouts) => {
    console.log('currentLayout', currentLayout);

    const updatedWidgets = dashboard.widgets.map((widget: IWidget) => {
      const { i, x, y, w, h }: GridLayout.Layout = currentLayout.find(item => item.i === widget.i) || widget;

      return { name: widget.name, type: widget.type, i, x, y, w, h };
    });

    console.log('updateLayout', updatedWidgets);

    setDashboard({ ...dashboard, widgets: updatedWidgets });
  };

  return (
    <div className="b-dashboard" ref={ref}>
      <DashboardNavbar onSubmitAddNewDashboard={createDashboardLayout} />
      <ResponsiveReactGridLayout
        width={gridWidth || 1200}
        onLayoutChange={onLayoutChange}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
      >
        {dashboard.widgets.map((widget: IWidget) => (
          <div key={widget.i} data-grid={widget}>
            <Widget widget={widget} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  selectedDashboardLayout: state.ui.selectedDashboardLayout
});

export const Dashboard = connect(
  mapStateToProps,
  { getDashboardLayouts, createDashboardLayout }
)(DashboardBase);
