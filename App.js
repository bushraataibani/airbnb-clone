import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Guests from './src/screens/Guest/Guests';
import Home from './src/screens/Home';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Home />
          <SearchResults />
          <DestinationSearch />
          <Guests />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
