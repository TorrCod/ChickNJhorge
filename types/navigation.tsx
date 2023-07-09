import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Menu: undefined;
  Order: undefined;
  Transaction: undefined;
  Profile: undefined;
  PreOrder: undefined;
  ViewOrder: OrderType;
};

export type OrderType = {
  refNo: string;
  customerName: string;
  cashierName: string;
  time: string;
  date: string;
};
