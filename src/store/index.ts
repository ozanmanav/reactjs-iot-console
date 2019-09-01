import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { authReducer } from './auth/reducers';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '../sagas';
import { createBrowserHistory } from 'history';
import { startupReducer } from './startup/reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    startup: startupReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [thunkMiddleware, sagaMiddleware, logger, routerMiddleware(history)];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

    sagaMiddleware.run(rootSaga);

    return store;
}
