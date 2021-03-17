import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Ionicons'
import {DetailsScreen,ProfileScreen,HomeScreen} from './screens';

enableScreens();

const HomeStack=createStackNavigator();
const DetailsStack=createStackNavigator();
const ProfileStack=createStackNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen=({navigation})=>{
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerStyle:{
          backgroundColor:'#111111'
        },
        headerTintColor:"#ffffff",
        headerLeft:()=>(
          <Icon.Button name="menu" onPress={()=>navigation.openDrawer()} size={30} color="#ffffff" backgroundColor="#000000"/>
        )
      }}/>
    </HomeStack.Navigator>
  )
}

const DetailsStackScreen=({navigation})=>{
  return(
    <DetailsStack.Navigator>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft:()=>(
          <Icon.Button name="menu" onPress={()=>navigation.openDrawer()} size={30} color="#ffffff"/>
        )
      }}/>
    </DetailsStack.Navigator>
  )
}

const ProfileStackScreen=({navigation})=>{
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        headerLeft:()=>(
          <Icon.Button name="menu" onPress={()=>navigation.openDrawer()} size={30} color="#ffffff"/>
        )
      }}/>
    </ProfileStack.Navigator>
  )
}

const RoutingCaseStack=()=>{
  return(
    <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerStyle:{backgroundColor:'#000000'},
          headerTintColor:'#ffffff'
          }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          title:'Details User'
        }}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Details" component={DetailsStackScreen} />
          <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

