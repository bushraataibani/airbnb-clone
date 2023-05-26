import React from 'react';
import {FlatList, View} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const SearchResults = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <Post item={item} key={item?.id} />}
      />
    </View>
  );
};

export default SearchResults;
