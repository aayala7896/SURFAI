import React from 'react'
import {View,StyleSheet} from 'react-native'
import { Input } from '@rneui/themed';

function GlobalInput({placeholder,ifpassword}){
    const text = placeholder.toString();
    let content 
    if(ifpassword == null){
        content = <Input placeholder={text} />
    }
    else if(ifpassword != null){
        content = <Input placeholder = {text} secureTextEntry = {true}/>
    }
    return <View>{content}</View>
}

styles = StyleSheet.create({
    buttonStyle: {
        borderRadius:10,
        
    }, 
    containerStyle:{
        marginHorizontal: 10,
        height: 50,
        width: 250,
        marginVertical: 10,
      },

});

export default GlobalInput;