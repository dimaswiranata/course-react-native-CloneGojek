import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

class NavBar extends Component {
  render(){
    return (
      <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
        <NavBarIcon title='Home' source={require('../../../assets/icon/home-active.png')} active/>
        <NavBarIcon title='Orders' source={require('../../../assets/icon/order.png')}/>
        <NavBarIcon title='Help' source={require('../../../assets/icon/help.png')}/>
        <NavBarIcon title='Inbox' source={require('../../../assets/icon/inbox.png')}/>
        <NavBarIcon title='Account' source={require('../../../assets/icon/account.png')}/>
      </View>
    );
  }
}

export default NavBar;