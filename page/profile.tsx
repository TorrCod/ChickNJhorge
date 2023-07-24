import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../layout/layout';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/navigation';
import Search from '../component/search';
import useTheme from '../hooks/useTheme';
import Box from '../component/box';
import {Image} from 'react-native-svg';
import Button from '../component/button';
import {Table, Row, Rows} from 'react-native-reanimated-table';

export default function Profile({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) {
  const theme = useTheme();
  const style = StyleSheet.create({
    pageTitle: {color: theme.text, fontSize: 18},
    profileContainer: {
      flexDirection: 'row',
      gap: 10,
    },
    profile: {
      height: 100,
      width: 100,
      borderRadius: 50,
      backgroundColor: '#CBCBCB',
    },
    text: {
      color: theme.text,
    },
    textPrimary: {
      color: theme.textPrimary,
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
  return (
    <Layout onCartPress={() => navigation.navigate('PreOrder')}>
      <View>
        <Text style={style.pageTitle}>Profile</Text>
      </View>
      <Box>
        <View style={[style.profileContainer]}>
          <View style={[style.profile]}></View>
          <View style={{gap: 10}}>
            <View>
              <Text style={[style.textPrimary, {fontSize: 18}]}>
                Jhorginia Kempis
              </Text>
              <Text style={[style.text]}>Cashier</Text>
            </View>
            <Button type="danger" onPress={() => {}} width={100}>
              <Text style={[{color: 'white'}, style.textShadow]}>Logout</Text>
            </Button>
          </View>
        </View>
      </Box>
      <View style={[{flexDirection: 'row', gap: 10, marginVertical: 10}]}>
        <View style={{flexGrow: 1}}>
          <Box paddingV={30}>
            <Text style={[style.textPrimary, {fontSize: 18}]}>P2300</Text>
            <Text style={{position: 'absolute', bottom: 10, left: 20}}>
              Sales
            </Text>
          </Box>
        </View>
        <View style={{flexGrow: 1}}>
          <Box paddingV={30}>
            <Text style={[style.textPrimary, {fontSize: 18}]}>P3,250</Text>
            <Text style={{position: 'absolute', bottom: 10, left: 20}}>
              Revenue
            </Text>
          </Box>
        </View>
      </View>
      <View>
        <Text style={style.pageTitle}>History</Text>
      </View>
      <Box>
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
      </Box>
    </Layout>
  );
}

const dummyData = [
  ['2023-07-21', 'John', 'Take an order', 150.25],
  ['2023-07-21', 'Jane', 'Changed an order', -50.75],
  ['2023-07-22', 'Mike', 'Take an order', 100.0],
  ['2023-07-22', 'Emily', 'Changed an order', -25.5],
  ['2023-07-23', 'Chris', 'Take an order', 200.75],
];

const styles = StyleSheet.create({});
