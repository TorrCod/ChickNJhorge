type MenuState = {
  itemsOrdered: Item[];
  totalNumberOfOrder: number;
  totalPrice: number;
  customerName?: string;
};

type Item = {name: string; price: number; count: number};

type MenuAction =
  | {type: 'onChangeMenu'; payload: Item[]}
  | {type: 'onChangeName'; payload: string};

type MenuValue = {
  state: MenuState;
  updateOrderMenu: (item: Item) => void;
  onChangeName: (name: string) => void;
};
