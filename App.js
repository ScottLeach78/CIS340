import React from 'react';
import { Text, View, FlatList } from 'react-native';
  
  

  export default MyStatesApp = () => {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <FlatList
          data={[
            {key: 'Alabama'},
            {key: 'Alaska'},
            {key: 'Colorado'},
            {key: 'Texas'},
            {key: 'California}'}

          ]}
          renderItem={({item})  => <Text  style={{padding: 10, fontsize: 20, height: 44}}> {item.key}  </Text> }



        />



      </View>
  
    
  );

    }
