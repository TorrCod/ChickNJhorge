import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
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
} from 'react-native-reanimated-table';
import {OrderData} from './type';
import {orderToTableData} from '../util/util';

const Orders = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const theme = useTheme();
  const [data, setData] = useState<(string | number)[][]>([]);

  useEffect(() => {
    const fetchedData = dummyData;
    setData(orderToTableData(fetchedData));
  }, []);

  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <Search />
      <View>
        <Text style={{color: theme.text}}>Order</Text>
      </View>
      <Table>
        <Row
          data={['Date', 'Customer Name', 'Cashier Name', 'Pesos', 'Action']}
          textStyle={styles.text}
          style={styles.head}
        />
        <Rows textStyle={styles.text} data={data} />
      </Table>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  head: {backgroundColor: '#000000'},
  text: {margin: 6},
});

const dummyData: OrderData[] = [
  {
    orderId: '123456',
    customerName: 'John Doe',
    date: '2023-06-20',
    peso: 50.99,
    cashierName: 'Jhorgina Comia',
  },
  {
    orderId: '789012',
    customerName: 'Jane Smith',
    date: '2023-06-21',
    peso: 75.5,
    cashierName: 'Jhorgina Comia',
  },
  {
    orderId: '345678',
    customerName: 'Mark Johnson',
    date: '2023-06-22',
    peso: 120.75,
    cashierName: 'Jhorgina Comia',
  },
  {
    orderId: '901234',
    customerName: 'Emily Davis',
    date: '2023-06-23',
    peso: 35.25,
    cashierName: 'Jhorgina Comia',
  },
  {
    orderId: '567890',
    customerName: 'Michael Wilson',
    date: '2023-06-24',
    peso: 90.0,
    cashierName: 'Jhorgina Comia',
  },
  {
    orderId: '234567',
    customerName: 'Sarah Thompson',
    date: '2023-06-25',
    peso: 65.8,
    cashierName: 'Jhorgina Comia',
  },
  {
    orderId: '890123',
    customerName: 'David Anderson',
    date: '2023-06-26',
    peso: 105.6,
    cashierName: 'Jhorgina Comia',
  },
  {
    orderId: '456789',
    customerName: 'Jennifer Brown',
    date: '2023-06-27',
    peso: 43.2,
    cashierName: 'Jhorgina Comia',
  },
  {
    orderId: '012345',
    customerName: 'Christopher Taylor',
    date: '2023-06-28',
    peso: 80.15,
    cashierName: 'Jhorgina Comia',
  },
  {
    orderId: '678901',
    customerName: 'Jessica Clark',
    date: '2023-06-29',
    peso: 95.99,
    cashierName: 'Jhorgina Comia',
  },
];

export default Orders;
