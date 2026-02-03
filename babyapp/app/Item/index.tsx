import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const index = () => {
  return (
    <View>
      <Text>Item</Text>
      <Link href={{
        pathname:'/'
      }}
      >back</Link>
    </View>
  )
}

export default index