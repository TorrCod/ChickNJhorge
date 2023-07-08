import {View, Text, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const themeInit = {
    backGround: Colors.lighter,
    backShade: '#D9D9D9',
    text: 'rgba(0, 0, 0, 0.5)',
    textPrimary: 'rgba(0,0,0,1)',
    primary: '#2f120d',
  };
  const [theme, setTheme] = useState(themeInit);
  useEffect(() => {
    if (isDarkMode)
      setTheme({
        ...theme,
        backShade: '#585858',
        text: 'rgba(255, 255, 255, 0.5)',
        textPrimary: 'rgba(255, 255, 255,1)',
        backGround: Colors.darker,
        primary: '#835d25',
      });
    else setTheme(themeInit);
  }, [isDarkMode]);

  return theme;
};

export default useTheme;
