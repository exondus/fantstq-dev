import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { colors } from 'constants/colors';

import FixturesScreen from 'screens/primary/sports/fixturesScreen';
import ResultsScreen from 'screens/primary/sports/resultsScreen';
import TableScreen from 'screens/primary/sports/tableScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function SportsCenterNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 18,
          textTransform: 'capitalize',
          fontFamily: 'poppins-medium',
          paddingHorizontal: 10,
          paddingVertical: 6,
          borderRadius: 5,
        },
        tabBarItemStyle: {},
        tabBarStyle: {
          elevation: 0,
        },
      })}
    >
      <Tab.Screen name="Results" component={ResultsScreen} />
      <Tab.Screen name="Table" component={TableScreen} />
      <Tab.Screen name="Fixtures" component={FixturesScreen} />
    </Tab.Navigator>
  );
}

function SportsCenterStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="SportsCenter"
        component={SportsCenterNavigator}
        options={{
          title: 'Sports Center',
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'poppins-medium',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default SportsCenterStack;
