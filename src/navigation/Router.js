import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeTabNavigator from './HomeTabNavigator';
import DestinationSearch from '../screens/DestinationSearch/DestinationSearch';
import GuestList from '../screens/Guest/Guest';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearch}
          options={{
            title: 'Search your destination',
          }}
        />

        <Stack.Screen
          name={'Guests'}
          component={GuestList}
          options={{
            title: 'Home many people',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
