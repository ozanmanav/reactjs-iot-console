import React from 'react';
import { BarLoader } from 'react-spinners';
import { css } from '@emotion/core';
import styles from './InfoLoading.scss';

const override = css`
  margin-bottom: 5px;
`;

const InfoLoading = () => (
  <div className={styles.container}>
    <BarLoader
      color={'#ececec'}
      width={80}
      height={80}
    />
    <div className={styles.block}>
      <BarLoader
        color={'#ececec'}
        width={300}
        height={30}
        css={override}
      />
      <BarLoader
        color={'#ececec'}
        width={300}
        height={20}
        css={override}
      />
      <BarLoader
        color={'#ececec'}
        width={300}
        height={15}
        css={override}
      />
    </div>
  </div>
);

export default InfoLoading;
