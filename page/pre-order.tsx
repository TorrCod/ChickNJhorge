import {View, Text, StyleSheet, Modal} from 'react-native';
import React, {useState} from 'react';
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
import {SvgXml} from 'react-native-svg';
import useTheme from '../hooks/useTheme';

const PreOrder = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const menuContext = useMenuContext();
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const handlePlaceOrder = () => {
    menuContext.clearMenu();
    // navigation.navigate('Menu');
    setModalVisible(true);
  };

  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <Search />
      <Text style={{color: theme.text}}>Pre Order</Text>
      {menuContext.state.itemsOrdered.length != 0 && (
        <CustomerName onChangeName={menuContext.onChangeName} />
      )}
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
            <View style={{...style.center}}>
              <Button onPress={handlePlaceOrder}>
                <Text style={{color: 'white', paddingHorizontal: 50}}>
                  Place Order
                </Text>
              </Button>
            </View>
          </Box>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{...style.center}}>
          <View style={preOrderStyle.modalView}>
            <View style={preOrderStyle.modalTitle}>
              <SvgXml xml={checkXml} height={30} width={30} />
              <View>
                <Text style={style.h2}>Item Ordered</Text>
                <Text>The Item has been successfully ordered</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#f5f5f5',
                alignItems: 'flex-end',
                paddingHorizontal: 27,
                paddingVertical: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <View style={{width: 50}}>
                <Button
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('Menu');
                  }}>
                  <Text style={{color: 'white'}}>Ok</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Layout>
  );
};

const checkXml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(40,201,55); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
	<path d="M 38.478 64.5 c -0.01 0 -0.02 0 -0.029 0 c -1.3 -0.009 -2.533 -0.579 -3.381 -1.563 L 21.59 47.284 c -1.622 -1.883 -1.41 -4.725 0.474 -6.347 c 1.884 -1.621 4.725 -1.409 6.347 0.474 l 10.112 11.744 L 61.629 27.02 c 1.645 -1.862 4.489 -2.037 6.352 -0.391 c 1.862 1.646 2.037 4.49 0.391 6.352 l -26.521 30 C 40.995 63.947 39.767 64.5 38.478 64.5 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>
`;

const preOrderStyle = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
  },
  modalTitle: {
    flexDirection: 'row',
    gap: 10,
    padding: 27,
  },
});

export default PreOrder;
