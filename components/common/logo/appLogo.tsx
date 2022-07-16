import { Image, StyleSheet, View, Dimensions } from 'react-native';

const logo = require('assets/logos/logo.png');
const screenWidth = Dimensions.get('window').width;

export default function AppLogo() {
  return (
    <View style={[styles.container, { width: screenWidth * 0.7 }]}>
      <Image style={styles.image} source={logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    height: 120,
  },
});
