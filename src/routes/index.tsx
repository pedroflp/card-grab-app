import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'

import store from '../store/';
import AppRoutes from './stack.routes';
import AppContext from '../context/Context';

const Routes = () => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistedStore}> */}
      <AppContext>
        <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      </AppContext>
    {/* </PersistGate> */}
  </Provider>
)

export default Routes;