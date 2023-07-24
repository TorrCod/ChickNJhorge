import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  DrawerLayoutAndroid,
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
import {useEffect, useRef, useState} from 'react';
import {style} from '../styles/style';
import Modal from '../component/modal';
import Input from '../component/Input';
import Product from '../component/product';
import MenuTitle from '../component/title';
import {MenuDummy} from './menu';
import useMenuContext from '../context/menuContext';
import Box from '../component/box';

type ItemOrdered = {itemName: string; qty: number; price: number};

const ViewOder = ({
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
  const drawerRef = useRef<DrawerLayoutAndroid>(null);
  const [items, setItems] = useState<ItemOrdered[]>([]);
  const [defaultItem, setDefaultItem] = useState<ItemOrdered[]>([]);

  useEffect(() => {
    const fetchItem = [...dummyData];
    setItems(JSON.parse(JSON.stringify(fetchItem)));
    setDefaultItem(JSON.parse(JSON.stringify(fetchItem)));
  }, []);
  const onAddItem = ({name, price}: {name: string; price: number}) => {
    const isItemExist = items.filter(({itemName}) => itemName === name)[0];
    if (isItemExist) {
      setItems(oldState =>
        oldState.map(item => {
          if (item.itemName === isItemExist.itemName) {
            item.qty = item.qty + 1;
            return item;
          }
          return item;
        }),
      );
    } else {
      setItems(item => [...item, {itemName: name, qty: 1, price}]);
    }
  };
  const onRemoveItem = ({name}: {name: string; price: number}) =>
    handleRemoveItem(name);
  const handleRemoveItem = (itemName: string) => {
    const item = Array.from(items)
      .map((val, index) => {
        if (val.itemName != itemName) return val;
        val.qty = val.qty - 1;
        if (val.qty > 0) {
          return val;
        }
      })
      .filter(val => val) as ItemOrdered[];
    setItems(item);
  };
  const onCancelChangeOrder = () => {
    setOnSuccess(false);
    setItems(defaultItem);
  };

  const onChangePin = (val: string) => {
    if (val.length === 6) {
      setModalVisible(false);
      setOnSuccess(true);
    }
  };

  const drawerView = () => (
    <ScrollView style={backgroundStyle}>
      <View style={{padding: 15}}>
        <View>
          <Text style={{color: theme.textPrimary, fontSize: 16}}>Menu</Text>
        </View>
        {MenuDummy.map(({section, menu}, index) => (
          <View key={index}>
            <MenuTitle>{section}</MenuTitle>
            <View style={menuStyle.productsContainer}>
              {menu.map(component => {
                const productCount = items.filter(
                  val => val.itemName === component.name,
                )[0]?.qty;

                return (
                  <Product
                    name={component.name}
                    price={component.price}
                    onAddItem={onAddItem}
                    onRemoveItem={onRemoveItem}
                    productCount={productCount ?? 0}
                    key={component.name + ' ' + index}
                  />
                );
              })}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  return (
    <>
      <DrawerLayoutAndroid
        ref={drawerRef}
        renderNavigationView={drawerView}
        drawerWidth={300}>
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
                Order {'>'} {params?.refNo}
              </Text>
            </View>

            <Text
              style={{
                color: theme.textPrimary,
                marginTop: 10,
              }}>
              Details
            </Text>
            <Box paddingH={20} paddingV={20}>
              <View style={{...styles.container}}>
                <View style={styles.item}>
                  <Text style={{color: theme.text, ...styles.tag}}>
                    Reference No.
                  </Text>
                  <Text style={{color: theme.textPrimary}}>
                    {params?.refNo}
                  </Text>
                </View>

                <View style={styles.item}>
                  <Text style={{color: theme.text, ...styles.tag}}>
                    Customer
                  </Text>
                  <Text style={{color: theme.textPrimary}}>
                    {params?.customerName}
                  </Text>
                </View>

                <View style={styles.item}>
                  <Text style={{color: theme.text, ...styles.tag}}>Total</Text>
                  <Text style={{color: theme.textPrimary}}>
                    ₱
                    {Math.round(
                      items
                        .map(val => val.qty * val.price)
                        ?.reduce((a, b) => a + b, 0),
                    )}
                  </Text>
                </View>

                <View style={styles.item}>
                  <Text style={{color: theme.text, ...styles.tag}}>
                    Cashier
                  </Text>
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
            </Box>
            <Text
              style={{
                color: theme.textPrimary,
                marginTop: 10,
              }}>
              Items
            </Text>
            <Box paddingH={20} paddingV={20}>
              <Table style={styles.tableContainer}>
                <Row
                  style={{
                    ...styles.tableHead,
                    borderBottomColor: theme.text,
                  }}
                  textStyle={{textAlign: 'center', color: theme.text}}
                  data={['Items', 'Qty', 'Price']}
                />
                {items.map((ItemOrdered, index) => {
                  return (
                    <Row
                      textStyle={{
                        textAlign: 'center',
                        color: theme.textPrimary,
                      }}
                      key={index}
                      data={
                        onSuccess
                          ? Object.values(ItemOrdered).map((child, index) =>
                              !index ? (
                                <View
                                  style={{
                                    alignSelf: 'flex-start',
                                    flexDirection: 'row',
                                    gap: 5,
                                  }}>
                                  <TouchableOpacity
                                    onPress={() =>
                                      handleRemoveItem(ItemOrdered.itemName)
                                    }>
                                    <SvgXml
                                      color={theme.text}
                                      xml={minusIconXml}
                                      width={20}
                                      height={20}
                                    />
                                  </TouchableOpacity>
                                  <Text style={{color: theme.textPrimary}}>
                                    {child}
                                  </Text>
                                </View>
                              ) : (
                                child
                              ),
                            )
                          : Object.values(ItemOrdered)
                      }
                    />
                  );
                })}
                <Row
                  textStyle={{
                    textAlign: 'center',
                    color: theme.textPrimary,
                  }}
                  style={{display: onSuccess ? undefined : 'none'}}
                  data={[
                    <View
                      style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
                        gap: 5,
                      }}>
                      <TouchableOpacity
                        onPress={() => drawerRef.current?.openDrawer()}>
                        <SvgXml
                          color={theme.text}
                          xml={addIconXml}
                          width={20}
                          height={20}
                        />
                      </TouchableOpacity>
                    </View>,
                    '',
                    '',
                  ]}
                />
              </Table>
            </Box>
            <View style={{marginVertical: 10, alignItems: 'flex-end'}}>
              {onSuccess ? (
                <View style={{flexDirection: 'row', gap: 5}}>
                  <Button
                    onPress={() => onCancelChangeOrder()}
                    type="secondary">
                    <Text style={{color: theme.primary}}>Cancel</Text>
                  </Button>
                  <Button onPress={() => setOnSuccess(false)}>
                    <Text style={[{color: 'white'}, menuStyle.textShadow]}>
                      Save
                    </Text>
                  </Button>
                </View>
              ) : (
                <Button width={150} onPress={() => setModalVisible(true)}>
                  <Text style={[{color: 'white'}, menuStyle.textShadow]}>
                    Change Order
                  </Text>
                </Button>
              )}
            </View>
          </View>
        </ScrollView>

        <Modal
          hideButton
          title="Confirm Change Order"
          modalVisible={modalVisible}
          onCancel={() => setModalVisible(false)}>
          <View style={{height: 30, width: 250}}>
            <Input placeHolder="PIN" onChangeText={onChangePin} />
          </View>
        </Modal>
      </DrawerLayoutAndroid>
    </>
  );
};

const menuStyle = StyleSheet.create({
  productsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'space-evenly',
  },
  textShadow: {
    textShadowColor: '#00000034',
    textShadowOffset: {height: 1, width: 1},
    textShadowRadius: 1,
  },
});

const backIconXml = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>`;
const minusIconXml = `<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="22" height="20" rx="4.5" stroke="currentColor" stroke-opacity="0.7"/>
<line x1="4" y1="10.5" x2="19" y2="10.5" stroke="currentColor" stroke-opacity="0.7"/>
</svg>`;
const addIconXml = `<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="22" height="20" rx="4.5" stroke="currentColor" stroke-opacity="0.7"/>
<line x1="11.5" y1="3" x2="11.5" y2="18" stroke="currentColor" stroke-opacity="0.7"/>
<line x1="4" y1="10.5" x2="19" y2="10.5" stroke="currentColor" stroke-opacity="0.7"/>
</svg>
`;

const dummyData = [
  {itemName: 'Chicken W/ Unli Rice', qty: 2, price: 79},
  {itemName: 'Half Chicken', qty: 2, price: 80},
  {itemName: 'Coke', qty: 2, price: 20},
  {itemName: 'Gravy', qty: 4, price: 10},
];

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

export default ViewOder;
