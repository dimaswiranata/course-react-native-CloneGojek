import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const ScrollableItem = (props) => {
  return (
    <View style={{marginRight: 16}}>
      <View style={{height: 150, width: 150, borderRadius: 10}}>
        <Image source={props.source} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4}}/>
      </View>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12}}>{props.title}</Text>
    </View>
  );
}

export default ScrollableItem;