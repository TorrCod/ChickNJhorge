import {OrderData} from '../page/type';

export function orderToTableData(orderData: OrderData[]) {
  const twoDArray: (string | number)[][] = [];

  orderData.forEach(order => {
    const {date, customerName, peso, cashierName} = order;
    const orderArray = [date, customerName, cashierName, peso];
    twoDArray.push(orderArray);
  });

  return twoDArray;
}
