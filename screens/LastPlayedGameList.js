import React from 'react'
import { View,Text } from 'react-native'
import PlayedGameItem from './PlayedGameItem'

const LastPlayedGameList = (props) => {
  return (
    <View>
        <Text>Last Played Games:</Text>
        { props.games.map((item, key) => {
          return <PlayedGameItem game={item.game} hours={item.time} key={key} />
        }) }
    </View>
  )
}

export default LastPlayedGameList;

