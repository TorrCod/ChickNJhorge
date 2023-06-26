import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../layout/layout';
import {style} from '../styles/style';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';
import Search from '../component/search';
import useTheme from '../hooks/useTheme';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

const Orders = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const theme = useTheme();
  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <Search />
      <View>
        <Text style={{color: theme.text}}>Order</Text>
      </View>
      <Table>
        <Row
          data={['Date', 'Customer Name', 'Cashier Name', 'Pesos', 'Action']}
        />
      </Table>
    </Layout>
  );
};

export default Orders;
