import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import configureStore, { history } from './store';
import { Content } from './views/Content';
import { ConnectedRouter } from 'connected-react-router';
import { CookiesProvider } from 'react-cookie';

const store = configureStore();

export const App: FunctionComponent = () => {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Content />
                    <ToastContainer />
                </ConnectedRouter>
            </Provider>
        </CookiesProvider>
    );
};

export default App;
