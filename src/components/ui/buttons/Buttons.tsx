import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import './Buttons.scss';
import { Icon, TIconType } from '../';
import { Link, LinkProps } from 'react-router-dom';
import { getButtonClassName } from './utils';
import { appendClassName } from '../../../utils';
import { ClipLoader } from 'react-spinners';

interface IButtonBaseProps {
  text?: string;
  primary?: boolean;
  big?: boolean;
  icon?: TIconType;
  remove?: boolean;
}

interface IButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IButtonProps extends IButtonAttributes, IButtonBaseProps {
  loading?: boolean;
}

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

export const Button: FunctionComponent<IButtonProps> = ({
  text,
  primary,
  className,
  big,
  icon,
  remove,
  loading,
  type = 'button',
  ...props
}) => {
  const buttonClassName = getButtonClassName({
    primary,
    big,
    className,
    remove
  });

  return loading ? (
    <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} />
  ) : (
    <button {...props} type={type} className={buttonClassName}>
      {icon && <Icon icon={icon} className="button__icon" />}
      {text}
    </button>
  );
};

export const GithubButton: FunctionComponent<IButtonProps> = ({
  className,
  text = 'Continue With Github',
  primary = true,
  ...props
}) => {
  const buttonClassName = appendClassName('_github', className);

  return (
    <div className="github-container">
      <span />
      <div className="github-container-vertical" />
      <Button text={text} className={buttonClassName} {...props} />
    </div>
  );
};

export const GoogleButton: FunctionComponent<IButtonProps> = ({
  className,
  text = 'Continue With Google',
  primary = true,
  ...props
}) => {
  const buttonClassName = appendClassName('_google', className);

  return (
    <div className="google-container">
      <span />
      <div className="google-container-vertical" />
      <Button text={text} className={buttonClassName} {...props} />
    </div>
  );
};

export const AddButton: FunctionComponent<IButtonProps> = ({ text, ...props }) => {
  return (
    <button className="add-button" {...props}>
      <Icon icon="add" width="20px" />
      {text && <div className="add-button-text">{text}</div>}
    </button>
  );
};

export const RemoveButton: FunctionComponent<IButtonProps> = ({ text, ...props }) => {
  return (
    <button className="remove-button" {...props}>
      <Icon icon="trash" width="20px" />
      {text && <div className="remove-button-text">{text}</div>}
    </button>
  );
};

export const EditButton: FunctionComponent<IButtonProps> = ({ text, ...props }) => {
  return (
    <button className="edit-button" {...props}>
      <Icon icon="edit" width="20px" />
      {text && <div className="edit-button-text">{text}</div>}
    </button>
  );
};

export const CancelButton: FunctionComponent<IButtonProps> = ({ text, ...props }) => {
  return (
    <button className="cancel-button" {...props}>
      <Icon icon="cancel" width="20px" />
      {text && <div className="cancel-button-text">{text}</div>}
    </button>
  );
};

export const SaveButton: FunctionComponent<IButtonProps> = ({ text, ...props }) => {
  return (
    <button className="save-button" {...props}>
      <Icon icon="save" width="20px" />
      {text && <div className="save-button-text">{text}</div>}
    </button>
  );
};

export const DownloadButton: FunctionComponent<IButtonProps> = ({ text, ...props }) => {
  return (
    <button className="download-button" {...props}>
      <Icon icon="download" width="20px" />
      {text && <div className="download-button-text">{text}</div>}
    </button>
  );
};
