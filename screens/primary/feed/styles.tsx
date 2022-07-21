import { colors } from 'constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  contentContainer: {
    width: '100%',
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: 'poppins-medium',
    marginLeft: 15,
  },
});
