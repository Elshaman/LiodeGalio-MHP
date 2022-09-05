import React from 'react'
import { Block,Text } from 'galio-framework'
import PlayedGameItem from './PlayedGameItem'

const LastPlayedGameList = (props) => {
  return (
    <Block style={{ marginTop: 32 }}>
        <Text color="#B03"  size={18}>Last Played Games:</Text>
        { props.games.map((item, key) => {
          return <PlayedGameItem game={item.game} hours={item.time} key={key} />
        }) }
    </Block>
  )
}

export default LastPlayedGameList;

