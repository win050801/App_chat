import React ,{useState,useEffect} from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ActiveUserData } from "./Data";
import { ListItem, Avatar, Button } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../Global/Axios/Api";


const Recent = (props) => {
    var user = props.user
    // console.log(user);
    const id = user._id
    const[data,setdata] = useState([]) 
    useEffect(() => {
        async function fetchData() {
           
            
            const { data } = await Api.post(`http://192.168.14.107:5000/api/auth/allusers`, { 
            id:id
            });
            setdata(data)
        
            
        }
        fetchData();
      });
    return (
       
        <FlatList
            ListHeaderComponent={() => <Text style={{ fontSize: 25 }}>Recent</Text>}
            data={data}
            renderItem={({ item }) => <RenderItem item={item} user={user} />}
        />
     
       
        
    );
};
const RenderItem = ({ item,user }) => {
    const navigation = useNavigation()
        return (
            <TouchableOpacity onPress={()=>navigation.navigate("MessageScreen",{user:user,to:item._id})}>
                <ListItem>
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: 'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?k=20&m=1250238624&s=612x612&w=0&h=35Sf2RXBiMDoaabub7XpBV--FM_wuEf8R1lbgO_GquM=' }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.username}</ListItem.Title>
                        <Text>Xin chào</Text>
                    </ListItem.Content>
                    <Text>4.00 pm</Text>
                </ListItem>
            </TouchableOpacity>
        );
}

export default Recent

const style = StyleSheet.create({})

