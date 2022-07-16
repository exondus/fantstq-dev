import { View, Text } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { styles } from './styles';

export default function ForgotPasswordScreen({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Passsword Screen</Text>
    </View>
  );
}
