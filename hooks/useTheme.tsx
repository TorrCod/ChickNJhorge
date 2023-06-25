import {View, Text, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const themeInit = {
    backShade: '#D9D9D9',
  };
  const [theme, setTheme] = useState(themeInit);
  useEffect(() => {
    if (isDarkMode) setTheme({...theme, backShade: '#585858'});
    else setTheme(themeInit);
  }, [isDarkMode]);

  return theme;
};

export default useTheme;
