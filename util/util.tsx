import {OrderData} from '../page/type';

export function orderToTableData(orderData: OrderData[]) {
  const twoDArray: (string | number | React.ReactNode)[][] = [];

  orderData.forEach(order => {
    const {date, customerName, sales, cashierName, orderId} = order;
    const orderArray = [orderId, date, customerName, cashierName, sales];
    twoDArray.push(orderArray);
  });

  return twoDArray;
}
