import React, { FunctionComponent } from 'react';
import { AuthState } from '../../store/auth/types';
import { HeaderLogo, AuthNav } from './Header';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './Header.scss';
import { UserNav } from './User';
import { Loading } from '../ui/loading';

interface LandingHeaderBaseProps {
    auth?: AuthState;
}

const LandingHeaderBase: FunctionComponent<LandingHeaderBaseProps> = ({ auth }) => {
    return (
        <header className={classNames('flex justify-between align-center b-header', { _login: auth && !auth.loggedIn })}>
            <nav className="flex align-center b-header__main-nav">
                <HeaderLogo to="/app/dashboard" />
            </nav>
            <Loading loading={auth && auth.loading && auth.loading.checkUser} />
            {auth && auth.loggedIn ? <UserNav /> : <AuthNav />}
        </header>
    );
};

const mapStateToProps = (state: AppState) => ({
    auth: state.auth,
});

export const LandingHeader = connect(
    mapStateToProps,
    null
)(LandingHeaderBase);
