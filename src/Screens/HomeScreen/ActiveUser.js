import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { ActiveUserData } from "./Data";
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-android'
import { Avatar } from 'react-native-elements';

const ActiveUser = () => {
    return (
        <View>
            <SearchBar
                placeholder="Search People"
                inputContainerStyle={{ backgroundColor: 'white', elevation: 5, borderRadius: 15 }} />
            <FlatList 
                data={ActiveUserData}
                renderItem={({item}) => {
                    <View style={{margin:10}}>
                         
                <Avatar
                    size='medium'
                    rounded
                    source={{
                        uri: item.image,
                    }}
                />
                </View>
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
        
    )
}

export default ActiveUser

const style = StyleSheet.create({})

