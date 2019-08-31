import React, { FunctionComponent } from 'react';
import './Signup.scss';
import { COPYRIGHT_TEXT } from '../config';
import { Route, Switch } from 'react-router';

export const Signup: FunctionComponent = () => {
    return (
        <>
            <main className="b-signup flex flex-column align-center justify-center">
                <p className="b-signup__copyright _text-grey h6">{COPYRIGHT_TEXT}</p>
            </main>
        </>
    );
};
