import React, {useState} from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import search from '../../../assets/data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearch = () => {
  const navigation = useNavigation();
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
          <Pressable
            style={styles.destinationList}
            onPress={() => navigation.navigate('Guests')}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text key={item?.id} style={styles.description}>
              {item?.description}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearch;
