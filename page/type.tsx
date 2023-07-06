import {ReactNode} from 'react';

export type OrderData = {
  orderId: string;
  date: string;
  customerName: string;
  sales: number;
  cashierName: string;
  action?: ReactNode;
};
