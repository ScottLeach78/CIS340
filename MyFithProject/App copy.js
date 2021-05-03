import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}> Just Yellow Text!</Text>
      <Text style={styles.largGreen}> This is Big Green</Text>
      <Text style={[styles.yellow, styles.lrgeGreen]}> Yellow Text, then Big Green Text 
      </Text>
      <Text style={[styles.yellow, styles.lrgeGreen]}> Big Green Text, then Yellow Text 
      </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({

container: {
  marginTop: 60,
},

largGreen: {
  color: 'green',
  fontWeight: 'bold',
  fontSize: 30,
},

yelow: {
  color: 'yellow',
  fontSize: 20,
}

});

