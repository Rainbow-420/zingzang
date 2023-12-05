/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {Component, useState} from 'react';
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
import {checkEmail} from '../utils/Utils';

interface componentNameProps {}
// create a component
const ForgotPassword = (props: componentNameProps) => {
  const [emailId, setEmailId] = useState('');
  const [isValidating, setIsValidating] = useState(0);

  const validatingEmailLinkButton = () => {
    return emailId.length > 0 && isValidating === 0 ? false : true;
  };
  const isValidated = (text: string, type: string) => {
    setIsValidating(0);
    if (type === 'user_email') {
      setEmailId(text);
    }
  };
  const onSendEmailLink = () => {
    if (!checkEmail(emailId)) {
      setIsValidating(2);
    } else {
      props.navigation.navigate('ConfirmMail');
    }
  };
  return (
    <ImageBackground style={{height: hp('100%')}} source={Images.BG}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          navigation={props.navigation}
          HeaderTitle={Strings.FORGOT_PASSWORD_HEADER}
        />
        <View style={{flex: 1, borderWidth: 0}}>
          <View style={{flex: 9, borderWidth: 0}}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: hp('1.8%'),
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}>
                {Strings.FORGOT_PASS_TEXT}
              </Text>
            </View>
            <View
              style={{
                flex: 9,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              {/* Email text input */}
              <View style={{marginTop: hp('2.5%'), width: '90%'}}>
                <View style={{flexDirection: 'row', marginLeft: wp('0.5%')}}>
                  <Image source={Images.EMAIL} />
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        marginLeft: wp('2.5%'),
                        fontSize: hp('1.5%'),
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      {Strings.EMAIL_ID}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    height: hp('5%'),
                    borderRadius: 10,
                    marginTop: hp('1%'),
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    value={emailId}
                    onChangeText={e => isValidated(e, 'user_email')}
                    underlineColorAndroid="transparent"
                    placeholder={Strings.ENTER_USER_EMAIL}
                    placeholderTextColor="#FFFFFF"
                    autoCapitalize="none"
                    style={{
                      textAlign: 'left',
                      marginLeft: wp('2%'),
                    }}
                  />
                </View>
                {isValidating === 2 ? (
                  <Text
                    numberOfLines={1}
                    style={{
                      textAlign: 'left',
                      color: '#FF0000',
                      marginTop: 8,
                      fontSize: hp('1.8%'),
                    }}>
                    {Strings.VALIDATE_EMAIL}
                  </Text>
                ) : null}
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => onSendEmailLink()}
              disabled={validatingEmailLinkButton()}
              style={{
                backgroundColor: validatingEmailLinkButton()
                  ? 'rgba(254, 242, 255, 0.2)'
                  : '#F780FB',
                height: hp('6%'),
                width: '95%',
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp('2%'),
                  color: validatingEmailLinkButton()
                    ? 'rgba(251, 197, 253, 1)'
                    : '#FFFFFF',
                }}>
                {Strings.SEND_LINK}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

//make this component available to the app
export default ForgotPassword;
