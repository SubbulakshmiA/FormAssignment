import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name,setName] = useState();
  const [email,setEMail] = useState();

  const clear = () =>{
    setEMail();
    setName();
  }
  console.log('name '+name +'\n'+' email '+email)
const myAlert = () =>{
  Alert.alert('Submitted','name: '+name +'\n'+' email '+email)
}
  return (
    <View style={styles.container}>
      <View style={styles.textFieldStyle}>
      <Text style={{fontSize:24}}>Name  </Text>
      <TextInput
      style = {{...styles.textInputStyle, marginLeft:16}}
      value={name}
      placeholder='Enter Your Name'
      placeholderTextColor={'#e4bbd9'}
      onChangeText={(v) =>{
          setName(v)
      }}></TextInput>
      </View>
      <View style={styles.textFieldStyle}>
      <Text style={{fontSize:24}}>Email  </Text>
      <TextInput 
      style = {{...styles.textInputStyle, marginLeft:16}}
      value={email}
      placeholder='Enter Your Email'
      placeholderTextColor={'#e4bbd9'}
      onChangeText={(v) =>{
        setEMail(v)
    }}></TextInput>
      </View>

      <View style={{...styles.buttonStyle, marginTop:40}}>
      <Button 
      // style = {{backgroundColor:'#FF0000'}}
      color='#FF0000'
      title='clear'
      onPress={clear}></Button>
        <Button
         title='submit'
         onPress={myAlert}></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFieldStyle:{
    flexDirection:'column',
    marginTop:30    ,
    alignSelf:'stretch',
    marginRight:16
  },
  textInputStyle:{
    
    borderWidth:1,
    borderColor:'black',
    fontSize:22,
  },
  buttonStyle:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignSelf:'stretch',

  }
  
});
