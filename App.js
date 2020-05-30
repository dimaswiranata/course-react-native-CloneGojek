import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

import GopayFeature from './src/components/molecules/GopayFeature';
import MainFeature from './src/components/molecules/MainFeature';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import NavBarIcon from './src/components/molecules/NavBarIcon';
import NavBar from './src/containers/organisms/NavBar';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

// const Button = () => {
//   return (
//     <View><Text>Button</Text></View>
//   );
// }

// function Button(){
//   return (
//     <View><Text>Button</Text></View>
//   );
// }

// class Button extends Component {
//   state = {

//   }
//   render(){
//     return (
//       <View><Text>Button</Text></View>
//     );
//   }
// }

// const GopayFeature = (props) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center'}}>
//       <Image source={props.source}/>
//       <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{props.title}</Text>
//     </View>
//   );
// }

// class GopayFeature extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, alignItems: 'center'}}>
//         <Image source={this.props.source}/>
//         <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{this.props.title}</Text>
//       </View>
//     );
//   }
// }

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <SearchFeature/>
        <HomeGoPay/>
        <HomeMainFeature/>
        <View style={{height: 17, backgroundColor: '#F2F2F4'}}/>
        <GoNews/>
        <GoInfo/>
        <GoBanner/>
        <ScrollableProducts/>
      </ScrollView>
      <NavBar/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
