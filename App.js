import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch/DestinationSearch';
import GuestList from './src/screens/Guest/Guest';
import Home from './src/screens/Home/Home';
import SearchResults from './src/screens/SearchResults/SearchResults';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Home />
          <SearchResults />
          <DestinationSearch />
          <GuestList />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
