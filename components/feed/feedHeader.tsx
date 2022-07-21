import { FunctionComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import { colors } from 'constants/colors';
import greeting from 'utils/greetings';

const FeedHeader: FunctionComponent = () => {
  return (
    <View style={[styles.container, styles.boxShadow]}>
      <View style={styles.leftContainer}>
        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.avatar}
          resizeMode="contain"
        />
        <View style={styles.userDetailsContainer}>
          <Text style={styles.greeting}>{greeting()},</Text>
          <Text style={styles.username}>Lichaba</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons
          name="notifications-sharp"
          size={30}
          color={colors.black}
          style={{ marginRight: 15 }}
        />
        <Feather name="plus-circle" size={30} color={colors.black} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  boxShadow: {
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { height: 0, width: 10 },
    elevation: 5,
  },
  leftContainer: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
  },
  rightContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  userDetailsContainer: {
    marginLeft: 5,
    justifyContent: 'center',
    height: '100%',
  },
  username: {
    fontSize: 18,
    fontFamily: 'poppins-medium',
    color: colors.black,
  },
  greeting: {
    fontSize: 16,
    fontFamily: 'poppins-medium',
    color: colors.darkGrey,
  },
});

export default FeedHeader;
