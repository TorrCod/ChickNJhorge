import {OrderData} from '../page/type';

export function orderToTableData(orderData: OrderData[]) {
  const twoDArray: (string | number | React.ReactNode)[][] = [];

  orderData.forEach(order => {
    const {date, customerName, peso, cashierName, orderId} = order;
    const orderArray = [orderId, date, customerName, cashierName, peso];
    twoDArray.push(orderArray);
  });

  return twoDArray;
}
