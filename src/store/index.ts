import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { authReducer } from './auth/reducers';
import createSagaMiddleware from '@redux-saga/core';
import { persistStore, persistReducer } from 'redux-persist';
import localforage from 'localforage';
import { rootSaga } from '../sagas';
import { createBrowserHistory } from 'history';
import { startupReducer } from './startup/reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { projectReducer } from './project/reducers';
import { uiReducer } from './ui/reducers';
import { USER_LOGOUT } from './auth/types';
import { userReducer } from './user/reducers';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage: localforage
};

const rootReducer = combineReducers({
  router: connectRouter(history),
  startup: startupReducer,
  auth: authReducer,
  project: projectReducer,
  ui: uiReducer,
  user: userReducer
});

const resetEnhancer: any = (rootReducer: any): any => (state: any, action: any) => {
  if (action.type !== USER_LOGOUT) return rootReducer(state, action);

  const newState = rootReducer(undefined, {});
  newState.router = state.router;
  return newState;
};

const persistedReducer = persistReducer(persistConfig, resetEnhancer(rootReducer));

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger, routerMiddleware(history)];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(persistedReducer, composeWithDevTools(middleWareEnhancer));

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}
