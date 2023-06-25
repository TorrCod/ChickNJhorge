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
import useMenuContext from '../context/menuContext';

const PreOrder = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const menuContext = useMenuContext();
  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <Search />
      <Text>Pre Order</Text>
      {menuContext.state.itemsOrdered.length != 0 && <CustomerName />}
      <LineSpace />
      <View style={{gap: 5}}>
        <Box>
          <View style={{gap: 5}}>
            {menuContext.state.itemsOrdered.map((item, index) => (
              <CartItem
                name={item.name}
                price={item.price}
                count={item.count}
                number={index + 1}
                key={index}
              />
            ))}
            {!menuContext.state.itemsOrdered.length && (
              <Text>No Item added from Menu</Text>
            )}
          </View>
        </Box>
        {menuContext.state.itemsOrdered.length != 0 && (
          <Box>
            {/* <View style={style.spaceBetween}>
            <Text>Subtotal</Text>
            <Text>₱400</Text>
          </View> */}
            <LineSpace />
            <View style={style.spaceBetween}>
              <Text style={{color: 'black'}}>Total</Text>
              <Text style={{color: 'black'}}>
                ₱{menuContext.state.totalPrice}
              </Text>
            </View>
            <View style={style.center}>
              <Button>
                <Text style={{color: 'white', paddingHorizontal: 50}}>
                  Place Order
                </Text>
              </Button>
            </View>
          </Box>
        )}
      </View>
    </Layout>
  );
};

export default PreOrder;
