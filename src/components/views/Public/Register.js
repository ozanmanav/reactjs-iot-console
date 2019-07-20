import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import AuthForm from '../../containers/AuthForm/AuthForm';
import validateAuthForm from '../../../utils/validateAuthForm';
import AuthError from '../../presentational/Messages/AuthError/AuthError';
import { newUserAction } from '../../../redux/actions/authActions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      show: false,
      emailError: false,
      passwordError: false,
      signUpError: false,
      signUpErrorText: '',
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
  onSignUp = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { valid, passwordError, emailError } = validateAuthForm(email, password);
    if (valid) {
      this.setState({ signUpError: false, loading: true });
      firebase.auth().fetchSignInMethodsForEmail(email)
        .then(methods => {
          if (methods.length === 0) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .catch(err => this.setState({
                signUpError: true,
                signUpErrorText: err.message
              }));
          } else {
            this.setState({
              signUpError: true,
              signUpErrorText: 'User with this email already exists.'
            });
          }
        })
        .catch(() => this.setState({
          signUpError: true,
          signUpErrorText: 'Something went wrong. Please try again.'
        }))
        .finally(() => this.setState({ loading: false }));
    } else {
      this.setState({ emailError, passwordError });
    }
  };
  onGoogleClick = () => {
    this.signUpWithPopup(this.googleProvider);
  };
  onGithubClick = () => {
    this.signUpWithPopup(this.githubProvider);
  };
  onShowClick = () => {
    this.setState({ show: !this.state.show });
  };
  signUpWithPopup = (provider) => {
    this.setState({ signUpError: false });
    firebase.auth().signInWithPopup(provider)
      .then(user => {
        console.log(user.additionalUserInfo.isNewUser);
        this.props.newUserAction(user.additionalUserInfo.isNewUser, false, true);
        if (!user.additionalUserInfo.isNewUser) {
          this.setState({
            signUpError: true,
            signUpErrorText: 'A user with this email already exists.'
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
                signUpError: true,
                signUpErrorText:
                  'This email is already registered with email/password. Please sign in.'
              });
              return;
            }
            const method = methods[0] === 'google.com' ? 'Google' : 'Github';
            this.setState({
              signUpError: true,
              signUpErrorText:
                `This email is already registered with ${method} provider. \
                Please log in.`
            });
          });
        } else {
          this.setState({
            signUpError: true,
            signUpErrorText: errorMessage
          });
        }
      });
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        {
          this.state.signUpError &&
          <AuthError text={this.state.signUpErrorText} />
        }
        <AuthForm
          onChange={this.onChange}
          email={this.state.email}
          password={this.state.password}
          title={'Sign Up'}
          show={this.state.show}
          emailError={this.state.emailError}
          passwordError={this.state.passwordError}
          onClick={this.onSignUp}
          onGoogleClick={this.onGoogleClick}
          onGithubClick={this.onGithubClick}
          onShowClick={this.onShowClick}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

Register.propTypes = {
  router: PropTypes.object.isRequired,
  newUserAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  newUserAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
