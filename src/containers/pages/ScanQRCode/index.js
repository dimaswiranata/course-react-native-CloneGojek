import React from 'react';
import { Text, Button, View } from 'react-native';

const IconWithText = (props) => {
  return(
    <View>
      <View style={{width: 60, height: 60, backgroundColor: 'green', borderRadius: 60}}/>
      <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 18}}>{props.title}</Text>
    </View>
  )
}

const IconAction = () => {
  return(
    <View style={{width: 35, height: 35, backgroundColor: 'white', borderRadius: 20}}/>
  )
}

const ScanQRCode = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'grey'}}>
        <View style={{flexDirection: 'row', marginTop: 16, paddingHorizontal: 16, justifyContent: 'space-between'}}>
          <IconAction/>
          <View style={{flexDirection: 'row', paddingHorizontal: 16, justifyContent: 'space-between', width: 80}}>
            <IconAction/>
            <IconAction/>
          </View>
        </View>
      </View>
      <View style={{height: 200, backgroundColor: 'white', paddingHorizontal: 16}}>
        <View style={{alignItems: 'center', marginTop: 8, marginBottom: 10}}>
          <View style={{width: 40, height: 3, backgroundColor: '#E0E0E0', marginVertical: 1}}/>
          <View style={{width: 40, height: 3, backgroundColor: '#E0E0E0', marginVertical: 1}}/>
          <View/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>More Options</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#61A756'}}>SHORTCUT</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start', width: 160, justifyContent: 'space-between', marginRight: 12}}>
            <IconWithText title='Phone Number'/>
            <IconWithText title='Gopay code'/>
          </View>
          <View style={{width: 1, height: 60, backgroundColor: 'grey'}}/>
          <View style={{flex:1, paddingLeft: 12}}>
            <Text>Your recent GoPay receivers will show here. No admin fees!</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ScanQRCode;