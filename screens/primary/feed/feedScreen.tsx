import { View, Text } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import FeedHeader from 'components/feed/feedHeader';
import ArticleList from 'components/feed/articleList';

export default function FeedScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <FeedHeader />
        <View style={styles.contentContainer}>
          <ArticleList />
        </View>
      </View>
    </SafeAreaView>
  );
}
