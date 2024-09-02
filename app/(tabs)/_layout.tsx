import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0f172a',
        },
        tabBarActiveTintColor: "yellow",
        headerShown: false,
      }}>
      
      <Tabs.Screen name="index" options={{href: null}} />
      
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='calendar' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profiles"
        options={{
          title: 'Profiles',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name='person' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="qrCode"
        options={{
          title: 'QR',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="qrcode-scan" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
