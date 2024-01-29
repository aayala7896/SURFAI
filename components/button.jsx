import React from 'react'
import {View,StyleSheet,Button} from 'react-native'

function GlobalButton({title}){
    const buttonText = title.toString();
    return (
        <View style= {styles.containerStyle}>
            <Button title = {buttonText} color= 'white'/>
        </View>
    )
}

styles = StyleSheet.create({
    containerStyle:{
        marginVertical: 30,
        marginHorizontal: 10,
        height: 50,
        width: 250,
        justifyContent: 'center',
        backgroundColor: '#1ACDA5'
        
      },

});

export default GlobalButton;