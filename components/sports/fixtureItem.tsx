import dayjs from 'dayjs';
import { View, Text, StyleSheet, Image } from 'react-native';

import { FixtureItemProps, FullFixtureProps } from 'types/sports/index';

interface FixtureProps {
  item: FullFixtureProps;
}

export default function FixtureItem(props: FixtureProps) {
  const { item } = props;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.time}>
          {dayjs(item.fixture.date).format('DD-MM-YYYY')}
        </Text>
        <Text>{item.league.name}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <View style={styles.teamContainer}>
          <Image source={{ uri: item.teams.home.logo }} style={styles.logo} />
          {/* <Text style={styles.teamName}>{item.teams.home.name}</Text> */}
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>
            {item.score.fulltime.home} - {item.score.fulltime.away}
          </Text>
        </View>
        <View style={styles.teamContainer}>
          <Image source={{ uri: item.teams.away.logo }} style={styles.logo} />
          {/* <Text style={styles.teamName}>{item.teams.away.name}</Text> */}
        </View>
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.venueText}>
          {item.fixture.venue.name}, {item.fixture.venue.city}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
