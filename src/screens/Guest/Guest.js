import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const GuestList = () => {
  const [guestCount, setGuestCount] = useState(0);

  const handleIncreaseGuest = () => {
    setGuestCount(guestCount + 1);
  };

  const handleDecreaseGuest = () => {
    setGuestCount(Math.max(0, guestCount - 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.guestList}>
        <View>
          <Text style={styles.ageType}>Adults</Text>
          <Text style={styles.ageGroup}>13 or above</Text>
        </View>

        <View style={styles.buttonSide}>
          <Pressable
            onPress={() => handleDecreaseGuest()}
            style={styles.button}>
            <Entypo name="minus" size={20} />
          </Pressable>

          <Text style={styles.guestCount}>{guestCount}</Text>

          <Pressable
            onPress={() => handleIncreaseGuest()}
            style={styles.button}>
            <Entypo name="plus" size={20} />
          </Pressable>
        </View>
      </View>

      <View style={styles.guestList}>
        <View>
          <Text style={styles.ageType}>Children</Text>
          <Text style={styles.ageGroup}>Age 2-12</Text>
        </View>

        <View style={styles.buttonSide}>
          <Pressable
            onPress={() => handleDecreaseGuest()}
            style={styles.button}>
            <Entypo name="minus" size={20} />
          </Pressable>

          <Text style={styles.guestCount}>{guestCount}</Text>

          <Pressable
            onPress={() => handleIncreaseGuest()}
            style={styles.button}>
            <Entypo name="plus" size={20} />
          </Pressable>
        </View>
      </View>

      <View style={styles.guestList}>
        <View>
          <Text style={styles.ageType}>Infants</Text>
          <Text style={styles.ageGroup}>Under 2</Text>
        </View>

        <View style={styles.buttonSide}>
          <Pressable
            onPress={() => handleDecreaseGuest()}
            style={styles.button}>
            <Entypo name="minus" size={20} />
          </Pressable>

          <Text style={styles.guestCount}>{guestCount}</Text>

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
