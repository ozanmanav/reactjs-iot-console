import { IDashboardLayout } from '../../../store/ui/types';

export const sampleDashboard: IDashboardLayout = {
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
