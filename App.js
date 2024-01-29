import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform,SafeAreaView} from 'react-native';
import GlobalButton from './components/button.jsx'
import GlobalInput from './components/textform.jsx'




export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
     
    <Text style= {styles.title1} >Surf<Text style= {styles.title2} > AI </Text></Text>
        
     
      <Text style = {{paddingBottom:60}} >AI-Powered Video Processor for Surf Clip Creation</Text>
      
      <View style = {styles.titleContainer}>
      <GlobalInput placeholder= "Username" ifpassword={false} />
      <GlobalInput placeholder= "Password" ifpassword={true} />
      <GlobalButton title = "Sign In"/>
      
      </View>
      
      <StatusBar style="auto" />
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    
    
   
  },
  title1: {   
    fontSize: 40,
   
  },
  title2: {   
    fontSize: 40,
    backgroundColor: '#1ACDA5',
   
  },
  titleContainer:{
    width:300,
    alignSelf:'center'
    
  },
  
});
