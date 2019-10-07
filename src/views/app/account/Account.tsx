import React, { FunctionComponent, useEffect } from 'react';
import './Account.scss';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { getUserProfile } from '../../../store/user/actions';
import { Loading } from '../../../components/ui/loading';
import { AccountInfo } from './AccountInfo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Profile } from './Profile/Profile';
import { UserState } from '../../../store/user/types';

interface AccountBaseProps extends RouteComponentProps {
  getUserProfile?: typeof getUserProfile;
  user: UserState;
}

const AccountBase: FunctionComponent<AccountBaseProps> = ({ getUserProfile, user }) => {
  useEffect(() => {
    if (getUserProfile) {
      getUserProfile();
    }
  }, [getUserProfile]);

  if (user.loading && user.loading.currentUser) {
    return <Loading loading={user.loading.currentUser} />;
  }

  return user.currentUser ? (
    <div className="b-account">
      <div className="b-account__breadcrumb-wrapper">
        <div className="b-account__breadcrumb-wrapper__present"></div>
      </div>
      <AccountInfo user={user.currentUser} />
      <Tabs className="b-account__tabs">
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Billing</Tab>
          <Tab>Security</Tab>
          <Tab>Referrals</Tab>
        </TabList>
        <TabPanel>
          <Profile />
        </TabPanel>
        <TabPanel>Billing</TabPanel>
        <TabPanel>Security</TabPanel>
        <TabPanel>Referrals</TabPanel>
      </Tabs>
    </div>
  ) : null;
};

const mapStateToProps = (state: AppState): any => ({
  user: state.user
});

export const Account = connect(
  mapStateToProps,
  { getUserProfile }
)(AccountBase);
