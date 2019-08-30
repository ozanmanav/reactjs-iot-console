import React, { FunctionComponent, useEffect } from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { restoreScroll } from './hooks';
import configureStore from './store';
import { Content } from './views/Content';

const store = configureStore();

const AppInner = withRouter(({ history, location }) => {
    useEffect(() => {}, []);

    // restoring scroll on location change
    useEffect(() => {
        restoreScroll(true);
    }, [location.pathname]);

    return (
        <Provider store={store}>
            <Content />
            <ToastContainer />
        </Provider>
    );
});

export const App: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <AppInner />
        </BrowserRouter>
    );
};

export default App;
