import { View, Text } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { styles } from './styles';

export default function SportsCenterScreen({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sports Center Screen</Text>
    </View>
  );
}
