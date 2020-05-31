import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const GopayFeature = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.source}/>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15, textAlign: 'center'}}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GopayFeature;