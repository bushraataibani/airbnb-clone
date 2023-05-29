import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/navigation/Router';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
