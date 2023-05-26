import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import guests from '../../../assets/data/guests';
import GuestList from './index';

const Guests = () => {
  return (
    <ScrollView>
      <FlatList
        data={guests}
        renderItem={({item, index}) => (
          <GuestList item={item} key={item?.id} index={index} />
        )}
      />
    </ScrollView>
  );
};

export default Guests;
