import React, { FunctionComponent, useState } from 'react';
import './ChartDetailNavbar.scss';
import { RemoveButton, EditButton, DownloadButton, Input, CancelButton, SaveButton } from '../ui';

interface IChartDetailNavbarProps {
  chartTitle?: string;
  onClickRemoveButton?: () => void;
  onClickSaveButton?: (chartName: string) => void;
  onClickDownloadButton?: () => void;
  onClickDeleteButton?: () => void;
}

export const ChartDetailNavbar: FunctionComponent<IChartDetailNavbarProps> = ({
  chartTitle = '',
  onClickSaveButton,
  onClickDeleteButton
}) => {
  const [chartName, setChartName] = useState<string>(chartTitle);
  const [editModeActive, setEditModeActive] = useState(false);

  const toggleEditMode = () => {
    setEditModeActive(prevEditModeActive => !prevEditModeActive);
  };

  const onChangeChartName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setChartName(newValue);
  };

  const onClickSave = () => {
    if (onClickSaveButton) {
      setEditModeActive(false);
      onClickSaveButton(chartName);
    }
  };

  return (
    <div className="b-chart-detail-navbar">
      <div className="b-chart-detail-navbar-title">
        {editModeActive ? (
          <Input
            placeholder="Chart Name"
            name="chartName"
            className="b-chart-detail-navbar-chart-name-input"
            marginBottom="none"
            value={chartName}
            onChange={onChangeChartName}
          />
        ) : (
          chartName
        )}
      </div>

      <div className="b-chart-detail-navbar-actions">
        {editModeActive ? (
          <>
            <CancelButton onClick={toggleEditMode} />
            <SaveButton onClick={onClickSave} />
          </>
        ) : (
          <EditButton onClick={toggleEditMode} />
        )}
        <RemoveButton onClick={onClickDeleteButton} />
        <DownloadButton onClick={() => alert('ok')} />
      </div>
    </div>
  );
};
