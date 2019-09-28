import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import configureStore from './store';
import { Content } from './views/Content';
import { PersistGate } from 'redux-persist/integration/react';

export const { store, persistor } = configureStore();

export const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
