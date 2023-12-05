/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Strings} from '../constant/Strings';
import {Images} from '../constant/Images';
import {ScrollView} from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
interface componentNameProps {}
// create a component
const Login = (props: componentNameProps) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginButton, setIsLoginButton] = useState(true);
  const [isValidating, setIsValidating] = useState(0);
  const [isSignUpDisableButton, setIsSignUpDisableButton] = useState(false);

  useEffect(() => {
    return () => {};
  }, [userName, password]);

  const validatingLoginButton = () => {
    return userName.length > 0 && password.length > 0 ? false : true;
  };
  // Check All validation
  const isValidated = (text: string, type: string) => {
    setIsValidating(0);
    if (type === 'user_name') {
      if (text.length === 0) {
        setIsValidating(1);
        setUserName('');
      } else {
        setIsValidating(0);
        const result = text.replace(/[^a-z]/gi, '');
        setUserName(result);
      }
    } else if (type === 'user_password') {
      setPassword(text);
    }
    userName.length != 0 && password.length != 0
      ? setIsLoginButton(false)
      : setIsLoginButton(true);
  };
  return (
    <ImageBackground style={{height: hp('100%')}} source={Images.BG}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{height: hp('5%'), borderWidth: 0}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp('2.5%'),
                  marginTop: hp('2.5%'),
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}>
                {Strings.Welcome_Back}
              </Text>
              <Text
                style={{
                  fontSize: hp('2.5%'),
                  marginTop: hp('1.5%'),
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}>
                {Strings.Login_Account}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: hp('20%'),
              alignItems: 'center',
              marginVertical: hp('5%'),
            }}>
            {/* User text input */}
            <View
              style={{
                width: '90%',
                marginTop: hp('2.5%'),
              }}>
              <View style={{flexDirection: 'row', marginLeft: wp('0.5%')}}>
                <Image source={Images.PROFILE} />
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{
                      marginLeft: wp('2.5%'),
                      fontSize: hp('1.5%'),
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {Strings.USER_NAME}
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
                  value={userName}
                  onChangeText={e => isValidated(e, 'user_name')}
                  underlineColorAndroid="transparent"
                  placeholder={Strings.ENTER_USER_NAME}
                  placeholderTextColor="#FFFFFF"
                  autoCapitalize="none"
                  style={{
                    textAlign: 'left',
                    marginLeft: wp('2%'),
                  }}
                />
              </View>
            </View>

            {/* Password text input */}
            <View
              style={{
                width: '90%',
                marginTop: hp('2.5%'),
              }}>
              <View style={{flexDirection: 'row', marginLeft: wp('0.5%')}}>
                <Image source={Images.LOCK} />
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{
                      marginLeft: wp('2.5%'),
                      fontSize: hp('1.5%'),
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {Strings.PASSWORD}
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
                  value={password}
                  onChangeText={e => isValidated(e, 'user_password')}
                  underlineColorAndroid="transparent"
                  placeholder={Strings.ENTER_USER_PASSWORD}
                  placeholderTextColor="#FFFFFF"
                  autoCapitalize="none"
                  style={{
                    textAlign: 'left',
                    marginLeft: wp('2%'),
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{height: hp('5%'), marginTop: hp('4%')}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPassword')}>
              <Text
                numberOfLines={2}
                style={{
                  color: '#F780FB',
                  fontSize: hp('2%'),
                  textAlign: 'center',
                }}>
                {Strings.Forgot_password}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: hp('8%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              disabled={validatingLoginButton()}
              style={{
                backgroundColor: validatingLoginButton()
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
                  marginLeft: wp('2%'),
                  color: validatingLoginButton()
                    ? 'rgba(251, 197, 253, 1)'
                    : '#FFFFFF',
                }}>
                {Strings.LOGIN}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: hp('5%'),
              borderWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '95%',
              }}>
              <View style={{flex: 1, height: 1, backgroundColor: '#FFFFFF'}} />
              <View>
                <Text
                  style={{
                    width: wp('30%'),
                    textAlign: 'center',
                    color: '#FFFFFF',
                    fontSize: hp('2%'),
                  }}>
                  {Strings.OR_LOGIN}
                </Text>
              </View>
              <View style={{flex: 1, height: 1, backgroundColor: '#FFFFFF'}} />
            </View>
          </View>
          <View style={{borderWidth: 0, alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(250, 250, 250, 0.2)',
                height: hp('6%'),
                width: '95%',
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: hp('2%'),
                borderWidth: 0.5,
                borderColor: '#FFFFFF',
              }}>
              <Image source={Images.GOOGLE_ICON} />
              <Text
                style={{
                  marginLeft: wp('2%'),
                  fontSize: hp('2.5%'),
                  color: '#FFFFFF',
                }}>
                {Strings.CONTINUE_WITH_GOOGLE}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(250, 250, 250, 0.2)',
                height: hp('6%'),
                width: '95%',
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: hp('2%'),
                borderWidth: 0.5,
                borderColor: '#FFFFFF',
              }}>
              <Image source={Images.FACEBOOK_ICON} />
              <Text
                style={{
                  marginLeft: wp('2%'),
                  fontSize: hp('2.5%'),
                  color: '#FFFFFF',
                }}>
                {Strings.CONTINUE_WITH_FACEBOOK}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(250, 250, 250, 0.2)',
                height: hp('6%'),
                width: '95%',
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: hp('2%'),
                borderWidth: 0.5,
                borderColor: '#FFFFFF',
              }}>
              <Image source={Images.APPLE_ICON} />
              <Text
                style={{
                  marginLeft: wp('2%'),
                  fontSize: hp('2.5%'),
                  color: '#FFFFFF',
                }}>
                {Strings.CONTINUE_WITH_APPLE}
              </Text>
            </TouchableOpacity>
          </View>
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
                {Strings.DO_NOT_HAVE_ACCOUNT}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('SignUPWithEmailScreen')
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#F780FB',
                    fontSize: hp('2%'),
                  }}>
                  {Strings.SIGNUP}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

//make this component available to the app
export default Login;
