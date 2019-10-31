import { IDashboardLayout } from '../../store/ui/types';
import { ISelectOption } from '../ui';

export function normalizeDashboardLayoutsOptions(dashboardLayouts: IDashboardLayout[]): ISelectOption[] {
  return dashboardLayouts.map(({ id, title }: IDashboardLayout) => ({
    label: title,
    value: id
  }));
}

export function normalizeDashboardLayoutsOption(selectedDashboardLayout: IDashboardLayout): ISelectOption {
  return {
    label: selectedDashboardLayout.title,
    value: selectedDashboardLayout.id
  };
}
