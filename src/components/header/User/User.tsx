import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { User } from 'firebase';
import { AppState } from '../../../store';
import { Icon, useModal } from '../../ui';
import { userLogout } from '../../../store/auth/actions';
import './User.scss';
import 'react-dropdown/style.css';
import { ConfirmModal } from '../../modals';

interface UserNavProps {
    user?: User;
    userLogout: () => void;
}
export const UserNavBase: FunctionComponent<UserNavProps> = ({ user, userLogout }) => {
    const { open, hide, isOpen } = useModal();
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
            <Icon icon="logout" width={20} onClick={open} className="_cursor-pointer" />
            <ConfirmModal title="Are you sure log out?" onConfirm={userLogout} hide={hide} isOpen={isOpen} />
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
