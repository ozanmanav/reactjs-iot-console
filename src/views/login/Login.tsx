import React, { FunctionComponent, useContext, useState, useEffect } from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { userLogin } from '../../store/auth/actions';

interface AppProps {
    userLogin: typeof userLogin;
}

const Login: FunctionComponent<AppProps> = ({ userLogin }) => {
    useEffect(() => {
        userLogin({ email: 'ozan387@gmail.com', password: '123' });
    }, []);

    return <>login page</>;
};

const mapStateToProps = (state: AppState) => ({
    auth: state.auth,
});

export const LoginWithRedux = connect(
    mapStateToProps,
    { userLogin }
)(Login);
