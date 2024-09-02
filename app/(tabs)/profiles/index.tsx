import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View>
      <Link href={`/(tabs)/profiles/${1}`} asChild>
        <Pressable>
          <Text>Profile</Text>
        </Pressable>
      </Link>
      
    </View>
  )
}

export default Profile