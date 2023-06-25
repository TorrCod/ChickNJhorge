type MenuState = {
  itemsOrdered: Item[];
  totalNumberOfOrder: number;
};

type Item = {name: string; price: number; count: number};

type MenuAction = {type: 'onChangeMenu'; payload: Item[]};

type MenuValue = {
  state: MenuState;
  updateOrderMenu: (item: Item) => void;
};
