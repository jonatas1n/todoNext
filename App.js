import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux'

import Main from './src/Main';
import { store, persistor } from './services/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main/>
      </PersistGate>
    </Provider>
  )
}
