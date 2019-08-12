import React from 'react';
import * as classnames from 'classnames';
import Avatar from 'react-avatar';
import styles from './Account.scss';
import './Profile.scss';

const Profile = () => (
    <div className={classnames('row', styles.tab)}>
        <Avatar

            name="Ozan Manav"
            size="100"
            round="100px"
        />
        <div className="col-4" style={{ marginLeft: 30 }}>
            <div className="row profile-name">
                Ozan Manav
            </div>

        </div>

    </div>
);

export default Profile;
