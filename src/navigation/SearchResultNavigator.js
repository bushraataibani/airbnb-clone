import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import SearchResults from '../screens/SearchResults/SearchResults';

const Tab = createMaterialTopTabNavigator();

const SearchResultNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarInactiveTintColor: '#000',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResults} />
      <Tab.Screen name={'map'} component={SearchResults} />
    </Tab.Navigator>
  );
};

export default SearchResultNavigator;
