import React from "react";
import {View,Text,} from 'native-base'
import { Platform } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
const AddPost  =()=>{
  return (
    <View
      style={{
        marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
      }}
    >
      <Text>AddPost</Text>
    </View>
  );
}

export default AddPost