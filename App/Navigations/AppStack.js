import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import SignUPScreen from '../screens/SignUPScreen';
import SignUPWithEmailScreen from '../screens/SignUPWithEmailScreen';
import Login from '../screens/Login';
import ResetPassword from '../screens/ResetPassword';
import ForgotPassword from '../screens/ForgotPassword';
import ConfirmMail from '../screens/ConfirmMail';


const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SignUPScreen'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUPScreen"
          component={SignUPScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUPWithEmailScreen"
          component={SignUPWithEmailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ConfirmMail"
          component={ConfirmMail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ResetPassword"
          component={ResetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
