import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Usage from './pomodoro/usage'
import Profile from './pomodoro/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Transactions from './pomodoro/Transactions';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab=createMaterialTopTabNavigator();
const Root=()=>
{
  return (
    <Tab.Navigator style={{marginTop:40}}>
      <Tab.Screen name="Profile" component={Profile}></Tab.Screen>
      <Tab.Screen name="Transactions" component={Transactions}></Tab.Screen>
    </Tab.Navigator>
  )
}
export default Root;