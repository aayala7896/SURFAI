import React from 'react'

import {View,SafeAreaView, StyleSheet, TextInput} from 'react-native';

function GlobalInput({placeholder,ifpassword}){
    const text = placeholder.toString();
    let content 
    if(ifpassword == false){
        content = <View style= {styles.container} ><TextInput style= {styles.containerStyle} placeholder={text} /></View>
    }
    else{
        content = <TextInput style= {styles.containerStyle} placeholder = {text} secureTextEntry = {true}/>
    }
    return <View>{content}</View>
}

styles = StyleSheet.create({
    container:{
        
    },
    buttonStyle: {
        borderRadius:10,
        
    }, 
    containerStyle:{
        borderBottomWidth:1,
        marginHorizontal: 10,
        height: 60,
        width: 250,
       
      },

});

export default GlobalInput;