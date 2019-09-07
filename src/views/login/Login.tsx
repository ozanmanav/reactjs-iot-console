import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { userLogin } from '../../store/auth/actions';
import { LoginForm } from '../../components/forms';
import './Login.scss';
import { COPYRIGHT_TEXT } from '../config';
import { AuthState } from '../../store/auth/types';

interface LoginBaseProps {
    userLogin: typeof userLogin;
    auth: AuthState;
}

const LoginBase: FunctionComponent<LoginBaseProps> = ({ userLogin, auth }) => {
    return (
        <main className="b-login flex flex-column align-center justify-center">
            <LoginForm
                loading={auth.loading && auth.loading.login}
                onSubmit={({ email, password }) => userLogin({ email, password })}
                initialValues={{ email: 'beray@feynlab.io', password: '123456' }}
            />
            <p className="b-login__copyright _text-grey h6">{COPYRIGHT_TEXT}</p>
        </main>
    );
};

const mapStateToProps = (state: AppState) => ({
    auth: state.auth,
});

export const Login = connect(
    mapStateToProps,
    { userLogin }
)(LoginBase);
