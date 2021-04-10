import React from 'react';
import { Text, TextInput, View } from 'react-native';

 function Student(props) {
  return (
    <View>
      <Text>Hi my name is scott Leach {props.name}, I am a student in CIS340!
      </Text>
    </View>
  );
}
export default function MultiComp(){
   return(
     <View style={{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
     }}>
     <Text> Welcome to CIS340</Text>
     <Student name = "Scott Leach"/>
     <Student name = "Sydney Hauffman"/>
     <Student name = "Andy Wingo"/>
     <Student name = "Ramadan Abdunabi"/>
     </View>
   )
 }
