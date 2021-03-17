import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DetailsScreen, ProfileScreen, HomeScreen } from './index';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#ffffff"
            barStyle={{ backgroundColor: '' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor:'',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor:'#694fad',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Details"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Details',
                    tabBarColor:'#d02860',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book" color={color} size={28} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                headerStyle: {
                    backgroundColor: '#111111'
                },
                headerTintColor: "#ffffff",
                headerLeft: () => (
                    <Icon.Button name="menu" onPress={() => navigation.openDrawer()} size={30} color="#ffffff" backgroundColor="#111111" />
                )
            }} />
        </HomeStack.Navigator>
    )
}

const DetailsStackScreen = ({ navigation }) => {
    return (
        <DetailsStack.Navigator>
            <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="menu" onPress={() => navigation.openDrawer()} size={30} color="#ffffff" />
                )
            }} />
        </DetailsStack.Navigator>
    )
}

const ProfileStackScreen = ({ navigation }) => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
                headerLeft: () => (
                    <Icon.Button name="menu" onPress={() => navigation.openDrawer()} size={30} color="#ffffff" />
                )
            }} />
        </ProfileStack.Navigator>
    )
}
