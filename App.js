import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Home from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Home />
          {feed?.map(item => (
            <Post key={item?.key} props={item} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
