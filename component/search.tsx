import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {style} from '../styles/style';
import {SvgXml} from 'react-native-svg';
import useTheme from '../hooks/useTheme';

const Search = () => {
  const theme = useTheme();
  return (
    <View style={style.center}>
      <View
        style={{
          ...style.input,
          paddingLeft: 10,
          backgroundColor: theme.backShade,
        }}>
        <SvgXml xml={xml} width={15} height={15} color={'rgba(0, 0, 0, 0.8)'} />
        <TextInput style={{padding: 5}} placeholder="Search Product" />
      </View>
    </View>
  );
};

const xml = `
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
`;

export default Search;
