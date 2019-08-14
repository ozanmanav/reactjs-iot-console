import React, { useState } from 'react';
import * as classnames from 'classnames';
import Avatar from 'react-avatar';
import styles from './Profile.scss';
import FloatingLabelField from '../../presentational/FloatingLabelInput/FloatingLabelField';
import OrangeButton from '../../presentational/Buttons/OrangeButton';

const Profile = () => {
    const [state, setState] = useState({ email: 'ozan@email.com', timezone: 'Europe/Istanbul' });

    const handleInputChange = (e, name) => {
        const { value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <React.Fragment>
            <div className={classnames('row', styles.tab)} >
                <Avatar
                    name="Ozan Manav"
                    size="100"
                    round="100px"
                />
                <div className={classnames('col-4', styles.container)}>
                    <div className={classnames('row', styles.name)}>
                        Ozan Manav
            </div>
                    <div className={classnames(styles['input-container'])}>
                        <FloatingLabelField
                            label={'E-mail'}
                            name="email"
                            onChange={(e) => handleInputChange(e, 'email')}
                            value={state.email}
                            id={'email'}
                            type={'email'}
                        />
                    </div>
                    <div className={classnames('row', styles.label)}>
                        Account Type
            </div>
                    <div className={classnames('row', styles.value)}>
                        Pro
            </div>
                </div>
            </div>

            <div className={classnames('row', styles.tab)} >
                <div className={classnames(styles['input-block'])}>
                    <div className={classnames(styles['input-container'])}>
                        <FloatingLabelField
                            className={classnames(styles['input-self'])}
                            label={'Time Zone'}
                            name="timezone"
                            onChange={(e) => handleInputChange(e, 'timezone')}
                            value={state.timezone}
                            id={'timezone'}
                            type={'timezone'}
                        />
                    </div>
                    <div className={styles['button-container']}>
                        <OrangeButton>
                            Save
                    </OrangeButton>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Profile;
