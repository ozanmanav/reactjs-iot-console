import React, { FunctionComponent } from 'react';
import './Account.scss';
import { IUser } from '../../../store/auth/types';

export const AccountInfo: FunctionComponent<{ user: IUser }> = () => {
  return (
    <div className="b-account__info">
      <div className="b-account__info-container">
        <h1 className="b-account__info-container-title">Account</h1>
        <p className="b-account__info-container-description">Showing account details</p>
      </div>
    </div>
  );
};
