import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {
  return (
    <View>
     <Text>
        {"\n\n\n\n\n\n"}
        Hello, I am a student in CIS340! {"\n"}
        </Text>
        <TextInput
        style = {{
          height: 40,
          borderColor: "red",
          borderWidth: 1
        }} 
        defaultValue = "Username: "/>
      </View>
   );
}


