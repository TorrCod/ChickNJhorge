import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
    setModalVisible(true);
  };

  const onPressBack = () => {
    navigation.navigate('Menu');
  };

  return (
    <ScrollView style={{padding: 5}}>
      <View style={preOrderStyle.headNav}>
        <TouchableOpacity onPress={onPressBack}>
          <SvgXml
            color={theme.textPrimary}
            fill={theme.textPrimary}
            xml={backIconXml}
            width={25}
            height={25}
          />
        </TouchableOpacity>

        <Text style={{color: theme.textPrimary, ...preOrderStyle.head}}>
          Cart
        </Text>
      </View>
      <View style={{gap: 5}}>
        {menuContext.state.itemsOrdered.length != 0 && (
          <Box>
            <CustomerName onChangeName={menuContext.onChangeName} />
          </Box>
        )}
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
            <View style={{gap: 5}}>
              <View style={style.spaceBetween}>
                <Text style={{color: theme.textPrimary}}>Total</Text>
                <Text style={{color: theme.textPrimary}}>
                  ₱{menuContext.state.totalPrice}
                </Text>
              </View>
              <Button onPress={handlePlaceOrder}>Place Order</Button>
            </View>
          </Box>
        )}
      </View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          menuContext.clearMenu();
        }}>
        <View style={{...style.center, backgroundColor: '#00000097'}}>
          <View
            style={{
              ...preOrderStyle.modalView,
              backgroundColor: theme.backGround,
            }}>
            <View style={preOrderStyle.modalTitle}>
              <SvgXml xml={checkXml} height={30} width={30} />
              <View>
                <Text style={{...style.h2, color: theme.textPrimary}}>
                  Item Ordered
                </Text>
                <Text>The Item has been successfully ordered</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.backShade,
                alignItems: 'flex-end',
                paddingHorizontal: 27,
                paddingVertical: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <View style={{width: 75}}>
                <Button
                  onPress={() => {
                    menuContext.clearMenu();
                    navigation.navigate('Menu');
                    setModalVisible(false);
                  }}>
                  ok
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
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
  shadow: {
    textShadowColor: '#rgba(0, 0, 0, 0.30)',
    textShadowOffset: {height: 1, width: 1},
    textShadowRadius: 1,
  },
  headNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
  },
  head: {
    fontSize: 18,
  },
});

const backIconXml = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>`;

export default PreOrder;
