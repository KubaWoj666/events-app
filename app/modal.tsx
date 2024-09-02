import { View, Text, StyleSheet, Pressable, Image} from 'react-native'
import React, { useEffect } from 'react'
import { Link, router } from 'expo-router'

const SideBar = () => {
    
  return (
    <View style={styles.nav}>
        <Image style={styles.logo} source={require("../assets/images/logo.png")}/>
        <Pressable style={styles.button}  onPress={() => router.push("/(tabs)")} >
            <Text>Home</Text>
        </Pressable>
        <Pressable style={styles.button}  onPress={() => router.push("/(tabs)/profiles")} >
            <Text>Profiles</Text>
        </Pressable>
        <Pressable style={styles.button}  onPress={() => router.push("https://www.google.pl/?hl=pl")} >
            <Text>Options</Text>
        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
    nav: {
        flex :1,
        alignItems: "center",
        // justifyContent: ""
    },

    button: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 20,
        width: 200,
        height: 30,
        marginVertical: 10,
        backgroundColor: 'white'
    },

    logo: {
        width: 200,
        resizeMode: "contain"
    }
})

export default SideBar