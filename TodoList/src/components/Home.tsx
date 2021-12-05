import React, { useEffect, useState } from 'react';
import { Item } from '../store/reducers/todoReducer';
import {add,remove} from '../store/actions/todoAction'
import { IRootState } from '../store/reducers/todoReducer';
import {useDispatch,useSelector } from 'react-redux';
import {Button,Text,TextInput, View,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  
  const [input,setInput] = useState('')
  const [jobs,setJobs] = useState([])
  const dispatch = useDispatch()
  useSelector((state:IRootState)=>{
    // state.todos.listTodo = JSON.parse(jsonValue)
  })
  const getData = async()=>{
    const jsonValue = await AsyncStorage.getItem('todos')
    if(jsonValue){
      setJobs(JSON.parse(jsonValue)) 
      
    }
  }


  getData()
  // useEffect(()=>{
  //   getData()
  // },[])



  const addTodo = async (a:any)=>{            
    if(a != ''){
      dispatch(add(a))
      setInput('')
      getData()
    }
  }
  const deleteTodo = async (a:any)=>{
    dispatch(remove(a))
    getData()
  }
  
  return (
    <View style={{padding:20}}>
      <View style={{}}>
        <Text style={{fontSize:30,color:'black',textAlign:'center',marginTop:50,marginBottom:30}}>
          Todo List App
        </Text>    
      </View>
      <View>
        <TextInput
          style={{height:40,borderWidth: 1,marginBottom:15,borderRadius:5,paddingLeft:15}}
          value={input}
          placeholder='Add to do'
          onChangeText={(input)=>{setInput(input)}}
        />
        <Button
          title='Add'   
          onPress={()=>{
            addTodo(input)
          }}
        />
      </View> 
      <View style={{marginTop:30}}>
        { jobs ?
          jobs.map((todo:Item,index:number)=>
            <View key={index} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
              <Text style={{fontSize:15}}>
                {todo.job}
              </Text>
              <View style={{display:'flex',flexDirection:'row'}}>
                <Button 
                  title='Delete'
                  onPress={()=>{
                    deleteTodo({id:todo.id})
                  }}
                />
                <Button 
                  title='Edit'
                  onPress={()=>{
                    navigation.navigate('Edit',{
                      id:todo.id,
                      job:todo.job
                    })
                    // editTodo(todo.id)
                  }}
                />
              </View>
            </View>
          ):
          <Text>Empty</Text>
        }
      </View>  
    </View>
  );
};

export default Home