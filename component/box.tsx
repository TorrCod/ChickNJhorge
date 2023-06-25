import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {theme} from '../styles/style';

type Props = {children: ReactNode};

const Box = ({children}: Props) => {
  return <View style={styles.box}>{children}</View>;
};

export default Box;

const styles = StyleSheet.create({
  box: {
    backgroundColor: theme.backgroundColor,
    padding: 20,
    borderRadius: 10,
  },
});
