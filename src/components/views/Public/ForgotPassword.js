import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import firebase from 'firebase/app';
import 'firebase/auth';
import isEmail from 'validator/lib/isEmail';
import ForgotPasswordForm from '../../containers/ForgotPasswordForm/ForgotPasswordForm';
import AuthError from '../../presentational/Messages/AuthError/AuthError';

class ForgotPassword extends React.Component {
  state = {
    email: '',
    emailError: false,
    fbError: false,
    fbErrorText: '',
  };

  onChange = (e) => {
    this.setState({ email: e.target.value, emailError: false });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      fbError: false,
      fbErrorText: '',
    });
    const { email } = this.state;
    if (email === '') {
      this.setState({
        emailError: true,
        emailErrorText: 'E-mail cannot be empty.'
      });
    } else if (!isEmail(email)) {
      this.setState({
        emailError: true,
        emailErrorText: 'Please enter a valid e-mail address.'
      });
    } else {
      const actionCodeSettings = {
        url: 'http://localhost:8081/login'
      };
      firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
        .then(() => {
          this.props.push('/resetPasswordSent');
        })
        .catch(err => {
          this.setState({
            fbError: true,
            fbErrorText: err.message
          });
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        {
          this.state.fbError &&
          <AuthError text={this.state.fbErrorText} />
        }
        <ForgotPasswordForm
          onClick={this.onSubmit}
          onChange={this.onChange}
          email={this.state.email}
        />
      </React.Fragment>
    );
  }
}

ForgotPassword.propTypes = {
  router: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  push
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
