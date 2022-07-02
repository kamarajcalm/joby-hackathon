import { useNavigation } from "@react-navigation/native";
import React,{useEffect} from "react";
import {ActivityIndicator,StyleSheet,View} from 'react-native'
import { CommonActions } from "@react-navigation/native";
import { themeColor } from "../config";
import { StatusBar } from "expo-status-bar";
const DefaultScreen = ()=>{
  const navigation = useNavigation()
  useEffect(()=>{
     navigation.dispatch(
       CommonActions.reset({
         index: 0,
         routes: [
           {
             name: "TabNavigator",
           },
         ],
       })
     );
  },[])
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={themeColor} />
      <StatusBar style="light" backgroundColor={themeColor}/>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default DefaultScreen;