import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {style} from '../styles/style';

const MenuTitle = ({children}: {children: ReactNode}) => {
  return <Text style={{...style.h1, marginTop: 10}}>{children}</Text>;
};

export default MenuTitle;
