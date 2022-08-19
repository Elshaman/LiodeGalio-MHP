import React from 'react'
import { Block, Text } from 'galio-framework';

const WelcomeHeader = () => {
  return (
    <View >
        <View style={ styles.upperside }>
            <Text style={styles.welcomeText}>
                Hello, {'\n'} Shaman 
            </Text>
            <Image style={styles.profilePicture} source={{ uri:'https://via.placeholder.com/65'  }} />
        </View>
        <Text style={styles.levelText}>Level 3</Text>
    </View>
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
