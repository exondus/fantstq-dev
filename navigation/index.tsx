import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import AuthNavigator from './auth';
import MainNavigator from './main';

import { RootState } from 'store/index';

export default function RootNavigation() {
  const theme = useColorScheme();
  // const state = useSelector((state: RootState) => state.theme);
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      {isLoggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
