import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const MainFeature = (props) => {
  return (
    <View style={{width: '25%', marginBottom: 18, alignItems: 'center'}}>
      <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={props.source}/>
      </View>
      <Text style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 6, color: 'black'}}>{props.title}</Text>
    </View>
  );
}

export default MainFeature;