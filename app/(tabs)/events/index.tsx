import { View, Text, SafeAreaView, StyleSheet, FlatList, Platform  } from 'react-native'
import React from 'react'
import EventListItem from '@/components/events/EventlListItem'
import { DUMMY_DATA } from '@/data/dummy'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList data={DUMMY_DATA} renderItem={({item}) => <EventListItem event={item}/>}></FlatList>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    
  }
})

export default HomeScreen