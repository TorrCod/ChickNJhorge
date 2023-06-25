import {createContext, useContext, useReducer} from 'react';

const menuStateInit: MenuState = {
  itemsOrdered: [],
  totalNumberOfOrder: 0,
  totalPrice: 0,
};

const menuValueInit: MenuValue = {
  state: menuStateInit,
  updateOrderMenu: (item: Item) => {},
  onChangeName(name) {},
};

const MenuContext = createContext<MenuValue>(menuValueInit);

const MenuReducer = (state: MenuState, action: MenuAction): MenuState => {
  switch (action.type) {
    case 'onChangeMenu': {
      const newState: MenuState = {
        ...state,
        itemsOrdered: action.payload,
        totalNumberOfOrder: action.payload.length,
        totalPrice: action.payload.reduce((sum, bundle) => {
          return sum + bundle.count * bundle.price;
        }, 0),
      };
      return newState;
    }

    default:
      return state;
  }
};

export const MenuWrapper = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(MenuReducer, menuStateInit);

  const updateOrderMenu = (item: Item) => {
    const isExist = state.itemsOrdered.filter(
      ({name}) => name === item.name,
    )[0];
    const itemIndex = state.itemsOrdered.findIndex(
      ({name}) => name === item.name,
    );
    if (!isExist && item.count > 0)
      dispatch({type: 'onChangeMenu', payload: [...state.itemsOrdered, item]});
    else if (item.count <= 0) {
      const newItemOrdered = [...state.itemsOrdered];
      newItemOrdered.splice(itemIndex, 1);
      dispatch({
        type: 'onChangeMenu',
        payload: newItemOrdered,
      });
    } else {
      const newItemOrdered = [...state.itemsOrdered];
      newItemOrdered[itemIndex] = item;
      dispatch({type: 'onChangeMenu', payload: newItemOrdered});
    }
  };

  const onChangeName = (name: string) => {
    dispatch({type: 'onChangeName', payload: name});
  };

  return (
    <MenuContext.Provider value={{state, updateOrderMenu, onChangeName}}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenuContext = () => useContext(MenuContext);

export default useMenuContext;
