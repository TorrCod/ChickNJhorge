import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {style} from '../styles/style';
import useTheme from '../hooks/useTheme';

const MenuTitle = ({children}: {children: ReactNode}) => {
  const theme = useTheme();
  return (
    <Text style={{...style.h1, marginTop: 10, color: theme.textPrimary}}>
      {children}
    </Text>
  );
};

export default MenuTitle;
