import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Layout from '../layout/layout';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';
import useTheme from '../hooks/useTheme';
import DropDownPicker from 'react-native-dropdown-picker';
import MonthPicker from 'react-native-month-year-picker';
import PickerMonth from '../component/month-picker';
import Button from '../component/button';
import {SvgXml} from 'react-native-svg';
import Svg, {Defs, G, Path} from 'react-native-svg';
import {Row, Rows, Table} from 'react-native-reanimated-table';

const Transactions = ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const style = StyleSheet.create({
    pageTitle: {color: theme.text, fontSize: 18},
    sectionTitle: {color: theme.text, fontSize: 12, marginTop: 20},
    bg: {
      backgroundColor: theme.backShade,
    },
    reportWrapper: {
      justifyContent: 'flex-end',
      height: 113,
      width: '49%',
      padding: 20,
      borderRadius: 5,
    },
    reportContainer: {
      gap: 5,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    shadowProp: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    chart: {
      padding: 15,
      borderRadius: 5,
    },
    dropdown: {
      backgroundColor: '#F6F6F6',
      borderWidth: 0,
    },
    dropdownText: {
      color: theme.text,
    },
    textShadow: {
      textShadowColor: '#00000034',
      textShadowOffset: {height: 1, width: 1},
      textShadowRadius: 1,
    },
    tableHead: {
      backgroundColor: theme.primary,
      width: '100%',
      justifyContent: 'center',
      borderTopStartRadius: 5,
      borderTopRightRadius: 5,
      paddingVertical: 5,
    },
  });

  const Report = ({title, value}: {title: string; value: number}) => (
    <View style={[style.reportWrapper, style.shadowProp, style.bg]}>
      <View>
        <Text style={{color: theme.textPrimary, fontSize: 18}}>₱{value}</Text>
        <Text style={{color: theme.text, fontSize: 12}}>{title}</Text>
      </View>
    </View>
  );

  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <View>
        <Text style={style.pageTitle}>Transaction</Text>
      </View>
      <Text style={style.sectionTitle}>Report</Text>
      <View style={style.reportContainer}>
        <Report title="Revenue" value={30000} />
        <Report title="Profit" value={90000} />
        <Report title="Cost" value={50000} />
      </View>
      <Text style={style.sectionTitle}>Charts</Text>
      <View style={[style.shadowProp, style.bg, style.chart]}></View>
      <View style={{marginTop: 5}}>
        <PickerMonth />
      </View>
      <Text style={style.sectionTitle}>Breakdown</Text>
      <View style={[style.shadowProp, style.bg, style.chart, {gap: 20}]}>
        <Table>
          <Row
            data={['Date', 'Cashier Name', 'Action', 'Sales']}
            textStyle={[
              style.textShadow,
              {color: '#ffffff', fontSize: 12, textAlign: 'center'},
            ]}
            style={[style.tableHead]}
          />
          <Rows
            textStyle={{
              textAlign: 'center',
              color: theme.textPrimary,
              fontSize: 12,
            }}
            style={{paddingVertical: 5}}
            data={dummyData}
          />
        </Table>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Button onPress={() => {}} width={100}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/downloadIcon.png')} />
              <Text style={[{color: 'white'}, style.textShadow]}>CSV</Text>
            </View>
          </Button>
        </View>
      </View>
    </Layout>
  );
};

const dummyData = [
  ['2023-07-21', 'John', 'Take an order', 150.25],
  ['2023-07-21', 'Jane', 'Changed an order', -50.75],
  ['2023-07-22', 'Mike', 'Take an order', 100.0],
  ['2023-07-22', 'Emily', 'Changed an order', -25.5],
  ['2023-07-23', 'Chris', 'Take an order', 200.75],
];

export default Transactions;
