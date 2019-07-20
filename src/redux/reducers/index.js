import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './authReducer';
import projects from './projectsReducer';
import user from './userReducer';
import device from './deviceReducer';
import charts from './chartsReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth,
  projects,
  user,
  device,
  charts,
});
