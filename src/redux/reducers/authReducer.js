import update from 'immutability-helper';
import { auth } from '../types';

const INITIAL_STATE = {
  loading: false,
  loggedIn: false,
  newUser: false,
  loginPage: false,
  signUpPage: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case auth.NEW_USER:
      return update(state, {
        newUser: { $set: action.payload.newUser },
        loginPage: { $set: action.payload.loginPage },
        signUpPage: { $set: action.payload.signUpPage },
      });
    case auth.CHECKING_USER:
      return update(state, {
        loading: { $set: true },
      });
    case auth.USER_LOGGED_IN:
      return update(state, {
        loading: { $set: false },
        loggedIn: { $set: true },
      });
      case auth.USER_NOT_LOGGED_IN:
        return update(state, {
          loading: { $set: false },
          loggedIn: { $set: false },
        });
    default:
      return state;
  }
};
