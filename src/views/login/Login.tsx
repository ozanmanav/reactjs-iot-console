import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { userLogin } from '../../store/auth/actions';
import { LoginHeader } from '../../components/header';
import { LoginForm } from '../../components/forms';
import './Login.scss';
import { COPYRIGHT_TEXT } from '../config';

interface AppProps {
    userLogin: typeof userLogin;
}

const Login: FunctionComponent<AppProps> = ({ userLogin }) => {
    useEffect(() => {
        userLogin({ email: 'ozan387@gmail.com', password: '123' });
    }, [userLogin]);

    return (
        <>
            <LoginHeader />
            <main className="b-login flex flex-column align-center justify-center">
                <LoginForm onSubmit={() => console.log('ok')} />
                <p className="b-login__copyright _text-grey h6">{COPYRIGHT_TEXT}</p>
            </main>
        </>
    );
};

const mapStateToProps = (state: AppState) => ({
    auth: state.auth,
});

export const LoginWithRedux = connect(
    mapStateToProps,
    { userLogin }
)(Login);
