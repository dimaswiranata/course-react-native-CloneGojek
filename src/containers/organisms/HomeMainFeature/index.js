import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

class HomeMainFeature extends Component {
  render(){
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap' , marginTop: 18}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
          <MainFeature source={require('../../../assets/icon/go-ride.png')} title='GO-RIDE' />
          <MainFeature source={require('../../../assets/icon/go-car.png')} title='GO-CAR' />
          <MainFeature source={require('../../../assets/icon/go-bluebird.png')} title='GO-BLUEBIRD' />
          <MainFeature source={require('../../../assets/icon/go-send.png')} title='GO-SEND' />
          <MainFeature source={require('../../../assets/icon/go-deals.png')} title='GO-DEALS' />
          <MainFeature source={require('../../../assets/icon/go-pulsa.png')} title='GO-PULSA' />
          <MainFeature source={require('../../../assets/icon/go-food.png')} title='GO-FOOD' />
          <MainFeature source={require('../../../assets/icon/go-more.png')} title='MORE' />
        </View>
      </View>
    );
  }
}

export default HomeMainFeature;