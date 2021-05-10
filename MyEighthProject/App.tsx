import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker' //import image picker
import * SHaring from 'expo-sharing'//import image sharing

export default function App() {

  const[selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
    if (permissionResult.granted === false){

      alert("Permission is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true){
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };

  let openSharingDialogAsync = async () => {
    if (!(await SHaring.isAvailableAsync())){
      alert('Sharing is not available');
      return;
    }

    SHaring.shareAsync(selectedImage.localUri);
  }

  if (selectedImage !== null) {
    return(
      <View style={styles.container}>
        <Image source={{uri: selectedImage.localUri}} style={styles.selImage} />
      <TouchableOpacity onPress={openSharingDialogAsync} style={Styles.button}>
        <Text style={StyleSheet.buttonText}> Share this Photo </Text>
        </TouchableOpacity>
      </View>
    )
  }


  
  return (
    <View style={styles.container}>
     <Image source={{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
            style={styles.logo} />
      <Text style={styles.insts}>
        Press the button

      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={openImagePickerAsync} >
          <Text style={styles.buttonText}> Pick Image</Text>


      </TouchableOpacity>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center'
   
  },

  button: {
    
    backgroundColor: "#F0FFFF",
    padding: 10,
    borderRadius: 5
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 20,
    color: "#87CEFA"
  },
  selImage: {
    width: 300,
    height: 300,
    resize: 10
  }
});