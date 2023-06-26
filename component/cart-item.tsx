import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CircleCount from './circle-number';
import useTheme from '../hooks/useTheme';
type Props = {
  name: string;
  count: number;
  price: number;
  number: number;
};
const CartItem = (props: Props) => {
  const theme = useTheme();
  return (
    <View style={styles.cartItem}>
      <View style={{flex: 0.3}}>
        <CircleCount>{props.number}</CircleCount>
      </View>
      <Text style={{color: theme.text, flex: 2}}>{props.name}</Text>
      <Text style={{color: theme.text, flex: 1}}>x{props.count}</Text>
      <Text style={{color: theme.text, flex: 0.5}}>
        ₱{props.count * props.price}
      </Text>
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
