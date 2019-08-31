import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import './Buttons.scss';
import { Icon, TIconType } from '../';
import { Link, LinkProps } from 'react-router-dom';
import { getButtonClassName } from './utils';
import { appendClassName } from '../../../utils';

interface IButtonBaseProps {
    text: string;
    primary?: boolean;
    big?: boolean;
    icon?: TIconType;
    remove?: boolean;
}

interface IButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IButtonProps extends IButtonAttributes, IButtonBaseProps {}

interface IButtonLinkProps extends LinkProps, IButtonBaseProps {}

export const ButtonLink: FunctionComponent<IButtonLinkProps> = ({ text, className, icon, primary, big, ...props }) => {
    const buttonClassName = getButtonClassName({ primary, big, className });

    return (
        <Link {...props} className={buttonClassName}>
            {icon && <Icon icon={icon} className="button__icon" />}
            {text}
        </Link>
    );
};

export const Button: FunctionComponent<IButtonProps> = ({ text, primary, className, big, icon, remove, type = 'button', ...props }) => {
    const buttonClassName = getButtonClassName({ primary, big, className, remove });

    return (
        <button {...props} type={type} className={buttonClassName}>
            {icon && <Icon icon={icon} className="button__icon" />}
            {text}
        </button>
    );
};

export const GithubButton: FunctionComponent<IButtonProps> = ({ className, text = 'Continue With Github', primary = true, ...props }) => {
    const buttonClassName = appendClassName('_github', className);

    return (
        <div className="github-container">
            <span />
            <div className="github-container-vertical" />
            <Button text={text} className={buttonClassName} {...props} />
        </div>
    );
};

export const GoogleButton: FunctionComponent<IButtonProps> = ({ className, text = 'Continue With Google', primary = true, ...props }) => {
    const buttonClassName = appendClassName('_google', className);

    return (
        <div className="google-container">
            <span />
            <div className="google-container-vertical" />
            <Button text={text} className={buttonClassName} {...props} />
        </div>
    );
};
