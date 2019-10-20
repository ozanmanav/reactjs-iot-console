import React, { FunctionComponent } from 'react';
import './DashboardNavbar.scss';
import { Select, Button, AddButton, RemoveButton } from '../ui';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { IDashboardLayout } from '../../store/ui/types';
import { normalizeDashboardLayoutsOptions, normalizeDashboardLayoutsOption } from './utils';

interface IDashboardControlBarProps {
  dashboardLayouts?: IDashboardLayout[];
  selectedDashboardLayout?: IDashboardLayout;
}

export const DashboardNavbarBase: FunctionComponent<IDashboardControlBarProps> = ({
  dashboardLayouts,
  selectedDashboardLayout
}) => {
  return (
    <div className="b-dashboard-navbar">
      <div className="b-dashboard-navbar-title">{selectedDashboardLayout && selectedDashboardLayout.title}</div>

      <div className="b-dashboard-navbar__spacer" />
      <div className="b-dashboard-navbar-dropdown">
        {dashboardLayouts && (
          <Select
            options={normalizeDashboardLayoutsOptions(dashboardLayouts)}
            selectHeight="20px"
            value={
              selectedDashboardLayout
                ? normalizeDashboardLayoutsOption(selectedDashboardLayout)
                : normalizeDashboardLayoutsOptions(dashboardLayouts)[0]
            }
          />
        )}
      </div>
      {/* <div className="b-dashboard-navbar-buttons ml-2">
        <AddButton text="New Dashboard" />
        <RemoveButton onClick={() => alert('ok')} />
      </div> */}
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  dashboardLayouts: state.ui.dashboardLayouts,
  selectedDashboardLayout: state.ui.selectedDashboardLayout
});

export const DashboardNavbar = connect(mapStateToProps)(DashboardNavbarBase);
