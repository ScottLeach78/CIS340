import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {

  _onPressButton(){
    alert('YOU TAPPED a BUTTON')
  }

  render(){
  return (
    <View style={styles.container}>
      
    <View style={styles.containerButton}>
      <Button
        onPress={this._onPressButton}
        title="Press Button 1"
        />
      </View>

      <View style={styles.containerLayoutButton}>

      <Button
        onPress={this._onPressButton}
        title="Press Button 2"
        />

      <Button
        onPress={this._onPressButton}
        title="Press Button 3"
        color='green'
        />

      </View>

        <View style={styles.containerButton}>
        <Button
        onPress={this._onPressButton}
        title="Press Button 4"
        color='red'
        />

        </View>



      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 25,
  },
  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

});
