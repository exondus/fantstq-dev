import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { styles } from './styles';
import data from 'data/standings.json';
import TableItem from 'components/sports/tableItem';

export default function TableScreen({ navigation }: NativeStackHeaderProps) {
  const standingsData = data.response[0].league.standings[0];

  return (
    <View style={styles.container}>
      <FlatList
        data={standingsData}
        keyExtractor={(item) => item.rank.toString()}
        renderItem={({ item }) => <TableItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
