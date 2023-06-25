import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CircleCount from './circle-number';
type Props = {
  name: string;
  count: number;
  price: number;
  number: number;
};
const CartItem = (props: Props) => {
  return (
    <View style={styles.cartItem}>
      <View style={{flex: 0.3}}>
        <CircleCount>{props.count}</CircleCount>
      </View>
      <Text style={{flex: 2}}>{props.name}</Text>
      <Text style={{flex: 1}}>x{props.count}</Text>
      <Text style={{flex: 0.5}}>₱{props.count * props.price}</Text>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    gap: 5,
  },
});
