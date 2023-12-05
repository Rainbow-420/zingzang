/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Strings} from '../constant/Strings';
import {Images} from '../constant/Images';
import {checkEmail} from '../utils/Utils';
// import { SafeAreaView } from 'react-native-safe-area-context';
interface componentNameProps {}
// create a component
const SignUPWithEmailScreen = (props: componentNameProps) => {
  const [userName, setUserName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidating, setIsValidating] = useState(0);

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
    } else if (type === 'user_email') {
      setEmailId(text);
    } else if (type === 'user_password') {
      setPassword(text);
    } else if (type === 'user_confirm_password') {
      setConfirmPassword(text);
    }
  };
  const validatingSignInButton = () => {
    return userName.length > 0 &&
      emailId.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
      ? false
      : true;
  };
  //SignUp Button Click
  const signupClick = () => {    
    if (!checkEmail(emailId)) {
      setIsValidating(2);
    } else if (password != confirmPassword) {
      setIsValidating(4);
    } else {
      Alert.alert('ZING ZANG', 'Signup successfully done', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
  return (
    <ImageBackground style={{height: hp('100%')}} source={Images.BG}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 0.2, borderWidth: 0}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image style={{marginTop: hp('2%')}} source={Images.ISOTYPE} />
            <Text
              style={{
                fontSize: hp('2.5%'),
                marginTop: hp('2.5%'),
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}>
              {Strings.SIGNUP_EMAIL_SCREEN}
            </Text>
            <Text
              style={{
                fontSize: hp('2.5%'),
                marginTop: hp('1.5%'),
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}>
              {Strings.CREATE_NEW_ACCOUNT}
            </Text>
          </View>
        </View>
        <View style={{flex: 0.55, alignItems: 'center'}}>
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
            {isValidating === 1 ? (
              <Text
                numberOfLines={1}
                style={{
                  textAlign: 'left',
                  color: '#FF0000',
                  marginTop: 8,
                  fontSize: hp('1.8%'),
                }}>
                {Strings.VALIDATE_USER_NAME}
              </Text>
            ) : null}
          </View>

          {/* Email text input */}
          <View
            style={{
              width: '90%',
              marginTop: hp('2.5%'),
            }}>
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
            {isValidating === 3 ? (
              <Text
                numberOfLines={1}
                style={{
                  textAlign: 'left',
                  color: '#FF0000',
                  marginTop: 8,
                  fontSize: hp('1.8%'),
                }}>
                {Strings.VALIDATE_PASSWORD}
              </Text>
            ) : null}
          </View>

          {/* Confirm Password text input */}
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
                  {Strings.CONFIRM_PASSWORD}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                height: hp('5%'),
                borderRadius: 10,
                marginTop: hp('1%'),
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                value={confirmPassword}
                onChangeText={e => isValidated(e, 'user_confirm_password')}
                underlineColorAndroid="transparent"
                placeholder={Strings.ENTER_USER_CONFIRM_PASSWORD}
                placeholderTextColor="#FFFFFF"
                autoCapitalize="none"
                style={{
                  textAlign: 'left',
                  marginLeft: wp('2%'),
                  width: '88%',
                }}
              />
              <TouchableOpacity>
                <Image source={Images.HIDE} />
              </TouchableOpacity>
            </View>
            {isValidating === 4 ? (
              <Text
                numberOfLines={1}
                style={{
                  textAlign: 'left',
                  color: '#FF0000',
                  marginTop: 8,
                  fontSize: hp('1.8%'),
                }}>
                {Strings.VALIDATE_PASSWORD}
              </Text>
            ) : null}
          </View>
        </View>
        <View style={{flex: 0.15, marginHorizontal: wp('5.1%')}}>
          <View
            style={{
              marginVertical: hp('2%'),
              width: wp('90%'),
            }}>
            <Text
              numberOfLines={2}
              style={{
                textAlign: 'left',
                color: '#FFFFFF',
                fontSize: hp('2%'),
              }}>
              {Strings.BY_SIGNUP}
            </Text>
            <TouchableOpacity>
              <Text
                numberOfLines={2}
                style={{
                  color: '#F780FB',
                  fontSize: hp('2%'),
                  marginTop: 5,
                }}>
                {Strings.ZING_ZANG}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            disabled={validatingSignInButton()}
            onPress={() => signupClick()}
            style={{
              backgroundColor: validatingSignInButton()
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
                fontSize: hp('2.5%'),
                color: validatingSignInButton()
                  ? 'rgba(251, 197, 253, 1)'
                  : '#FFFFFF',
              }}>
              {Strings.SIGNUP}
            </Text>
          </TouchableOpacity>
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
              {Strings.ALREADY_SIGNUP}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUPScreen')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#F780FB',
                  fontSize: hp('2%'),
                }}>
                {Strings.SIGNIN}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

//make this component available to the app
export default SignUPWithEmailScreen;
