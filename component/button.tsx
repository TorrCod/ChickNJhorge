import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {style} from '../styles/style';

type Props = {children: ReactNode};

const Button = ({children}: Props) => {
  return <TouchableOpacity style={style.button}>{children}</TouchableOpacity>;
};
export default Button;
