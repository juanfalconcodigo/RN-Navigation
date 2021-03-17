import React from 'react';
import { View,Button, Text } from 'react-native';

const ProfileScreen=({navigation})=>{
    return(
      <View>
        <Text>
          Screen Profile
        </Text>
        <Button title="View Home" onPress={()=>navigation.navigate('Home')}/>
        <Button title="View Details" onPress={()=>navigation.navigate('Details')}/>
      </View>
    )
}

export default ProfileScreen;