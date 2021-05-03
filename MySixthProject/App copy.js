import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.localCSULogo}
        source={require('./assets/Saved Pictures/OIP.jpg')}

      />
    
      <Image 
        style={styles.urlCSULogo}
        source={{
          uri: "https://www.bing.com/images/search?view=detailV2&ccid=aUEaVN1j&id=727ACC4AD66F6756D8D95539DDDCC53C48E15C71&thid=OIP.aUEaVN1jganIIQaTPRqRZAHaKV&mediaurl=https%3a%2f%2fdenverscholarship.org%2fwp-content%2fuploads%2f2016%2f11%2fCSU-Logo.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR69411a54dd6381a9c82106933d1a9164%3frik%3dcVzhSDzF3N05VQ%26pid%3dImgRaw&exph=1375&expw=986&q=csu+logo&simid=608052886846789622&ck=1CCE930FBE86EA20D5C0631903B40782&selectedIndex=1&FORM=IRPRST"
        }}

      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },
  urlCSULogo: {
    width: 50,
    height: 50,
  }
});
