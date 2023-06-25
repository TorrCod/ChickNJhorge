import {View, Text, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const themeInit = {
    backShade: '#D9D9D9',
    text: 'rgba(0, 0, 0, 0.8)',
    textPrimary: 'rgba(0,0,0,1)',
  };
  const [theme, setTheme] = useState(themeInit);
  useEffect(() => {
    if (isDarkMode)
      setTheme({
        ...theme,
        backShade: '#585858',
        text: 'rgba(255, 255, 255, 0.8)',
        textPrimary: 'rgba(255, 255, 255,1)',
      });
    else setTheme(themeInit);
  }, [isDarkMode]);

  return theme;
};

export default useTheme;
