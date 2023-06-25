import {NavigationContainer} from '@react-navigation/native';
import Menu from './page/menu';
import Orders from './page/orders';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgXml} from 'react-native-svg';
import Transactions from './page/transaction';
import Profile from './page/profile';
import {View} from 'react-native';
import PreOrder from './page/pre-order';
import {RootStackParamList} from './types/navigation';
import {MenuWrapper} from './context/menuContext';
import useTheme from './hooks/useTheme';

const Tab = createBottomTabNavigator<RootStackParamList>();

function App() {
  return (
    <MenuWrapper>
      <NavScreen />
    </MenuWrapper>
  );
}

const NavScreen = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Menu"
        screenOptions={{
          tabBarActiveTintColor: 'rgba(0, 0, 0, 0.1)',
        }}>
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
            tabBarIcon: tabBarProps => (
              <TabBarIcon {...tabBarProps} xml={menuSvg} />
            ),
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 39,
              backgroundColor: theme.backShade,
            },
          }}
        />
        <Tab.Screen
          name="Order"
          component={Orders}
          options={{
            headerShown: false,
            tabBarIcon: tabBarProps => (
              <TabBarIcon {...tabBarProps} xml={orderSvg} />
            ),
            tabBarShowLabel: false,
            tabBarStyle: {height: 39, backgroundColor: theme.backShade},
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={Transactions}
          options={{
            headerShown: false,
            tabBarIcon: tabBarProps => (
              <TabBarIcon {...tabBarProps} xml={transactionSvg} />
            ),
            tabBarShowLabel: false,
            tabBarStyle: {height: 39, backgroundColor: theme.backShade},
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: tabBarProps => (
              <TabBarIcon {...tabBarProps} xml={profileSvg} />
            ),
            tabBarShowLabel: false,
            tabBarStyle: {height: 39, backgroundColor: theme.backShade},
          }}
        />
        <Tab.Screen
          name="PreOrder"
          component={PreOrder}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarButton: () => null,
            tabBarStyle: {height: 39, backgroundColor: theme.backShade},
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
  xml: string;
};

const TabBarIcon = (props: TabBarIconProps) => {
  const theme = useTheme();
  return (
    <View
      style={{
        paddingHorizontal: 42,
        paddingVertical: 11,
        backgroundColor: props.focused ? props.color : undefined,
        borderRadius: 3,
      }}>
      <SvgXml color={theme.text} xml={props.xml} />
    </View>
  );
};

const menuSvg = `<svg width="19" height="19" viewBox="0 0 19 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<rect width="8.70833" height="8.70833" fill="currentColor"/>
<rect y="10.2916" width="8.70833" height="8.70833" fill="currentColor"/>
<rect x="10.2917" width="8.70833" height="8.70833" fill="currentColor"/>
<rect x="10.2917" y="10.2916" width="8.70833" height="8.70833" fill="currentColor"/>
</svg>
`;

const orderSvg = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.81 5.99386L11.06 2.75528L2 10.5797V13.8183H5.75L14.81 5.99386ZM4 12.091V11.2965L11.06 5.19933L11.98 5.99386L4.92 12.091H4ZM17.71 3.48936C17.8027 3.40946 17.8762 3.31456 17.9264 3.21009C17.9766 3.10561 18.0024 2.99362 18.0024 2.88051C18.0024 2.7674 17.9766 2.6554 17.9264 2.55093C17.8762 2.44645 17.8027 2.35155 17.71 2.27166L15.37 0.250781C15.1825 0.0901403 14.9291 0 14.665 0C14.4009 0 14.1475 0.0901403 13.96 0.250781L12.13 1.83121L15.88 5.06979L17.71 3.48936ZM0 15.5455H20V19H0V15.5455Z" fill="currentColor"/>
</svg>
`;

const transactionSvg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 5.54171H15.25M12.0833 1.58337L16.0417 5.54171L12.0833 9.50004M16.8333 13.4584H2.58333M5.75 9.50004L1.79167 13.4584L5.75 17.4167" stroke="currentColor" stroke-width="2"/>
</svg>
`;

const profileSvg = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10.5" cy="10.5" r="10.5" fill="#7B7B7B"/>
</svg>
`;

export default App;
