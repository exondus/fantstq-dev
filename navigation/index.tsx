import { useState, useEffect } from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import AuthNavigator from './auth';
import MainNavigator from './main';
import { colors } from 'constants/colors';

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    backgroundColor: colors.black,
    iconColor: colors.darkGrey,
    activeTabIconColor: colors.primary,
    textColor: colors.textColor,
  },
};

const customLightTheme = {
  ...DefaultTheme,
  colors: {
    backgroundColor: colors.lightGrey,
    iconColor: colors.darkGrey,
    activeTabIconColor: colors.secondary,
    textColor: colors.textColor,
  },
};

export default function RootNavigation() {
  const [isAuth, setIsAuth] = useState(false);
  const theme = useColorScheme();
  const state = useSelector((state) => state);

  console.log('Updated State', state);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      {isAuth ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
