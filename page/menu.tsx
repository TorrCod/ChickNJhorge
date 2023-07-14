import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Layout from '../layout/layout';
import {style} from '../styles/style';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';
import Search from '../component/search';
import Product from '../component/product';
import MenuTitle from '../component/title';
import useTheme from '../hooks/useTheme';
import useMenuContext from '../context/menuContext';

const Menu = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const theme = useTheme();
  const {updateOrderMenu, state, getProductCount} = useMenuContext();

  const onAddItem = ({name, price}: {name: string; price: number}) => {
    updateOrderMenu({name, price, count: getProductCount(name) + 1});
  };
  const onRemoveItem = ({name, price}: {name: string; price: number}) => {
    const newCount = getProductCount(name) - 1;
    updateOrderMenu({name, price, count: newCount > 0 ? newCount : 0});
  };

  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <View>
        <Text style={{color: theme.text}}>Menu</Text>
      </View>
      <Search />
      {MenuDummy.map(({section, menu}, index) => (
        <View key={index}>
          <MenuTitle>{section}</MenuTitle>
          <View style={menuStyle.productsContainer}>
            {menu.map(component => (
              <Product
                name={component.name}
                price={component.price}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
                productCount={getProductCount(component.name)}
                key={component.name + ' ' + index}
              />
            ))}
          </View>
        </View>
      ))}
    </Layout>
  );
};

export const MenuDummy = [
  {
    section: 'Bundles',
    menu: [
      {name: 'Bundle A', price: 300, id: 1},
      {name: 'Bundle B', price: 400, id: 2},
      {name: 'Bundle C', price: 500, id: 3},
      {name: 'Bundle D', price: 600, id: 4},
    ],
  },

  {
    section: 'Single Meals',
    menu: [
      {name: 'Chicken W/ Unli Rice', price: 79, id: 5},
      {name: '2 pcs Chicken W/ Rice', price: 80, id: 6},
      {name: 'Leg Quarter / Breast Part', price: 35, id: 7},
    ],
  },

  {
    section: 'Alacart',
    menu: [
      {name: 'Whole Chicken', price: 79, id: 5},
      {name: 'Half Chicken', price: 80, id: 8},
      {name: 'Leg Quarter', price: 35, id: 9},
      {name: 'Breast Part', price: 35, id: 10},
      {name: 'Leeg', price: 35, id: 11},
    ],
  },

  {
    section: 'Drinks',
    menu: [
      {name: 'Coke', price: 20, id: 12},
      {name: 'Sprite', price: 20, id: 13},
      {name: 'Ice Tea', price: 50, id: 14},
    ],
  },

  {
    section: 'Addons',
    menu: [
      {name: 'Fried Egg', price: 15, id: 15},
      {name: 'Gravy', price: 10, id: 16},
      {name: 'Soup (2 Cups)', price: 10, id: 17},
      {name: 'Hot Souce', price: 10, id: 18},
      {name: 'Fried Rice', price: 15, id: 19},
      {name: 'Ala King Souce', price: 25, id: 20},
    ],
  },
];

const menuStyle = StyleSheet.create({
  productsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'space-evenly',
  },
});

export default Menu;
