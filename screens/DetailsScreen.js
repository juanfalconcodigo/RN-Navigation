import React from 'react';
import { View,Button, Text } from 'react-native';

const DetailsScreen=({navigation})=>{
    return(
      <View>
        <Text>Details Screen</Text>
        <Button onPress={()=>navigation.navigate('Home')} title="View Home"/>
        <Button onPress={()=>navigation.goBack()} title="Go to Back"/>
        {/* <Button onPress={()=>navigation.popToTop()} title="First View"/> */}
      </View>
    )
}


export default DetailsScreen;