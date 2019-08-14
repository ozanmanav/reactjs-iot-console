import firebase from 'firebase/app';
import 'firebase/auth';
import { push } from 'connected-react-router';

import { auth } from '../types';
import { getRequest } from '../../utils/api/utilFunctions';

export const checkUser = () => (dispatch, getState) => {
  dispatch({
    type: auth.CHECKING_USER
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      firebase.auth().currentUser.getIdToken().then(token => console.log(token));
      const authStore = getState().auth;
      if (authStore.newUser && authStore.loginPage) {
        user.delete().catch(e => console.log(e.message));
      } else if (!authStore.newUser && authStore.signUpPage) {
        dispatch({
          type: 'USER_ALREADY_EXISTS'
        });
      } else {
        const router = getState().router;
        getRequest('checkUser', { mail: user.email })
          .then(() => {
            const redirect =
              router.location.pathname !== '/login' ?
                router.location.pathname :
                '/';
            dispatch({
              type: auth.USER_LOGGED_IN,
              payload: user
            });
            dispatch(push(redirect));
          })
          .catch(e => {
            if (e.response && e.response.status === 404) {
              console.error(e);
              //   postRequest('/registerWithEmail', {}, {
              //     timezone: moment.tz.guess(true),
              //     location: '',
              //     type: 'Pro'
              //   })
              //     .then(() => {
              //       const redirect =
              //         router.location.pathname !== '/login' ?
              //           router.location.pathname :
              //           '/';
              //       dispatch({
              //         type: auth.USER_LOGGED_IN,
              //         payload: user
              //       });
              //       dispatch(push(redirect));
              //     })
              //     .catch(e1 => console.error(e1));
              // } else {
              //   console.error(e);
              // }
            }
          });
      }
    } else {
      dispatch({
        type: auth.USER_NOT_LOGGED_IN,
      });
      const pathname = getState().router.location.pathname;
      if (pathname !== '/register' && pathname !== '/login' && pathname !== '/forgotPassword') {
        dispatch(push('/login'));
      }
    }
  });
};

export const userLoginRequest = () => ({
  type: auth.CHECKING_USER
});

export const userLoggedIn = (user) => dispatch => {
  dispatch({
    type: auth.USER_LOGGED_IN,
    payload: user
  });
  dispatch(push('/'));
};

export const userSignedOut = () => dispatch => {
  dispatch({
    type: auth.USER_NOT_LOGGED_IN,
  });
  dispatch(push('/login'));
};

export const newUserAction = (newUser, loginPage, signUpPage) => ({
  type: auth.NEW_USER,
  payload: {
    newUser,
    loginPage,
    signUpPage
  }
});
