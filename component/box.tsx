import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import useTheme from '../hooks/useTheme';

type Props = {children: ReactNode};

const Box = ({children}: Props) => {
  const defaultTheme = useTheme();
  return (
    <View style={{...styles.box, backgroundColor: defaultTheme.backShade}}>
      {children}
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    padding: 20,
    borderRadius: 10,
  },
});
