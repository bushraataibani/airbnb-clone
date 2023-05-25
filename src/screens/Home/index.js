import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import Background from '../../../assets/images/wallpaper.jpg';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Home = () => {
  return (
    <>
      <View>
        {/* SearchBar */}
        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn({data: 'search button pressed'})}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>

        <ImageBackground source={Background} style={styles.image}>
          {/* Title */}
          <Text style={styles.title}>Go Near</Text>

          {/* Button */}
          <Pressable
            style={styles.button}
            onPress={() => console.warn({data: 'explore button pressed'})}>
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </ImageBackground>
      </View>
    </>
  );
};

export default Home;
