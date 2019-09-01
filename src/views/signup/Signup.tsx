import React, { FunctionComponent } from 'react';
import './Signup.scss';
import { COPYRIGHT_TEXT } from '../config';
import { SignUpForm } from '../../components/forms/SignUpForm';

export const Signup: FunctionComponent = () => {
    return (
        <>
            <main className="b-login flex flex-column align-center justify-center">
                <SignUpForm onSubmit={() => console.log('ok')} />
                <p className="b-login__copyright _text-grey h6">{COPYRIGHT_TEXT}</p>
            </main>
        </>
    );
};
