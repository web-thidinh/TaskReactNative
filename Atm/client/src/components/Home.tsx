import {getAtms,getProcess,createAtm,createTrans,deleteAtm,getToken} from '../api/atmApi'
import {useDispatch,useSelector} from 'react-redux'
import React, { useState,useEffect } from 'react'
import {listAtms,listProcess} from '../store/actions/atmAction'
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View,Text,TouchableOpacity,ScrollView,Image,StyleSheet,Modal,Pressable,Alert,TextInput} from "react-native"
import {IRootState} from '../store/reducers/authReducer'

const Home = ({route,navigation}: {route:any,navigation: any})=>{
    const dispatch = useDispatch()
    
    useEffect(()=>{
        getToken()
        async function getData(){
            const resDataAtms = await getAtms()
            dispatch(listAtms(resDataAtms))
            const resDataProcess = await getProcess()
            dispatch(listProcess(resDataProcess))
        }
        setInterval(()=>{
            getData()
        },1000)
    },[])

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [atm, setAtm] = useState('');
    const [name,setName] = useState('');
    const [trans,setTrans] = useState('')

    const atmState = useSelector((state:IRootState)=>{
        return state.atmData.ListAtm
    })
    const processedData = useSelector((state:IRootState)=>{
        return state.atmData.ListProcessed
    })
    return(
        <SafeAreaView>
            <ScrollView style={{paddingHorizontal:5,paddingVertical:20}}>
                <View>
                    <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:8,paddingVertical:10,justifyContent:'flex-end',marginVertical:10}}>
                        <Text style={{fontSize:17}}>{route.params.currentUser}</Text>
                        <TouchableOpacity style={{}}>
                            <Text style={{fontSize:17,backgroundColor:'#EB4141',borderRadius:2,color:'white',paddingHorizontal:10,paddingVertical:5,marginLeft:10}}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:5}}>
                        <TouchableOpacity  onPress={() => setModalVisible(true)}> 
                            <Text style={styles.featureBtn}>Add Atm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible1(true)}>
                            <Text style={styles.featureBtn}>Add Transaction</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={()=>{
                            navigation.navigate('Queue')
                        }}>
                            <Text style={styles.featureBtn}>List Queue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:'row',width:'100%',flexWrap: 'wrap',marginVertical:15}}>
                    {
                        atmState?
                        atmState.map((atmItem:any,index:number)=>(
                            <View key={index} style={{borderWidth:1,width:'47.5%',margin:4,padding:5}}>
                                <Image
                                    source={{
                                        uri: 'data:image/jpeg;base64,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',
                                    }}
                                    style={{ width: '100%', height: 200 }}
                                />
                                <Text style={{width:'100%',textAlign:'center'}}>{atmItem.status}</Text>
                                <Text style={{width:'100%',textAlign:'center'}}>{atmItem.name}</Text>
                                <View>
                                    <Image
                                        source={{
                                            uri: 'data:image/png;base64,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',
                                        }}
                                        style={{ width: '20%', height: 40 ,borderRadius:20}}
                                    />
                                    <View>
                                        <Text>Name:{atmItem.client}</Text>
                                        <Text>Transaction:{atmItem.transaction}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={()=>{
                                    deleteAtm(atmItem.id)
                                }} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',position:'absolute',top:0,right:0,width:30,height:30,backgroundColor:'#4198BD'}}>
                                    <Text style={{fontWeight:'bold',color:'white'}}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )):
                        <Text>Empty</Text>
                    }
                </View>
                <View style={{padding:5}}>
                    <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Processed Client:</Text>
                    <Text>{processedData}</Text>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Add Atm</Text>
                        <View>
                            <TextInput onChangeText={(atm)=>{setAtm(atm)}} style={{borderWidth:1,fontSize:17,width:250,height:40,borderRadius:5}} />
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle} onPress={()=>{
                                    createAtm(atm)
                                    setModalVisible(!modalVisible)
                                }}>Add</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible1(!modalVisible1);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Add Transaction</Text>
                        <View>
                            <Text>Name</Text>
                            <TextInput onChangeText={(name)=>{setName(name)}} style={{borderWidth:1,fontSize:17,width:250,height:40,borderRadius:5}} />
                        </View>
                        <View>
                        <Text>Transaction</Text>
                            <TextInput onChangeText={(trans)=>{setTrans(trans)}} style={{borderWidth:1,fontSize:17,width:250,height:40,borderRadius:5}} />
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible1(!modalVisible1)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible1(!modalVisible1)}
                            >
                                <Text style={styles.textStyle} onPress={()=>{
                                    createTrans(name,trans)
                                    setModalVisible1(!modalVisible1)
                                }}>Add</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    featureBtn:{
        fontSize:17,
        color:'#fff',
        backgroundColor:'#3366FF',
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:10,
        borderRadius:3
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius:5,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
        marginRight:15
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
export default Home