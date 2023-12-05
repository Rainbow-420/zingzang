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
interface componentNameProps {}
// create a component
const ResetPassword = (props: componentNameProps) => {
  const [isResetSuccess, setIsResetSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidating, setIsValidating] = useState(0);

  // Check All validation
  const isValidated = (text: string, type: string) => {
    setIsValidating(0);
    if (type === 'user_password') {
      setPassword(text);
    } else if (type === 'user_confirm_password') {
      setConfirmPassword(text);
    }
  };

  const validatingSignInButton = () => {
    return password.length > 0 && confirmPassword.length > 0 ? false : true;
  };
  //SignUp Button Click
  const resetPassClick = () => {
    if (password != confirmPassword) {
      setIsValidating(4);
    } else {
      setIsResetSuccess(true);
    }
  };
  return (
    <ImageBackground style={{height: hp('100%')}} source={Images.BG}>
      <SafeAreaView style={{flex: 1}}>
        {isResetSuccess ? (
          <>
            <View
              style={{
                flex: 1,
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: hp('2.8%'),
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textAlign: 'left',
                }}>
                {Strings.PASS_RESET}
              </Text>
              <Text
                style={{
                  fontSize: hp('2.2%'),
                  color: '#FFFFFF',
                  textAlign: 'left',
                  marginVertical: hp('5%'),
                }}>
                {Strings.PASS_RESET_SUCCESS}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignUPScreen')}
                style={{
                  backgroundColor: '#F780FB',
                  height: hp('5%'),
                  width: '95%',
                  borderRadius: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp('1.9%'),
                    color: '#FFFFFF',
                  }}>
                  {Strings.RESET_PATTON}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <Header
              navigation={props.navigation}
              HeaderTitle={Strings.RESET_PASSWORD_HEADER}
            />
            <View style={{flex: 1, borderWidth: 0}}>
              <View style={{flex: 9, borderWidth: 0}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{justifyContent: 'center', width: '90%'}}>
                    <Text
                      style={{
                        fontSize: hp('1.8%'),
                        color: '#FFFFFF',
                        textAlign: 'left',
                      }}>
                      {Strings.RESET_PASS_TEXT}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 9,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  {/* Password text input */}
                  <View
                    style={{
                      width: '90%',
                      marginTop: hp('2.5%'),
                    }}>
                    <View
                      style={{flexDirection: 'row', marginLeft: wp('0.5%')}}>
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
                          {Strings.NEW_PASSWORD}
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
                        value={password}
                        onChangeText={e => isValidated(e, 'user_password')}
                        underlineColorAndroid="transparent"
                        placeholder={Strings.CREATE_NEW_PASSWORD}
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
                    <View
                      style={{flexDirection: 'row', marginLeft: wp('0.5%')}}>
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
                        onChangeText={e =>
                          isValidated(e, 'user_confirm_password')
                        }
                        underlineColorAndroid="transparent"
                        placeholder={Strings.CREATE_NEW_PASSWORD}
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
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  disabled={validatingSignInButton()}
                  onPress={() => {
                    resetPassClick();
                  }}
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
                      fontSize: hp('2%'),
                      color: validatingSignInButton()
                        ? 'rgba(251, 197, 253, 1)'
                        : '#FFFFFF',
                    }}>
                    {Strings.RESET_PATTON}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

//make this component available to the app
export default ResetPassword;
