import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href={{
        pathname: '/Item',
        params: {cid:1, sid:2, iid:3}
      }}>Item</Link>

    <Link href={{
        pathname:'/'
    }}>back</Link>
    </View>
  )
}

export default index