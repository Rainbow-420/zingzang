/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Strings} from '../constant/Strings';
import {Images} from '../constant/Images';
import Header from '../components/Header';
interface componentNameProps {}
// create a component
const ConfirmMail = (props: componentNameProps) => {
  return (
    <ImageBackground style={{height: hp('100%')}} source={Images.BG}>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={props.navigation} />
        <View style={{flex: 1, borderWidth: 0}}>
          <View style={{flex: 7.5, borderWidth: 0}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={Images.MAIL} />
            </View>
            <View
              style={{
                flex: 9,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: hp('3.8%'),
                  color: '#FFFFFF',
                  textAlign: 'center',
                  marginTop: hp('6%'),
                  marginBottom: hp('3%'),
                }}>
                {Strings.CHECK_MAIL}
              </Text>
              <Text
                style={{
                  fontSize: hp('1.8%'),
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}>
                {Strings.RESET_PASSWORD_TEXT}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2.5,
              borderWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: hp('2%'),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#FFFFFF',
                    fontSize: hp('2%'),
                    marginRight: wp('3%'),
                  }}>
                  {Strings.DO_NOT_HAVE_EMAIL}
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#F780FB',
                      fontSize: hp('2%'),
                    }}>
                    {Strings.RESEND_LINK}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ResetPassword')}
              style={{
                backgroundColor: '#F780FB',
                height: hp('6%'),
                width: '95%',
                marginTop: hp('2%'),
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: '#FFFFFF',
                }}>
                {Strings.CHECK_MAIL_BUTTON}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

//make this component available to the app
export default ConfirmMail;
