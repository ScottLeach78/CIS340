import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column', //row, reverse-row, reverse-column
    justifyContent: 'center',
    alignItems: 'baseline'}}>
      <View style={{width: 50, height: 50, backgroundColor: 'red', alignSelf:'flex-end'}}/>
      <View style={{width: 50, height: 50, backgroundColor:'orange'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}}/> 
    </View>
  );
}



