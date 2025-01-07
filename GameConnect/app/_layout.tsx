import React from 'react';
import { Slot } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Define a type for Ionicons' valid names
type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

const Tab = createBottomTabNavigator();

export default function AppLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IoniconName = 'home-outline'; // Default value

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#34c759',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#27293d',
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: '#1e1e2e',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Home" component={Slot} />
      <Tab.Screen name="Messages" component={Slot} />
      <Tab.Screen name="Profile" component={Slot} />
      <Tab.Screen name="Notifications" component={Slot} />
    </Tab.Navigator>
  );
}
