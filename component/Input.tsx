import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {ReactNode} from 'react';
import useTheme from '../hooks/useTheme';
import {style} from '../styles/style';

type Props = {icon?: ReactNode; placeHolder?: string};

const Component = (props: Props) => {
  const theme = useTheme();
  return (
    <View
      style={{
        ...style.input,
        paddingLeft: 10,
        backgroundColor: theme.backShade,
        width: '100%',
      }}>
      {props.icon ?? <></>}
      <TextInput
        style={{padding: 5, color: theme.textPrimary, width: '100%'}}
        placeholderTextColor={theme.text}
        placeholder={props.placeHolder}
        keyboardType="numeric"
        secureTextEntry={true}
        maxLength={6}
      />
    </View>
  );
};

export default Component;

const styles = StyleSheet.create({});
