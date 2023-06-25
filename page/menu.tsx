import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../layout/layout';
import {style} from '../styles/style';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';
import Search from '../component/search';
import Product from '../component/product';
import MenuTitle from '../component/title';

const Menu = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <Search />
      <View>
        <Text>Menu</Text>
      </View>
      <MenuTitle>Bundles</MenuTitle>
      <View style={menuStyle.productsContainer}>
        <Product name="Bundle A" price={300} />
        <Product name="Bundle B" price={400} />
        <Product name="Bundle C" price={500} />
        <Product name="Bundle D" price={600} />
      </View>
      <MenuTitle>Single Meals</MenuTitle>
      <View style={menuStyle.productsContainer}>
        <Product name="Chicken W/ Unli Rice" price={79} />
        <Product name="2 pcs Chicken W/ Rice" price={80} />
        <Product name="Leg Quarter / Breast Part" price={65} />
      </View>
      <MenuTitle>Alacart</MenuTitle>
      <View style={menuStyle.productsContainer}>
        <Product name="Whole Chicken" price={220} />
        <Product name="Half Chicken" price={120} />
        <Product name="Leg Quarter" price={45} />
        <Product name="Breast Part" price={20} />
        <Product name="Assorted Part" price={45} />
        <Product name="Leeg" price={20} />
      </View>
      <MenuTitle>Drinks</MenuTitle>
      <View style={menuStyle.productsContainer}>
        <Product name="Soft Drinks" price={20} />
        <Product name="Ice Tea" price={50} />
      </View>
      <MenuTitle>Addons</MenuTitle>
      <View style={menuStyle.productsContainer}>
        <Product name="Fried Egg" price={15} />
        <Product name="Gravy" price={10} />
        <Product name="Soup (2 Cups)" price={10} />
        <Product name="Hot Souce" price={10} />
        <Product name="Fried Rice" price={15} />
        <Product name="Ala King Souce" price={25} />
      </View>
    </Layout>
  );
};

const menuStyle = StyleSheet.create({
  productsContainer: {
    ...style.center,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
});

export default Menu;
