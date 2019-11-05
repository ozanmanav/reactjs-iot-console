import React, { FunctionComponent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './ConnectionDetails.scss';
import { Select, Icon } from '../../ui';

const options = [
  {
    label: 'Connection Parameters',
    value: 'connectionParameters'
  }
];

const codeString = `
username = doadmin 
password = blablabla
host = http://qubitro.com/app/projects/d01eade7-4514-
4e6b-aba2-ada319031837/devices/45388e0f-26bc-4873-ace7-78d12862a0f1
port = 1231
database = defaultdb
sslmode = require`;

export const ConnectionDetails: FunctionComponent = () => {
  return (
    <div className="c-connection-details">
      <div className="c-connection-details__title">CONNECTION DETAILS</div>
      <div className="c-connection-details__info">Run the following code to start sending data.</div>
      <div className="c-connection-details__dropdown">
        <Select options={options} value={options[0]} />
      </div>
      <div className="c-connection-details__code">
        <SyntaxHighlighter language="markdown" style={docco}>
          {codeString}
        </SyntaxHighlighter>
        <div className="c-connection-details__code-copy">
          <Icon
            icon="copy"
            className="c-connection-details__code-copy-icon"
            onClick={() => console.log('ok')}
            alt="Copy to Clipboard"
          />
        </div>
      </div>
      <div className="c-connection-details__info">
        Visit{' '}
        <a href="https://docs.qubitro.com/" target="_blank">
          docs.qubitro.com
        </a>{' '}
        for further info.
      </div>
    </div>
  );
};
