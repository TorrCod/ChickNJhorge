import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import useTheme from '../hooks/useTheme';
import {SvgXml} from 'react-native-svg';
import {Row, Table} from 'react-native-reanimated-table';
import Button from '../component/button';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useState} from 'react';
import {style} from '../styles/style';
import Modal from '../component/modal';
import Input from '../component/Input';

export default ({
  navigation,
  route,
}: BottomTabScreenProps<RootStackParamList>) => {
  const theme = useTheme();
  const params = route.params;
  const onPressBack = () => {
    navigation.navigate('Order');
  };
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  const handlePinOk = () => {
    setModalVisible(false);
    setOnSuccess(true);
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        ...backgroundStyle,
        height: '100%',
      }}>
      <View
        style={{
          ...styles.screen,
        }}>
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
            View Order {'>'} {params?.refNo}
          </Text>
        </View>
        <View
          style={{...styles.mainContainer, backgroundColor: theme.backShade}}>
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
              <Text style={{color: theme.textPrimary}}>{params?.refNo}</Text>
            </View>

            <View style={styles.item}>
              <Text style={{color: theme.text, ...styles.tag}}>Customer</Text>
              <Text style={{color: theme.textPrimary}}>
                {params?.customerName}
              </Text>
            </View>

            <View style={styles.item}>
              <Text style={{color: theme.text, ...styles.tag}}>Total</Text>
              <Text style={{color: theme.textPrimary}}>₱300.00</Text>
            </View>

            <View style={styles.item}>
              <Text style={{color: theme.text, ...styles.tag}}>Cashier</Text>
              <Text style={{color: theme.textPrimary}}>
                {params?.cashierName}
              </Text>
            </View>

            <View style={styles.item}>
              <Text style={{color: theme.text, ...styles.tag}}>Date</Text>
              <Text style={{color: theme.textPrimary}}>{params?.date}</Text>
            </View>

            <View style={styles.item}>
              <Text style={{color: theme.text, ...styles.tag}}>Time</Text>
              <Text style={{color: theme.textPrimary}}>{params?.time}</Text>
            </View>
          </View>

          <Table style={styles.tableContainer}>
            {onSuccess ? (
              <>
                <Row
                  style={{...styles.tableHead, borderBottomColor: theme.text}}
                  textStyle={{textAlign: 'center', color: theme.text}}
                  data={['Items', 'Qty', 'Price']}
                />
                <Row
                  textStyle={{textAlign: 'center', color: theme.textPrimary}}
                  data={[
                    <View
                      style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
                        gap: 5,
                      }}>
                      <TouchableOpacity>
                        <SvgXml xml={minusIconXml} width={20} height={20} />
                      </TouchableOpacity>
                      <Text style={{color: theme.textPrimary}}>Item1</Text>
                    </View>,
                    ,
                    'x1',
                    '100.00',
                  ]}
                />
                <Row
                  textStyle={{textAlign: 'center', color: theme.textPrimary}}
                  data={[
                    <View
                      style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
                        gap: 5,
                      }}>
                      <TouchableOpacity>
                        <SvgXml xml={minusIconXml} width={20} height={20} />
                      </TouchableOpacity>
                      <Text style={{color: theme.textPrimary}}>Item2</Text>
                    </View>,
                    ,
                    'x1',
                    '100.00',
                  ]}
                />
                <Row
                  textStyle={{textAlign: 'center', color: theme.textPrimary}}
                  data={[
                    <View
                      style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
                        gap: 5,
                      }}>
                      <TouchableOpacity>
                        <SvgXml xml={minusIconXml} width={20} height={20} />
                      </TouchableOpacity>
                      <Text style={{color: theme.textPrimary}}>Item3</Text>
                    </View>,
                    ,
                    'x1',
                    '100.00',
                  ]}
                />

                <Row
                  textStyle={{textAlign: 'center', color: theme.textPrimary}}
                  data={[
                    <View
                      style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
                        gap: 5,
                      }}>
                      <TouchableOpacity>
                        <SvgXml xml={addIconXml} width={20} height={20} />
                      </TouchableOpacity>
                    </View>,
                    ,
                    '',
                    '',
                  ]}
                />
              </>
            ) : (
              <>
                <Row
                  style={{...styles.tableHead, borderBottomColor: theme.text}}
                  textStyle={{textAlign: 'center', color: theme.text}}
                  data={['Items', 'Qty', 'Price']}
                />
                <Row
                  textStyle={{textAlign: 'center', color: theme.textPrimary}}
                  data={['Item1', 'x1', '100.00']}
                />
                <Row
                  textStyle={{textAlign: 'center', color: theme.textPrimary}}
                  data={['Item2', 'x1', '100.00']}
                />
                <Row
                  textStyle={{textAlign: 'center', color: theme.textPrimary}}
                  data={['Item3', 'x1', '100.00']}
                />
              </>
            )}
          </Table>

          <View
            style={{
              alignItems: 'flex-end',
              width: '100%',
            }}>
            <View style={{width: 150}}>
              {onSuccess ? (
                <View style={{flexDirection: 'row', gap: 5}}>
                  <Button onPress={() => setOnSuccess(false)} type="secondary">
                    <Text style={{color: theme.textPrimary}}>Cancel</Text>
                  </Button>
                  <Button onPress={() => setOnSuccess(false)}>
                    <Text style={{color: 'rgba(255,255,255,0.8)'}}>Save</Text>
                  </Button>
                </View>
              ) : (
                <Button onPress={() => setModalVisible(true)}>
                  <Text style={{color: 'rgba(255,255,255,0.8)'}}>
                    Change Order
                  </Text>
                </Button>
              )}
            </View>
          </View>
        </View>
      </View>
      <Modal
        title="Confirm Change Order"
        modalVisible={modalVisible}
        onOk={handlePinOk}
        onCancel={() => setModalVisible(false)}>
        <View style={{gap: 5}}>
          <Text style={{color: theme.text}}>Input Pin</Text>
          <View style={{height: 30, width: 250}}>
            <Input placeHolder="PIN" />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const backIconXml = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>`;
const minusIconXml = `<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="22" height="20" rx="4.5" stroke="black" stroke-opacity="0.7"/>
<line x1="4" y1="10.5" x2="19" y2="10.5" stroke="black" stroke-opacity="0.7"/>
</svg>`;
const addIconXml = `<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="22" height="20" rx="4.5" stroke="black" stroke-opacity="0.7"/>
<line x1="11.5" y1="3" x2="11.5" y2="18" stroke="black" stroke-opacity="0.7"/>
<line x1="4" y1="10.5" x2="19" y2="10.5" stroke="black" stroke-opacity="0.7"/>
</svg>
`;

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
  tableContainer: {gap: 20},
  tableHead: {borderBottomWidth: 2},
});
