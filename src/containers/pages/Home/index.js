import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';
import MainFeature from '../../../components/molecules/MainFeature';
import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import NavBar from '../../organisms/NavBar';
import ScrollableProducts from '../../organisms/ScrollableProducts';
import HomeMainFeature from '../../organisms/HomeMainFeature';
import HomeGoPay from '../../organisms/HomeGoPay';

const Home = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <SearchFeature/>
        <HomeGoPay/>
        <HomeMainFeature/>
        <View style={{height: 17, backgroundColor: '#F2F2F4'}}/>
        <GoNews onPress={() => navigation.navigate('NewsDetail')}/>
        <GoInfo/>
        <GoBanner/>
        <ScrollableProducts/>
      </ScrollView>
      <NavBar/>
    </View>
  );
};

export default Home;