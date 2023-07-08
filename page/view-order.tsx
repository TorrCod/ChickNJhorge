import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import Layout from '../layout/layout';
import useTheme from '../hooks/useTheme';
import Search from '../component/search';
import {style} from '../styles/style';
import {SvgXml} from 'react-native-svg';

export default ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const theme = useTheme();
  const onPressBack = () => {
    navigation.navigate('Order');
  };
  return (
    <View style={styles.screen}>
      <View style={styles.headNav}>
        <TouchableOpacity onPress={onPressBack}>
          <SvgXml
            color={theme.textPrimary}
            fill={theme.textPrimary}
            xml={backIconXml}
            width={25}
            height={25}
          />
        </TouchableOpacity>

        <Text style={{color: theme.textPrimary, ...styles.head}}>
          View Order {'>'} OrderId
        </Text>
      </View>
      <View style={{...styles.mainContainer, backgroundColor: theme.backShade}}>
        <Text
          style={{
            color: theme.textPrimary,
            ...styles.head,
          }}>
          Order Details
        </Text>
        <View style={{...styles.container}}>
          <View style={styles.item}>
            <Text style={{color: theme.text, ...styles.tag}}>
              Reference No.
            </Text>
            <Text style={{color: theme.textPrimary}}>21654981231842181</Text>
          </View>

          <View style={styles.item}>
            <Text style={{color: theme.text, ...styles.tag}}>Customer</Text>
            <Text style={{color: theme.textPrimary}}>Paolo Kempis</Text>
          </View>

          <View style={styles.item}>
            <Text style={{color: theme.text, ...styles.tag}}>Total</Text>
            <Text style={{color: theme.textPrimary}}>₱300.00</Text>
          </View>

          <View style={styles.item}>
            <Text style={{color: theme.text, ...styles.tag}}>Cashier</Text>
            <Text style={{color: theme.textPrimary}}>Jhorginia Kempis</Text>
          </View>

          <View style={styles.item}>
            <Text style={{color: theme.text, ...styles.tag}}>Date</Text>
            <Text style={{color: theme.textPrimary}}>18/06/2023</Text>
          </View>

          <View style={styles.item}>
            <Text style={{color: theme.text, ...styles.tag}}>Time</Text>
            <Text style={{color: theme.textPrimary}}>6:23:32 am</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const backIconXml = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>`;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    borderRadius: 10,
    gap: 15,
    marginTop: 15,
  },
  screen: {padding: 5},
  headNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  head: {
    fontSize: 18,
  },
  tag: {
    fontSize: 11,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '50%',
    height: 50,
  },
});
