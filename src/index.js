import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
// import { ConnectedRouter } from 'connected-react-router';
// import { Router } from 'react-router';
import firebase from 'firebase/app';
import App from './App';
import firebaseConfig from './configs/firebaseConfig';
import configureStore, { history } from './redux/configureStore';
import './index.scss';

const store = configureStore();

firebase.initializeApp(firebaseConfig);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render();
  });
}
