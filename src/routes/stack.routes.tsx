import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CardsPage from '../pages/CardsPage';
import { CreateCardPage } from '../pages/CreateCardPage';

import colors from '../styles/colors';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator  
    headerMode='none'
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.background,
      }
    }}
  >
    <Stack.Screen name='CardsPage' component={CardsPage} />
    <Stack.Screen name='CreateCardPage' component={CreateCardPage} />
  </Stack.Navigator>
)

export default AppRoutes;