import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import DiscoverScreen from 'screens/primary/discover/discoverScreen';
import SportsCenterScreen from 'screens/primary/sports/sportsCenterScreen';
import FeedScreen from 'screens/primary/feed/feedScreen';
import ProfileScreen from 'screens/primary/profile/profileScreen';
import FanbaseScreen from 'screens/primary/fanbase/fanbaseScreen';

const Tabs = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tabs.Navigator initialRouteName="Feed">
      <Tabs.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Sports"
        component={SportsCenterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Fanbase"
        component={FanbaseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tasks" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
