import { View, Text } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { styles } from './styles';
import AppButton from 'components/common/button/appButton';

export default function LoginScreen({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <AppButton
        variant
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}
