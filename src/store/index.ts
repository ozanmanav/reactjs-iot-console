import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from './auth/reducers';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '../sagas';

const rootReducer = combineReducers({
    auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [thunkMiddleware, sagaMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

    sagaMiddleware.run(rootSaga);

    return store;
}
