import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const Post = ({props}) => {
  const {
    image,
    type,
    title,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
    coordinate,
  } = props;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />

      {/* Bed & bedroom */}
      <Text style={styles.bedrooms}>{`${bed} bed ${bedroom} bedroom`}</Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={3}>
        {type}. {title}
      </Text>

      {/* Old Price & New Price */}
      <Text style={styles.price}>
        <Text style={styles.oldPrice}>{`${oldPrice}`} </Text>
        <Text style={styles.newPrice}> {`${newPrice}`}</Text> / night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>{`${totalPrice} total`}</Text>
    </View>
  );
};

export default Post;
