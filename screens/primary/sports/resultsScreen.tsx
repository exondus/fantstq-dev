import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import data from 'data/results.json';
import FixtureItem from 'components/sports/fixtureItem';

export default function ResultsScreen({ navigation }: NativeStackHeaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  let onEndReachedCalledDuringMomentum = false;

  const renderFooter = () => {
    // if (!isMoreLoading) return true;

    return <ActivityIndicator size="large" style={{ marginBottom: 10 }} />;
  };

  const onRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const getMore = () => {
    setIsMoreLoading(true);
    setTimeout(() => {
      setIsMoreLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.response}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.fixture.id.toString()}
        renderItem={({ item }) => <FixtureItem item={item} />}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum = false;
        }}
        onEndReached={() => {
          if (!onEndReachedCalledDuringMomentum) {
            getMore();
            onEndReachedCalledDuringMomentum = false;
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 10,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
  },
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    fontFamily: 'poppins-bold',
  },
  leagueName: {
    fontSize: 14,
    fontFamily: 'poppins-medium',
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  teamContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { height: 50, width: 50 },
  teamName: {
    fontSize: 16,
    fontFamily: 'poppins-regular',
  },
  statusContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'crimson',
    borderRadius: 5,
  },
  status: {
    fontSize: 22,
    fontFamily: 'poppins-bold',
    color: '#fff',
  },
  venueText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'poppins-medium',
  },
});
