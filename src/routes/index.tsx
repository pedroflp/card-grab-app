import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from '../store/';
import AppRoutes from './stack.routes';

const Routes = () => (
  <Provider store={store}>
      <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  </Provider>
)

export default Routes;