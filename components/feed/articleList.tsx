import { FunctionComponent } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import articles from 'data/articles.json';
import { ArticleItemProps, ArticleProps } from 'types/feed/index';

export default function ArticleList() {
  const RenderItem = ({ item }: { item: ArticleProps }) => {
    return (
      <View style={{ width: 140, marginHorizontal: 8 }}>
        <Image
          source={{ uri: item.coverImage }}
          style={{ width: '100%', height: 200, borderRadius: 5 }}
          resizeMode="cover"
        />

        {/* <Text style={{ fontFamily: 'poppins-medium', fontSize: 16 }}>
          {item.title}
        </Text> */}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </View>
  );
}
