import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './stack.routes';
import AppContext from '../contexts/Context';

const Routes = () => (
  <AppContext>
      <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  </AppContext>
)

export default Routes;