import { StatusBar } from 'expo-status-bar';
import { Platform, ImageBackground, Text, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { styles } from './styles';

import AppLogo from 'components/common/logo/appLogo';
import AppButton from 'components/common/button/appButton';

const bg = require('assets/images/bg.png');

export default function LandingScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <ImageBackground style={styles.imageBackground} source={bg}>
      <View style={styles.container}>
        <AppLogo />

        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
          <AppButton
            variant
            title="Register"
            onPress={() => navigation.navigate('Register')}
          />
          <Text style={styles.title}>
            Copyright {'\u00A9'} 2022 WTF. All rights reserved.
          </Text>
        </View>

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
      <View style={styles.overlay} />
    </ImageBackground>
  );
}
