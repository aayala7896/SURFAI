import React from 'react'
import {View,StyleSheet} from 'react-native'
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
function GlobalButton({title}){
    const buttonText = title.toString();
    return (
        <View>
            <Button buttonStyle= {styles.buttonStyle} containerStyle= {styles.containerStyle} title = {buttonText} color= '#1ACDA5'/>
        </View>
    )
}

styles = StyleSheet.create({
    buttonStyle: {
        borderRadius:10,
        
    }, 
    containerStyle:{
        marginHorizontal: 10,
        height: 50,
        width: 275,
        
      },

});

export default GlobalButton;