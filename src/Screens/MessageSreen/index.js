import React, { useState, useCallback, useEffect } from 'react'
import { View,Text,TextInput, Button ,Alert} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Api } from "../../Global/Axios/Api";
export function MessageScreen({navigation,route}) {
  // console.log(route);
  const from = route.params.user._id
  const to = route.params.to
  const [messages, setMessages] = useState([]);
  const [mess, setmess] = useState([]);

  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: 1,
  //       text: 'Xin chào',
  //       createdAt: new Date(),
  //       user: {
  //         _id: 2,
  //         name: 'React Native',
  //         avatar: 'https://placeimg.com/140/140/any',
  //       },
  //     },
  //   ])
  // }, [])
  useEffect( () => {
    async function fetchData() {
       
        const { data } = await Api.post(`http://192.168.14.107:5000/api/messages/getmsg`, { 
        from,to
        });
        setMessages(data)
    }
    fetchData();
  });

  const send = async()=>{
    const { data } = await Api.post(`http://192.168.14.107:5000/api/messages/addmsg`, { 
        from,
        to,
        message:mess
        });
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message:mess,reaction:""});
    setMessages(msgs);
  }

  return (
    <View style={{width:"100%",height:"100%"}}>
    <View style={{width:"100%",height:"80%" ,backgroundColor:"white"}}>
    {messages.map((message, index) => {
    return (
      <View >
        {message.fromSelf === false ? (
          <View style={{flexDirection:"row",minHeight:30,justifyContent:"flex-start",alignItems:"center"}}>
            
            <View style={{backgroundColor:"gray",marginLeft:20}} >
              <Text style={{color:"black",fontSize:20,marginTop:3,marginBottom:3,marginLeft:5,marginRight:5,borderRadius:15}}>{message.message}</Text>
            </View>
           </View>
          ) : (
          <View style={{minWidth:50,minHeight:30,paddingRight:30,alignItems:"flex-end"}}>
            <Text style={{color:"black"}}>{message.message}</Text>
          </View>
        )}
      </View>
    )})}
    </View>
    <View >
            <TextInput onChangeText={newText => setmess(newText)} style={{width:200,height:50,borderWidth:1}}></TextInput>
            <Button onPress={send} title='Send'></Button>
    </View>
    </View>
  )
}

export default MessageScreen