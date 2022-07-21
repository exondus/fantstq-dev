import React from 'react';
import { View, Text, StyleSheet, Image, ImageProps } from 'react-native';
import { TableItemProps } from 'types/sports/index';

export default function TableItem({ item }: { item: TableItemProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.teamBrandContainer}>
        <Text style={styles.rankTitle}>{item.rank}.</Text>
        <Image source={{ uri: item.team.logo }} style={styles.teamBrand} />
        {/* <Text style={styles.itemTitle}>{item.team.name}</Text> */}
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.itemTitle}>{item.all.played}</Text>
        <Text style={styles.itemTitle}>{item.all.win}</Text>
        <Text style={styles.itemTitle}>{item.all.draw}</Text>
        <Text style={styles.itemTitle}>{item.all.lose}</Text>
        <Text style={styles.itemTitle}>{item.all.goals.for}</Text>
        <Text style={styles.itemTitle}>{item.all.goals.against}</Text>
        <Text style={styles.itemTitle}>{item.points}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
  },
  teamBrandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-around',
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.3)',
  },
  teamBrand: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
  },
  itemTitle: {
    fontSize: 14,
    fontFamily: 'poppins-regular',
  },
  rankTitle: {
    fontSize: 16,
    fontFamily: 'poppins-bold',
  },
});
