import React from 'react'
import { View, Text } from 'react-native'

const PlayedGameItem = (props) => {
  return (
    <View>
        <Text>{props.game}</Text>
        <Text>{props.hours} h</Text>
    </View>
  )
}

export default PlayedGameItem;

