import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
  render(){
    return (
      <View>
        <View style={{height: 15, width: 60, marginLeft: 16}} >
          <Image source={require('../../../assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, marginHorizontal: 16}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>Nearby Restaurant</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
        </View>
        <ScrollView horizontal={true} style={{flexDirection: 'row', marginLeft: 16}}>
          <ScrollableItem source={require('../../../assets/dummy/go-food-kfc.jpg')} title='KFC Aeon Mall'/>
          <ScrollableItem source={require('../../../assets/dummy/go-food-gm.jpg')} title='Bakmi GM Aeon Mall'/>
          <ScrollableItem source={require('../../../assets/dummy/go-food-banka.jpg')} title='Martabak Banka'/>
          <ScrollableItem source={require('../../../assets/dummy/go-food-orins.jpg')} title='Martabak Orins'/>
          <ScrollableItem source={require('../../../assets/dummy/go-food-pak-boss.jpg')} title='Ayam Bakar Pak Boss'/>
        </ScrollView>
        <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginHorizontal: 16, marginBottom: 20}}></View>
      </View>
    );
  }
}

export default ScrollableProducts;