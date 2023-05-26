import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import SearchResults from './src/screens/SearchResults';
import Home from './src/screens/Home';
import DestinationSearch from './src/screens/DestinationSearch';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          {/* <Home />

          <SearchResults /> */}
          <DestinationSearch />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
