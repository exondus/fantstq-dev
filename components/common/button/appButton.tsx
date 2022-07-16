import { Pressable, Text } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
  onPress: () => void;
  title: string;
  variant?: boolean;
};

export default function AppButton(props: ButtonProps) {
  return (
    <Pressable
      onPress={props.onPress}
      style={[
        styles.container,
        { backgroundColor: props.variant ? '#fff' : 'crimson' },
      ]}
    >
      <Text
        style={[styles.title, { color: props.variant ? 'crimson' : '#fff' }]}
      >
        {props.title}
      </Text>
    </Pressable>
  );
}
