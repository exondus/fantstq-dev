import { View, Text } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { styles } from './styles';
import AppButton from 'components/common/button/appButton';

export default function RegisterScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Screen</Text>
      <AppButton
        variant
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
