import React, { FunctionComponent } from 'react';
import './Signup.scss';
import { COPYRIGHT_TEXT } from '../config';
import { SignUpForm } from '../../components/forms/SignUpForm';
import { AppState } from '../../store';
import { userRegister } from '../../store/auth/actions';
import { connect } from 'react-redux';
import { AuthState } from '../../store/auth/types';

interface SignupBaseProps {
  userRegister: typeof userRegister;
  auth: AuthState;
}

export const SignupBase: FunctionComponent<SignupBaseProps> = ({ userRegister }) => {
  return (
    <>
      <main className="b-login flex flex-column align-center justify-center">
        <SignUpForm onSubmit={({ email, password }) => userRegister({ email, password })} />
        <p className="b-login__copyright _text-grey h6">{COPYRIGHT_TEXT}</p>
      </main>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  auth: state.auth
});

export const Signup = connect(
  mapStateToProps,
  { userRegister }
)(SignupBase);
