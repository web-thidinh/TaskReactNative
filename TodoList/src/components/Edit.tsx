import * as React  from 'react';
import {edit} from '../store/actions/todoAction'
import {useDispatch,useSelector } from 'react-redux';
import {View,Text,Button, TextInput} from 'react-native'

const Edit = ({ route, navigation })=>{
    const dispatch = useDispatch()
    const [input,setInput] = React.useState(route.params.job)
    const editTodo = (editItem:any)=>{
        dispatch(edit(editItem))
    }
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:150,paddingHorizontal:30}}>
            <TextInput
                style={{width:250,borderWidth: 1,borderRadius:5,height:40,paddingLeft:10}}
                value={input}
                onChangeText={(input)=>(setInput(input))}
            />
            <Button title='Save' onPress={async ()=>{
                await editTodo({id:route.params.id,jobEdited:input})
                navigation.navigate('Home')
            }}/>
        </View>
    )
}
export default Edit