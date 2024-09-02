
import {StyleSheet, View, Text, StatusBar, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'

const index = () => {

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>Welcome in Event App</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/events")} >
        <Text>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    fontSize: 32,
    color: "darkblue"
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },

})


export default index