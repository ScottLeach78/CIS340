import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column', //row, reverse-row, reverse-column
    justifyContent: 'center',
    alignItems: 'stretch'}}>
      <View style={{height: 50, backgroundColor: 'red'}}/>
      <View style={{width: 150, height: 50, backgroundColor:'orange'}}/>
      <View style={{height: 50, backgroundColor: 'blue'}}/> 
    </View>
  );
}



