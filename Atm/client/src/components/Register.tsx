import React ,{useState} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {View,Text,SafeAreaView,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import {registerApi} from '../api/authApi'
const Edit = ({ navigation }: {navigation: any})=>{
const dispatch = useDispatch()
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const data = {useremail:email,userpassword:password}
const submitRegister = (a:any)=>{
    registerApi(a)
    setEmail('')
    setPassword('')
}
    return (
        <SafeAreaView>
            <View style={{marginTop:100,paddingHorizontal:20}} >
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'black',fontSize:50,marginBottom:50,fontWeight:'bold'}}>Register</Text>
                </View>
                <View style={{marginBottom:20}}>
                    <TextInput style={styles.textinput} value={email} onChangeText={(email)=>{setEmail(email)}} placeholder='Input your email'/>
                    <TextInput style={styles.textinput} value={password} onChangeText={(password)=>{setPassword(password)}} secureTextEntry={true} placeholder='Input your password'/>
                </View>
                <TouchableOpacity style={styles.submitBtn} onPress={()=>{submitRegister(data)}}>
                    <Text style={{color:'white'}}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registBtn} onPress={()=>{
                    navigation.navigate('Login')
                }}>
                    <Text style={{color:'black'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
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
      backgroundColor:'blue',
      justifyContent:'center',
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
export default Edit