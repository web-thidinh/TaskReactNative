import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {StyleSheet,Text,TextInput, View,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import {loginApi} from '../api/authApi'
import {login} from '../store/actions/authAction'


const Login = ({navigation}:{navigation:any}) => {
  const dispatch = useDispatch()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const data = {useremail:email,userpassword:password}
  const submitLogin = async () => {
    const result = await loginApi(data)
    AsyncStorage.setItem('Token',result.PRIVATE_TOKEN)
    AsyncStorage.setItem('currentUser',result.user.email)
    navigation.navigate('Home',{
      currentUser:result.user.email
    })
  }
  return (
    <SafeAreaView>
      <View style={{marginTop:100,paddingHorizontal:20}} >
        <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Text style={{color:'black',fontSize:50,marginBottom:50,fontWeight:'bold'}}>Login</Text>
        </View>
        <View style={{marginBottom:20}}>
          <TextInput style={styles.textinput} value={email} onChangeText={(email)=>{setEmail(email)}} placeholder='Input your email'/>
          <TextInput style={styles.textinput} value={password} onChangeText={(password)=>{setPassword(password)}} secureTextEntry={true} placeholder='Input your password'/>
        </View>
        <TouchableOpacity style={styles.submitBtn} onPress={submitLogin}>
          <Text style={{color:'white'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registBtn} onPress={()=>{
          navigation.navigate('Register')
        }}>
          <Text style={{color:'black'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textinput:{
    fontSize:15,
    borderWidth:1,
    marginBottom:20,
    borderRadius:5,
    paddingLeft:10
  },
  submitBtn:{
    height:40,
    fontSize:15,
    borderRadius:5,
    justifyContent:'center',
    backgroundColor:'blue',
    alignItems:'center',
    marginBottom:10
  },
  registBtn:{
    height:40,
    fontSize:15,
    borderRadius:5,
    backgroundColor:'white',
    justifyContent:'center',
    borderWidth:1,
    alignItems:'center'
  }
})
export default Login