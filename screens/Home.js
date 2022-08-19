import React from 'react'
import { View, StyleSheet } from 'react-native'
import WelcomeHeader from './WelcomeHeader'
import MostPlayedGame from './MostPlayedGame'
import LastPlayedGameList from './LastPlayedGameList'

const Home = () => {
    
    const games = [
        {game: "Call of Duty Mobile" , time: 10}, 
        {game: "Diablo Inmortal" , time: 12}, 
        {game: "Streets of Rage 4" , time: 4}, 
        {game: "Tekken 7" , time: 3}, 
    ]
    return (
        <View style={ styles.container } >
            <WelcomeHeader />
            <MostPlayedGame />
            <LastPlayedGameList games={games} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1 , 
        backgroundColor:'#F8E',
        paddingHorizontal: 32,
        paddingVertical: 64.
    }
})

export default Home;

