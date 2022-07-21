import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import DiscoverScreen from 'screens/primary/discover/discoverScreen';
import FeedScreen from 'screens/primary/feed/feedScreen';
import ProfileScreen from 'screens/primary/profile/profileScreen';
import FanbaseScreen from 'screens/primary/fanbase/fanbaseScreen';
import SportsCenterNavigator from 'navigation/sports';

const Tabs = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'poppins-medium',
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="Sports"
        component={SportsCenterNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="soccer-field"
                size={size}
                color={color}
              />
            ) : (
              <FontAwesome name="soccer-ball-o" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="search-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="search-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="Fanbase"
        component={FanbaseScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="people-sharp" size={size} color={color} />
            ) : (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons name="person-circle-sharp" size={size} color={color} />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={size}
                color={color}
              />
            ),
        }}
      />
    </Tabs.Navigator>
  );
}
