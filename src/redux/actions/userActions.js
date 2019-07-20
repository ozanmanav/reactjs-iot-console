import firebase from 'firebase/app';
import 'firebase/auth';
import { user } from '../types';
import { getRequest } from '../../utils/api/utilFunctions';

export const getUser = () => dispatch => {
  dispatch({ type: user.GET_USER_REQUEST });
  const id = firebase.auth().currentUser.uid;
  getRequest(`/user/${id}`)
    .then(response => {
      dispatch({
        type: user.GET_USER_SUCCESS,
        payload: response.data.User
      });
    })
    .catch(error => dispatch({
      type: user.GET_USER_FAIL,
      payload: error
    }));
};
