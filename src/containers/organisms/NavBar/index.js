import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import { withNavigation } from 'react-navigation';

class NavBar extends Component {
  render(){
    return (
      <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <NavBarIcon onPress={() => this.props.navigation.navigate('Home')} title='Home' source={require('../../../assets/icon/home-active.png')} active/>
        <NavBarIcon onPress={() => this.props.navigation.navigate('Orders')} title='Orders' source={require('../../../assets/icon/order.png')}/>
        <NavBarIcon title='Help' source={require('../../../assets/icon/help.png')}/>
        <NavBarIcon title='Inbox' source={require('../../../assets/icon/inbox.png')}/>
        <NavBarIcon title='Account' source={require('../../../assets/icon/account.png')}/>
      </View>
    );
  }
}

export default withNavigation(NavBar);