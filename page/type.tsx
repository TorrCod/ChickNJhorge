import {ReactNode} from 'react';

export type OrderData = {
  orderId: string;
  date: string;
  time: string;
  customerName: string;
  cashierName: string;
  sales: number;
  action?: ReactNode;
};
