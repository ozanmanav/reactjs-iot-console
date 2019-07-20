import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './AuthForm.scss';
import AuthButton from '../../presentational/Buttons/AuthButton';
import FloatingLabelField from '../../presentational/FloatingLabelInput/FloatingLabelField';
import GoogleButton from '../../presentational/Buttons/GoogleButton';
import GithubButton from '../../presentational/Buttons/GithubButton';

function AuthForm({ email, password, show, emailError, passwordError, title, loading,
                     onChange, onClick, onShowClick, onGoogleClick, onGithubClick
                   }) {
  return (
    <form className={styles.container}>
      <div className={styles.title}>{title}</div>
      <FloatingLabelField
        onChange={onChange}
        value={email}
        id={'email'}
        type={'email'}
        label={'E-mail Address'}
        error={emailError}
      />
      {emailError && <span className={styles.error}>
        {
          email === '' ?
            'E-mail field cannot be empty.' :
            'Please enter a correct e-mail address.'
        }
      </span>}
      <div className={styles['password-login']}>
        <FloatingLabelField
          value={password}
          id={'password'}
          label={'Password'}
          onChange={onChange}
          type={show ? 'text' : 'password'}
          error={passwordError}
        />
        <span className={styles.show} onClick={onShowClick} />
        <AuthButton loading={loading} onClick={onClick} text={title} />
      </div>
      {passwordError && <span className={styles.error}>Password field cannot be empty.</span>}
      <div className={styles['divider-group']}>
        <div className={styles.divider} />
        <span className={styles.or}>or</span>
        <div className={styles.divider} />
      </div>
      <GoogleButton onClick={onGoogleClick} />
      <GithubButton onClick={onGithubClick} />
      {
        title === 'Log In' &&
        <Link to={'/forgotPassword'} className={styles['forgot-password']}>
          <span>Forgot Password</span>
        </Link>
      }
    </form>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  emailError: PropTypes.bool.isRequired,
  passwordError: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onGoogleClick: PropTypes.func.isRequired,
  onGithubClick: PropTypes.func.isRequired,
  onShowClick: PropTypes.func.isRequired,
};

export default AuthForm;
