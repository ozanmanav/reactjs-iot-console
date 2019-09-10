import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { User } from 'firebase';
import { AppState } from '../../../store';
import { Button } from '../../ui';
import { userLogout } from '../../../store/auth/actions';
import './User.scss';
import 'react-dropdown/style.css';

interface UserNavProps {
    user?: User;
    userLogout?: () => void;
}

export const UserNavBase: FunctionComponent<UserNavProps> = ({ user, userLogout }) => {
    return (
        <nav className="b-header-user flex">
            <div className="b-header-user__info-wrapper">
                <button className="flex align-center b-header-user__company-button">
                    <div className="b-header-user__company flex align-center justify-center _font-bold _text-primary">O</div>
                    <div className="flex flex-column b-header-user__info">
                        <div className=" _text-left _font-bold">{user && user.email}</div>
                    </div>
                </button>
            </div>
            <Button text="Logout" className="b-header-user__logout" onClick={userLogout} />
        </nav>
    );
};

const mapStateToProps = (state: AppState) => ({
    user: state.auth.user,
});

export const UserNav = connect(
    mapStateToProps,
    { userLogout }
)(UserNavBase);
