import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../layout/layout';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';
import Search from '../component/search';
import CustomerName from '../component/customer-name';
import Box from '../component/box';
import LineSpace from '../component/line-space';
import CartItem from '../component/cart-item';
import {style} from '../styles/style';
import Button from '../component/button';

const PreOrder = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <Search />
      <Text>Pre Order</Text>
      <CustomerName />
      <LineSpace />
      <View style={{gap: 5}}>
        <Box>
          <View style={{gap: 5}}>
            <CartItem name="Whole Chicken" price={200} count={2} number={1} />
            <CartItem name="half Chicken" price={70} count={2} number={2} />
            <CartItem name="Breast" price={30} count={1} number={3} />
          </View>
        </Box>
        <Box>
          <View style={style.spaceBetween}>
            <Text>Subtotal</Text>
            <Text>₱400</Text>
          </View>
          <View style={style.spaceBetween}>
            <Text>tax</Text>
            <Text>40</Text>
          </View>
          <LineSpace />
          <View style={style.spaceBetween}>
            <Text style={{color: 'black'}}>Total</Text>
            <Text style={{color: 'black'}}>₱440</Text>
          </View>
          <View style={style.center}>
            <Button>
              <Text style={{color: 'white', paddingHorizontal: 50}}>
                Place Order
              </Text>
            </Button>
          </View>
        </Box>
      </View>
    </Layout>
  );
};

export default PreOrder;
