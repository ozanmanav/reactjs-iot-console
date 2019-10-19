import React, { FunctionComponent } from 'react';
import './DashboardNavbar.scss';
import { Select, Button, AddButton, RemoveButton } from '../ui';

interface IDashboardControlBarProps {}

const dashboardLayoutOptions = [
  {
    label: 'Dashboard 1',
    value: 'dashboard1'
  },
  {
    label: 'Dashboard 2',
    value: 'dashboard2'
  },
  {
    label: 'Dashboard 3',
    value: 'dashboard3'
  }
];

const dashboardLayouts = [
  {
    dashboardId: '1',
    widgets: [
      {
        widgetId: '1_1',
        widgetName: 'widget1'
      },
      {
        widgetId: '1_2',
        widgetName: 'widget2'
      },
      {
        widgetId: '1_3',
        widgetName: 'widget3'
      },
      {
        widgetId: '1_4',
        widgetName: 'widget4'
      }
    ]
  },
  {
    dashboardId: '2',
    widgets: [
      {
        widgetId: '2_1',
        widgetName: 'widget34'
      },
      {
        widgetId: '2_2',
        widgetName: 'widget45'
      },
      {
        widgetId: '2_3',
        widgetName: 'widget64'
      },
      {
        widgetId: '2_4',
        widgetName: 'widget43'
      }
    ]
  }
];

export const DashboardNavbar: FunctionComponent<IDashboardControlBarProps> = () => {
  return (
    <div className="b-dashboard-navbar">
      <div className="b-dashboard-navbar-dropdown">
        <Select
          options={dashboardLayoutOptions}
          selectHeight="20px"
          value={dashboardLayoutOptions.find(item => item.value === 'dashboard2')}
        />
      </div>

      <div className="b-dashboard-navbar__spacer" />
      <div className="b-dashboard-navbar-buttons ml-2">
        <AddButton text="New Dashboard" />
        <RemoveButton onClick={() => alert('ok')} />
      </div>
    </div>
  );
};
