import React from 'react'
import { Image , StyleSheet } from 'react-native'; 
import { Block, Text } from 'galio-framework';

const WelcomeHeader = () => {
  return (
    <Block >
        <Block row space="between">
            <Text color="#707070" h3>
                Hello, {'\n'} Shaman 
            </Text>
            <Image style={styles.profilePicture} source={{ uri:'https://via.placeholder.com/65'  }} />
        </Block>
        <Text color="#707070" p>Level 3</Text>
    </Block>
  )
}


const styles = StyleSheet.create({
    upperside: {
        flexDirection: 'row' , 
        justifyContent: 'space-between'
    },
    profilePicture:{
        width: 55,
        height: 55,
        borderRadius: 55/2,
    },
    welcomeText:{
        fontSize: 38,
        color: '#707070'
    },
    levelText:{
        fontsize:18,
        color: '#707070'
    }   

})

export default WelcomeHeader;
