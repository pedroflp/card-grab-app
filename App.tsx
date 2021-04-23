import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading'

import { useFonts, Raleway_400Regular, Raleway_500Medium, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium, 
    Raleway_700Bold,
    Roboto_500Medium
  });
  
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>

    <StatusBar style='auto' backgroundColor='#eeeeee' translucent={false} />
    <Routes />

    </>
  );
}
