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
      <View style={[style.shadowProp, style.bg, style.chart]}>
        <PickerMonth />
      </View>
      <Text style={style.sectionTitle}>Breakdown</Text>
      <View style={[style.shadowProp, style.bg, style.chart]}>
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
    </Layout>
  );
};

const downloadXml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
    <feOffset dx="1" dy="1" result="offsetBlur" />
    <feFlood flood-color="rgba(0, 0, 0, 0.5)" />
    <feComposite in2="offsetBlur" operator="in" />
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>
<g filter="url(#dropShadow)">
  <path d="M3 17C2.45 17 1.979 16.804 1.587 16.412C1.195 16.02 0.999335 15.5493 1 15V12H3V15H15V12H17V15C17 15.55 16.804 16.021 16.412 16.413C16.02 16.805 15.5493 17.0007 15 17H3ZM9 13L4 8L5.4 6.55L8 9.15V1H10V9.15L12.6 6.55L14 8L9 13Z" fill="currentColor" />
</g>
</svg>
`;

export default Transactions;
