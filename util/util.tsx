import {ReactNode} from 'react';
import {OrderData} from '../page/type';

export function orderToTableData(orderData: OrderData[]) {
  const twoDArray: [
    string,
    string,
    string,
    string,
    string,
    number,
    ReactNode | undefined,
  ][] = [];

  orderData.forEach(order => {
    const {date, customerName, sales, cashierName, orderId, time} = order;
    const orderArray = [
      orderId,
      time,
      date,
      customerName,
      cashierName,
      sales,
      undefined,
    ] as [string, string, string, string, string, number, undefined];
    twoDArray.push(orderArray);
  });
  return twoDArray;
}
