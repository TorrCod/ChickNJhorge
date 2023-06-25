import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../layout/layout';
import {style} from '../styles/style';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';
import Search from '../component/search';

const Orders = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <Search />
      <View style={{...style.center}}>
        <Text>Order</Text>
      </View>
    </Layout>
  );
};

export default Orders;
