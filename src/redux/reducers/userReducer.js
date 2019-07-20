import update from 'immutability-helper';
import { user } from '../types';

const INITIAL_STATE = {
  accountProperties: {},
  accountTypeImage: '',
  id: '',
  image: '',
  location: '',
  name: '',
  timezone: '',
  loading: false,
  error: null,
  clientSecret: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case user.GET_USER_REQUEST:
      return update(state, {
        error: { $set: null },
        loading: { $set: true }
      });
    case user.GET_USER_SUCCESS:
      return update(state, {
        accountProperties: { $set: action.payload.accountProperties },
        accountTypeImage: { $set: action.payload.accountTypeImage },
        id: { $set: action.payload.id },
        image: { $set: action.payload.image },
        location: { $set: action.payload.location },
        name: { $set: action.payload.name },
        timezone: { $set: action.payload.timezone },
        loading: { $set: false },
        error: { $set: null },
        clientSecret: { $set: action.payload.clientSecret }
      });
    case user.GET_USER_FAIL:
      return update(state, {
        error: { $set: action.payload },
        loading: { $set: false },
      });
    default:
      return state;
  }
}
