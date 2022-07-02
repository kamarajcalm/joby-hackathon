import React from 'react';
import { createNativeStackNavigator,} from "@react-navigation/native-stack";
import DefaultScreen from '../screens/DefaultScreen';
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
import { SafeAreaView } from "react-native";

import SelectorScreen from '../screens/login/SelectorScreen';
import IntroScreen from '../screens/login/IntroScreen';
import SignUpScreen from '../screens/login/SignUpScreen';
import LoginScreen from "../screens/login/LoginScreen";
import OtpScreen from "../screens/login/OtpScreen";
import ForgotPassword from "../screens/login/ForgotPassword";
import TabNavigator from './TabNavigator';

const Navigation  = ()=>{
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DefaultScreen"
            component={DefaultScreen}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="OtpScreen"
            component={OtpScreen}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="SelectorScreen"
            component={SelectorScreen}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="IntroScreen"
            component={IntroScreen}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Navigation;