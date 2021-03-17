import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens';
import MainTabScreen from './screens/MainTabScreen';


enableScreens();


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


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
          <Drawer.Screen name="Home" component={MainTabScreen} />
          {/* <Drawer.Screen name="Details" component={DetailsStackScreen} />
          <Drawer.Screen name="Profile" component={ProfileStackScreen} /> */}
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

