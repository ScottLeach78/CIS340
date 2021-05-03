import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{width:150, height: 150, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor:'yellow'}}/>
      <View style={{width:100, height: 100, backgroundColor: 'blue'}} />
    </View>
  );
}



