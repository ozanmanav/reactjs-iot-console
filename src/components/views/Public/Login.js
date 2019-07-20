import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import AuthForm from '../../containers/AuthForm/AuthForm';
import { newUserAction } from '../../../redux/actions/authActions';
import AuthError from '../../presentational/Messages/AuthError/AuthError';
import validateAuthForm from '../../../utils/validateAuthForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      show: false,
      emailError: false,
      passwordError: false,
      loginError: false,
      loginErrorText: '',
      loading: false,
    };
    firebase.auth().useDeviceLanguage();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');
    this.googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');
    this.githubProvider = new firebase.auth.GithubAuthProvider();
    this.githubProvider.addScope('public_repo');
    this.githubProvider.addScope('user');
  }

  onChange = (e) => {
    const error = `${e.target.id}Error`;
    this.setState({
      [e.target.id]: e.target.value,
      [error]: false,
    });
  };
  onLogin = (e) => {
    e.preventDefault();
    this.setState({ loginError: false, loading: true });
    const { email, password } = this.state;
    const { valid, passwordError, emailError } = validateAuthForm(email, password);
    if (valid) {
      firebase.auth().fetchSignInMethodsForEmail(email)
        .then(methods => {
          if (methods.length === 0) {
            this.setState({
              loginError: true,
              loginErrorText: 'User with this email does not exists. ' +
                'Please register first',
              loading: false
            });
          } else if (methods[0] !== 'password') {
            const method = methods[0] === 'google.com' ? 'Google' : 'Github';
            this.setState({
              loginError: true,
              loginErrorText:
                `This email is already registered with ${
                  method
                  } provider. Please login with provider button.`,
              loading: false
            });
          } else {
            firebase.auth().signInWithEmailAndPassword(email, password)
              .then(() => this.setState({ loading: false }))
              .catch(err => {
                this.setState({
                  loginError: true,
                  loginErrorText: err.message,
                  loading: false
                });
              });
          }
        })
        .catch(() => this.setState({
          loginError: true,
          loginErrorText: 'Something went wrong. Please try again.',
          loading: false
        }));
    } else {
      this.setState({ emailError, passwordError, loading: false });
    }
  };
  onGoogleClick = (e) => {
    e.preventDefault();
    this.signInWithPopup(this.googleProvider);
  };
  onGithubClick = (e) => {
    e.preventDefault();
    this.signInWithPopup(this.githubProvider);
  };
  onShowClick = () => {
    this.setState({ show: !this.state.show });
  };
  signInWithPopup = (provider) => {
    this.setState({ loginError: false });
    firebase.auth().signInWithPopup(provider)
      .then(user => {
        this.props.newUserAction(user.additionalUserInfo.isNewUser, true, false);
        if (user.additionalUserInfo.isNewUser) {
          this.setState({
            loginError: true,
            loginErrorText: 'User with this email does not exists. ' +
              'Please register first'
          });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (error.code === 'auth/account-exists-with-different-credential') {
          const email = error.email;
          firebase.auth().fetchSignInMethodsForEmail(email).then((methods) => {
            if (methods[0] === 'password') {
              this.setState({
                loginError: true,
                loginErrorText: 'This email is registered with email/password. ' +
                  'Please login with your password.'
              });
              return;
            }
            const method = methods[0] === 'google.com' ? 'Google' : 'Github';
            this.setState({
              loginError: true,
              loginErrorText:
                `This email is already registered with ${method} provider. \
                Please login with provider button.`
            });
          });
        } else {
          this.setState({
            loginError: true,
            loginErrorText: errorMessage
          });
        }
      });
  };
  render() {
    return (
      <div style={{ position: 'relative' }}>
        {
          this.state.loginError &&
          <AuthError
            text={this.state.loginErrorText}
          />
        }
        <AuthForm
          onChange={this.onChange}
          email={this.state.email}
          password={this.state.password}
          title={'Log In'}
          show={this.state.show}
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          onClick={this.onLogin}
          onGoogleClick={this.onGoogleClick}
          onGithubClick={this.onGithubClick}
          onShowClick={this.onShowClick}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

Login.propTypes = {
  router: PropTypes.object.isRequired,
  newUserAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  newUserAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
