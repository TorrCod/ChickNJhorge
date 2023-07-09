import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import Layout from '../layout/layout';
import {style} from '../styles/style';
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {OrderType, RootStackParamList} from '../types/navigation';
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

type ActionProps = {
  navigation: BottomTabNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
} & OrderType;

const Action = ({
  navigation,
  refNo,
  cashierName,
  customerName,
  time,
  date,
}: ActionProps) => {
  const theme = useTheme();
  const handleOnPress = () => {
    navigation.navigate('ViewOrder', {
      refNo,
      cashierName,
      customerName,
      time,
      date,
    });
  };
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Text style={{color: theme.text, ...styles.changeOrder}}>
        Change Order
      </Text>
    </TouchableOpacity>
  );
};

const Orders = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const theme = useTheme();
  const [data, setData] = useState<(string | number | ReactNode)[][]>([]);

  useEffect(() => {
    const fetchedData = dummyData;
    setData(
      orderToTableData(fetchedData).map(val => {
        const newVal = val.slice(2);
        newVal.push(
          <Action
            navigation={navigation}
            refNo={val[0]}
            customerName={val[3]}
            time={val[1]}
            cashierName={val[4]}
            date={val[2]}
          />,
        );
        return newVal.filter(val => val);
      }),
    );
  }, []);

  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <Search />
      <View>
        <Text style={{color: theme.text}}>Order</Text>
      </View>
      <Table>
        <Row
          data={['Date', 'Customer Name', 'Cashier Name', 'Sales', 'Action']}
          textStyle={{...styles.text, color: '#e4e4e4'}}
          style={{backgroundColor: theme.primary}}
        />
        <Rows textStyle={{...styles.text, color: theme.text}} data={data} />
      </Table>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  text: {margin: 6},
  changeOrder: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});

const dummyData: OrderData[] = [
  {
    orderId: '123456',
    customerName: 'John Doe',
    date: '2023-06-20',
    sales: 50.99,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
  {
    orderId: '789012',
    customerName: 'Jane Smith',
    date: '2023-06-21',
    sales: 75.5,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
  {
    orderId: '345678',
    customerName: 'Mark Johnson',
    date: '2023-06-22',
    sales: 120.75,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
  {
    orderId: '901234',
    customerName: 'Emily Davis',
    date: '2023-06-23',
    sales: 35.25,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
  {
    orderId: '567890',
    customerName: 'Michael Wilson',
    date: '2023-06-24',
    sales: 90.0,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
  {
    orderId: '234567',
    customerName: 'Sarah Thompson',
    date: '2023-06-25',
    sales: 65.8,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
  {
    orderId: '890123',
    customerName: 'David Anderson',
    date: '2023-06-26',
    sales: 105.6,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
  {
    orderId: '456789',
    customerName: 'Jennifer Brown',
    date: '2023-06-27',
    sales: 43.2,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
  {
    orderId: '012345',
    customerName: 'Christopher Taylor',
    date: '2023-06-28',
    sales: 80.15,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
  {
    orderId: '678901',
    customerName: 'Jessica Clark',
    date: '2023-06-29',
    sales: 95.99,
    cashierName: 'Jhorgina Comia',
    time: '8:30pm',
  },
];

export default Orders;
