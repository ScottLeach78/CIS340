import React, {useState} from 'react';
import { Text, Image, View, Button } from 'react-native';

 function TV(props) {

  const[isOff, setIsOff] = useState(true);
return(
  <View>
    <Text>
    {"\n\n\n\n"}
      This is {props.name} TV, and it is {isOff ? "OFF" : "Turn me On"}
    </Text>
    <Button
    onPress={() => {
      setIsOff(false);
    }}
    disabled={!isOff}
    title={isOFF ? "Turn Me On, Please!" : "Thank You!"}
    />
  </View>
);
}

export default function MultiComp(){
  return(
    <View>
    <TV name = "LG"/>
    <TV name = "Soni"/>
     </View>
  )
  }
