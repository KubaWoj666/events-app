import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.screen}>
      <Text>QR Code Scanner</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  }
})

export default index