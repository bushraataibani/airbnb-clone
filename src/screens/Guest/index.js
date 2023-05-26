import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const GuestList = ({item, index}) => {
  const [guest, setGuest] = useState(item);

  const handleIncreaseGuest = () => {
    const tempData = JSON.parse(JSON.stringify(guest));
    // tempData[index].guestCount = tempData[index].guestCount + 1;
    console.log(tempData, index, 'tempData, index');
    // setGuest(tempData);
  };

  const handleDecreaseGuest = () => {
    // setGuestCount(Math.max(0, guestCount - 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.guestList}>
        <View>
          <Text style={styles.ageType}>{guest.ageType}</Text>
          <Text style={styles.ageGroup}>{guest.ageGroup}</Text>
        </View>

        <View style={styles.buttonSide}>
          <Pressable
            onPress={() => handleDecreaseGuest()}
            style={styles.button}>
            <Entypo name="minus" size={20} />
          </Pressable>

          <Text style={styles.guestCount}>{guest?.guestCount}</Text>

          <Pressable
            onPress={() => handleIncreaseGuest()}
            style={styles.button}>
            <Entypo name="plus" size={20} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestList;
