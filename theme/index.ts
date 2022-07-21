import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { colors } from 'constants/colors';

export const customDarkTheme = {
  ...DarkTheme,
  colors: {
    backgroundColor: colors.black,
    iconColor: colors.darkGrey,
    activeTabIconColor: colors.primary,
    textColor: colors.textColor,
  },
};

export const customLightTheme = {
  ...DefaultTheme,
  colors: {
    backgroundColor: colors.lightGrey,
    iconColor: colors.darkGrey,
    activeTabIconColor: colors.secondary,
    textColor: colors.textColor,
  },
};
