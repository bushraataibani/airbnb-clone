import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home/Home';
import SearchResults from '../screens/SearchResults/SearchResults';

const Stack = createStackNavigator();

const ExploreTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResults}
        options={{title: 'Search your destination'}}
      />
    </Stack.Navigator>
  );
};

export default ExploreTabNavigator;
