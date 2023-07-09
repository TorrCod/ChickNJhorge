import {View, Text} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import CircleCount from './circle-number';
import useMenuContext from '../context/menuContext';
import useTheme from '../hooks/useTheme';

const xml = `
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
`;
type Props = {isFocused?: boolean};
const Cart = ({isFocused}: Props) => {
  const menuCtx = useMenuContext();
  const theme = useTheme();
  return (
    <View>
      <SvgXml color={theme.textPrimary} xml={xml} width={25} height={25} />
      {menuCtx.state.totalNumberOfOrder !== 0 && (
        <View style={{position: 'absolute', top: -5, right: -10}}>
          <CircleCount backgroundColor="red">
            {menuCtx.state.totalNumberOfOrder}
          </CircleCount>
        </View>
      )}
    </View>
  );
};

export default Cart;
