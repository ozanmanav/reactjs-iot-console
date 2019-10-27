import React, { FunctionComponent, useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import './Dashboard.scss';
import { useDimensions, useLocalStorage } from '../../../hooks';
import { DashboardNavbar } from '../../../components/dashboardNavbar';
import { AppState } from '../../../store/index.js';
import { getDashboardLayouts, createDashboardLayout } from '../../../store/ui/actions';
import { connect } from 'react-redux';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { IDashboardLayout, IWidget } from '../../../store/ui/types';
import { Widget } from '../../../components/widget';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const dashboard: IDashboardLayout = {
  id: 'dashboard_1',
  title: 'Dashboard Title',
  widgets: [
    {
      name: 'Environmental Sensor Humidity',
      type: 'liquid-gauge',
      i: 'widget1',
      x: 0,
      y: 0,
      w: 3,
      h: 2
    },
    {
      name: 'Population Density Map',
      type: 'heat-map',
      i: 'widget2',
      x: 3,
      y: 0,
      w: 6,
      h: 2
    },
    {
      name: 'Water Level',
      type: 'liquid-gauge',
      i: 'widget3',
      x: 9,
      y: 0,
      w: 3,
      h: 2
    },
    {
      name: 'PV/UV Weekdays Line Widget',
      type: 'line-chart',
      i: 'widget4',
      x: 0,
      y: 2,
      w: 3,
      h: 2
    },
    {
      name: 'PV/UV Weekdays Bar Widget',
      type: 'bar-chart',
      i: 'widget5',
      x: 3,
      y: 2,
      w: 3,
      h: 2
    },
    {
      name: 'PV/UV Weekdays Area Widget',
      type: 'area-chart',
      i: 'widget6',
      x: 6,
      y: 2,
      w: 3,
      h: 2
    },
    {
      name: 'PV/UV Weekdays Scatter Widget',
      type: 'scatter-chart',
      i: 'widget7',
      x: 9,
      y: 2,
      w: 3,
      h: 2
    },
    {
      name: 'Work Counts Pie Widget',
      type: 'pie-chart',
      i: 'widget8',
      x: 0,
      y: 4,
      w: 4,
      h: 3
    },
    {
      name: 'Watering Flowers by Day',
      type: 'radar-chart',
      i: 'widget9',
      x: 4,
      y: 4,
      w: 4,
      h: 3
    }
  ]
};

interface DashboardBaseProps {}

const DashboardBase: FunctionComponent<DashboardBaseProps> = () => {
  const [widgets, setWidgets] = useLocalStorage('widgets', dashboard.widgets);
  const [gridWidth, setGridWidth] = useState<number>(1200);
  const [ref, dimensions] = useDimensions();

  useEffect(() => {
    if (getDashboardLayouts) {
      getDashboardLayouts();
    }
  }, [getDashboardLayouts]);

  useEffect(() => {
    if (dimensions && dimensions.width && !isNaN(dimensions.width)) {
      setGridWidth(dimensions.width);
    }
  }, [dimensions]);

  // We're using the cols coming back from this to calculate where to add new items.
  const onBreakpointChange = (newBreakpoint: string, newCols: number) => {
    // console.log('newBreakpoint', newBreakpoint);
    // console.log('newCols', newCols);
  };

  const onLayoutChange = (currentLayout: GridLayout.Layout[], allLayouts: GridLayout.Layouts) => {
    console.log('currentLayout', currentLayout);

    const updatedWidgets = widgets.map((widget: IWidget) => {
      const { i, x, y, w, h }: GridLayout.Layout = currentLayout.find(item => item.i === widget.i) || widget;

      return { name: widget.name, type: widget.type, i, x, y, w, h };
    });

    console.log('updateLayout', updatedWidgets);

    setWidgets(updatedWidgets);
  };

  return (
    <div className="b-dashboard" ref={ref}>
      <DashboardNavbar onSubmitAddNewDashboard={createDashboardLayout} />
      <ResponsiveReactGridLayout
        width={gridWidth || 1200}
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={100}
      >
        {widgets.map((widget: IWidget) => (
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
