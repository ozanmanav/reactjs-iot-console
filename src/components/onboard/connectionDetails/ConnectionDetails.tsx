import React, { FunctionComponent, useState } from 'react';
import './ConnectionDetails.scss';
import ReactEmbedGist from 'react-embed-gist';
import { Select, Button } from '../../ui';
import { DeviceInfo } from '../../../views/app/device/DeviceInfo';

import { useSelector } from 'react-redux';
import { AppState } from '../../../store';

import { ClipLoader } from 'react-spinners';

const options = [
  {
    label: 'NodeJS',
    value: 'NodeJS'
  },
  {
    label: 'GoLang',
    value: 'GoLang'
  },
  {
    label: 'Python',
    value: 'Python'
  },
  {
    label: 'Connection Parameters',
    value: 'connectionParameters'
  }
];

interface ConnectionDetailsProps {}

export const ConnectionDetails: FunctionComponent<ConnectionDetailsProps> = () => {
  const currentDevice = useSelector((state: AppState) => state.project.currentDevice);
  const [connection, setSelectedConnection] = useState(options[0]);

  return (
    <div className="c-connection-details">
      <div className="c-connection-details__device">
        {currentDevice ? (
          <DeviceInfo device={currentDevice} />
        ) : (
          <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={true} />
        )}
      </div>
      <div className="c-connection-details__info">Choose theb language supported by selected device model</div>
      <div className="c-connection-details__title">Connection Details</div>
      <div className="c-connection-details__info">Run the following code to start sending data.</div>
      <div className="c-connection-details__dropdown">
        <Select options={options} value={connection} onChange={setSelectedConnection} />
      </div>
      <div className="c-connection-details__code">
        <ReactEmbedGist
          gist="Qubitro-Docs/f72bf668c9cf518ff51ad9fdfd74357a"
          wrapperClass="c-connection-details__code-gist__bash"
          titleClass="c-connection-details__code-gist__title"
          contentClass="c-connection-details__code-gist__content"
          errorClass="c-connection-details__code-gist__error"
        />
      </div>
      <div className="c-connection-details__info">
        Visit{' '}
        <a href="https://docs.qubitro.com/" target="_blank">
          docs.qubitro.com
        </a>{' '}
        for further info.
      </div>
      <Button text="Finish" />
    </div>
  );
};
