import React, {useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import search from '../../../assets/data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={styles.container}>
      {/* Input Component */}
      <TextInput
        style={styles.searchInput}
        placeholder="Where are you going"
        onChangeText={setSearchValue}
        value={searchValue}
      />

      {/* List of Destination */}
      <FlatList
        data={search}
        renderItem={({item}) => (
          <View style={styles.destinationList}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text key={item?.id} style={styles.description}>
              {item?.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearch;
