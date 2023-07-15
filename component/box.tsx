import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import useTheme from '../hooks/useTheme';

type Props = {children: ReactNode; paddingH?: number; paddingV?: number};

const Box = ({children, paddingV, paddingH}: Props) => {
  const defaultTheme = useTheme();

  const styles = StyleSheet.create({
    box: {
      borderRadius: 10,
      paddingVertical: paddingV ?? 10,
      paddingHorizontal: paddingH ?? 20,
    },
  });

  return (
    <View style={{...styles.box, backgroundColor: defaultTheme.backShade}}>
      {children}
    </View>
  );
};

export default Box;
