import React, { FunctionComponent, useState, useEffect } from 'react';
import './ConnectionDetails.scss';
import ReactEmbedGist from 'react-embed-gist';
import { Select, Button } from '../../ui';
import { DeviceInfo } from '../../../views/app/device/DeviceInfo';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { IDevice } from '../../../store/project/types';
import get from 'lodash.get';
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';
import { normalizeGistOptions, ISelectGistOption } from './utils';

interface ConnectionDetailsProps {
  onClickFinish?: () => void;
}

export const ConnectionDetails: FunctionComponent<ConnectionDetailsProps> = ({ onClickFinish }) => {
  const currentDevice = useSelector((state: AppState) => state.project.currentDevice) as IDevice;
  const deviceModels = useSelector((state: AppState) => state.project.deviceModels);
  const [gistOptions, setGistOptions] = useState<ISelectGistOption[]>([]);
  const [selectedConnection, setSelectedConnection] = useState<ISelectGistOption>();

  useEffect(() => {
    try {
      const deviceModelId = get(currentDevice, 'deviceModelId');

      if (!isEmpty(deviceModels) || !isNil(deviceModels)) {
        const deviceModel = deviceModels.find((item: any) => item.id === deviceModelId);
        const deviceGistOptions = get(deviceModel, 'gist_options') || [];

        setGistOptions(normalizeGistOptions(deviceGistOptions));
      }
    } catch (error) {
      console.error(error);
    }
  }, [currentDevice]);

  return (
    <div className="c-connection-details">
      <div className="flex justify-between align-start">
        <div>
          <div className="c-connection-details__title">Connection Details</div>
          <div className="c-connection-details__info">Run the following code to start sending data.</div>
          <div className="c-connection-details__dropdown">
            <Select
              options={gistOptions}
              value={selectedConnection}
              onChange={setSelectedConnection}
              menuPlacement="top"
              placeholder="Choose the language"
            />
          </div>
        </div>
        <DeviceInfo device={currentDevice} loading={!currentDevice} />
      </div>
      <div className="c-connection-details__code">
        {selectedConnection && (
          <ReactEmbedGist
            gist={get(selectedConnection, 'url')}
            wrapperClass="c-connection-details__code-gist__bash"
            titleClass="c-connection-details__code-gist__title"
            contentClass="c-connection-details__code-gist__content"
            loadingClass="c-connection-details__code-gist__loading"
            errorClass="c-connection-details__code-gist__error"
          />
        )}
      </div>

      <div className="flex justify-between">
        <div className="c-connection-details__info">
          Visit{' '}
          <a href="https://docs.qubitro.com/" target="_blank">
            docs.qubitro.com
          </a>{' '}
          for further info.
        </div>

        <Button text="Finish" className="c-onboard-prev" onClick={onClickFinish} primary />
      </div>
    </div>
  );
};
