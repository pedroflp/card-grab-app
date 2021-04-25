import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from '../store/';
import AppRoutes from './stack.routes';
import AppContext from '../context/Context';

const Routes = () => (
  <Provider store={store}>
    <AppContext>
      <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
    </AppContext>
  </Provider>
)

export default Routes;