import React, { ImgHTMLAttributes, FunctionComponent } from 'react';
import logo from './logo.svg';

export const Logo: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = props => {
    return <img src={logo} alt="feynlab logo" {...props} />;
};
