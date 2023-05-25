import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import SearchResults from './src/screens/SearchResults';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          {/* <Home />
           */}
          <SearchResults />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
