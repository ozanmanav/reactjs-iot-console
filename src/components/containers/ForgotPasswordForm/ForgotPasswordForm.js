import React from 'react';
import PropTypes from 'prop-types';
import AuthButton from '../../presentational/Buttons/AuthButton';
import FloatingLabelField from '../../presentational/FloatingLabelInput/FloatingLabelField';
import styles from './ForgotPasswordForm.scss';

const ForgotPasswordForm = ({ email, onClick, onChange }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Forgot Password</h2>
    <p className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer tincidunt ullamcorper nisi vitae elementum.
      Nulla luctus velit vel ornare aliquam.
    </p>
    <div className={styles['field-container']}>
      <FloatingLabelField
        onChange={onChange}
        label={'E-mail'}
        type={'email'}
        id={'email'}
        value={email}
      />
      <AuthButton
        onClick={onClick}
        text={'Submit'}
        style={{ width: 103 }}
      />
    </div>
  </div>
);

ForgotPasswordForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;
