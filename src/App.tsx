import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import configureStore, { history } from './store';
import { Content } from './views/Content';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();

export const App: FunctionComponent = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Content />
                <ToastContainer />
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
