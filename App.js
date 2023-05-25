import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/Home';
import Post from './src/components/Post';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <Home /> */}
        <Post />
      </SafeAreaView>
    </>
  );
};

export default App;
