import React from 'react';
import { Text, View, SectionList} from 'react-native';
  
  

  export default MyStatesApp = () => {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <SectionList
          sections= {[
            {title: 'A', data: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']},
            {title: 'C', data: ['California', 'Colorado', 'Connecticut']},

          ]}
          renderItem={({item})  => <Text  style={{padding: 10, fontsize: 20, height: 44}}> 
          {item}  </Text> }
          renderSectionHeader={({section}) => <Text style={{paddingTop: 8, paddingLeft: 10,
          paddingRight: 8, paddingBottom: 20, fontsize: 14, fontWeight: 'bold', 
          BackgroundColor:'9FA8DA' }}> {section.tite}</Text>}//set your custom color
          keyExtractor={(item,index) => index}

      />
    </View>
  );
 }
