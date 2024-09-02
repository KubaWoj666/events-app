import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import { DUMMY_DATA } from '@/data/dummy';

const DetailEvent = () => {
  const { eventId } = useLocalSearchParams(); // Pobranie parametru ID z URL
  const event = DUMMY_DATA.find(e => e.id.toString() === eventId); // Znalezienie odpowiedniego wydarzenia
  
  if (!event) {
    return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.text}>Wydarzenie nie zostało znalezione</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Stack.Screen options={{title: event.title, headerTintColor: "white" }}/>

      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: "red",
  },
});

export default DetailEvent;
