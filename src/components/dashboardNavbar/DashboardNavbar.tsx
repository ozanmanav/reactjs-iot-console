import React, { FunctionComponent } from 'react';
import './DashboardNavbar.scss';
import { Select, AddButton, RemoveButton, useModal } from '../ui';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { IDashboardLayout } from '../../store/ui/types';
import { normalizeDashboardLayoutsOptions, normalizeDashboardLayoutsOption } from './utils';
import { AddNewDashboardModal, IAddNewDashboardModalState } from '../modals';

interface IDashboardControlBarProps {
  dashboardLayouts?: IDashboardLayout[];
  selectedDashboardLayout?: IDashboardLayout;
  onSubmitAddNewDashboard: (values: IAddNewDashboardModalState) => void;
}

export const DashboardNavbarBase: FunctionComponent<IDashboardControlBarProps> = ({
  dashboardLayouts,
  selectedDashboardLayout,
  onSubmitAddNewDashboard
}) => {
  const { open: openNewDashboardModal, hide: hideNewDashboardModal, isOpen: isOpenNewDashboardModal } = useModal();
  return (
    <div className="b-dashboard-navbar">
      <div className="b-dashboard-navbar-header">
        <div className="b-dashboard-navbar-header-title">
          {selectedDashboardLayout && selectedDashboardLayout.title}
        </div>
        <div className="b-dashboard-navbar-header__spacer" />
        <div className="b-dashboard-navbar-header-dropdown">
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
        </div>{' '}
      </div>

      <div className="b-dashboard-navbar-actions">
        <div className="flex">
          <AddButton text="New Dashboard" onClick={openNewDashboardModal} />
          <AddButton text="Add Widget" />
        </div>

        <div>
          <RemoveButton onClick={() => alert('ok')} />
        </div>
      </div>
      <AddNewDashboardModal
        hide={hideNewDashboardModal}
        isOpen={isOpenNewDashboardModal}
        onSubmitSuccess={onSubmitAddNewDashboard}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState): any => ({
  dashboardLayouts: state.ui.dashboardLayouts,
  selectedDashboardLayout: state.ui.selectedDashboardLayout
});

export const DashboardNavbar = connect(mapStateToProps)(DashboardNavbarBase);
