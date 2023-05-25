import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  bedrooms: {marginVertical: 10, color: '5b5b5b'},
  description: {fontSize: 18, lineHeight: 22, color: '#333333'},
  price: {fontSize: 18, marginVertical: 10},
  oldPrice: {color: '5b5b5b', textDecorationLine: 'line-through'},
  newPrice: {fontWeight: 'bold', color: '#333333'},
  totalPrice: {fontSize: 16, color: '5b5b5b', textDecorationLine: 'underline'},
});

export default styles;
