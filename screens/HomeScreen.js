import React from 'react';
import { View,Button, Text } from 'react-native';

const HomeScreen=({navigation})=>{
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Home Screen</Text>
        <Button onPress={()=>navigation.navigate('Details')} title="View Details"/>
        <Button onPress={()=>navigation.navigate('Profile')} title="View Profile"/>
      </View>
    )
}

export default HomeScreen;