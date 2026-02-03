import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link
      href={{
        pathname:'/Sub',
        params: {cid:1, sid:2}
      }}
      >sub</Link>
      <Link href={{
        pathname:'/'
      }}>Back</Link>
    </View>
  )
}

export default index