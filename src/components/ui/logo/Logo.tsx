import React, { ImgHTMLAttributes, FunctionComponent } from 'react';
import LOGO from './qubitro_svg.svg';

export const Logo: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = props => {
  return <img src={LOGO} alt="qubitro logo" {...props} />;
};
