import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import MessageScreen from "../Screens/MessageSreen";
import OtpScreen from "../Screens/OtpScreen"; 
import BottomTabNavigator from "./BottomTabNavigator";


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>

        <Stack.Screen 
        options={{headerMode:'none'}}
        name="LoginScreen" component={LoginScreen} />

        <Stack.Screen 
        options={{headerMode:'none'}}
        name="SignUpScreen" component={SignUpScreen} />

<Stack.Screen 
        options={{headerMode:'none'}}
        name="OtpScreen" component={OtpScreen} />

        <Stack.Screen 
        options={{title:'Chat'}}
        name="MessageScreen" component={MessageScreen} />

        <Stack.Screen 
        options={{headerMode:'none'}}
        name="BottomTabNavigator" component={BottomTabNavigator} />

      </Stack.Navigator>
    )
}

export default StackNavigator

const style = StyleSheet.create({})