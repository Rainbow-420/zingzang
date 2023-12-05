import React, {Component} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {Images} from '../constant/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class Header extends Component {
  goToHome() {
    // this.props.navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{name: 'HomeScreen'}],
    //   }),
    // );
  }
  render() {
    return (
      <>
        <View
          style={{
            height: 54,
            flexDirection: 'row',
            borderWidth: 0,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              flex: 1,
              borderWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={Images.BACK}
              style={{height: hp('3%'), width: hp('3%')}}
            />
          </TouchableOpacity>

          <View
            style={{
              flex: 9,
              borderWidth: 0,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: hp('3%'),
                marginLeft: wp('5%'),
                textAlign: 'left',
                color: '#FFFFFF',
                fontWeight:'bold'
              }}>
              {this.props.HeaderTitle}
            </Text>
          </View>
        </View>
      </>
    );
  }
}
