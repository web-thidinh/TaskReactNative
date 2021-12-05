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
      Login Screen 
    </View>
  );
};

export default Home