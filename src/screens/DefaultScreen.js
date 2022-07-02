import { useNavigation } from "@react-navigation/native";
import React,{useEffect} from "react";
import {ActivityIndicator,StyleSheet,View} from 'react-native'
import { CommonActions } from "@react-navigation/native";

const DefaultScreen = ()=>{
  const navigation = useNavigation()
  useEffect(()=>{
     navigation.dispatch(
       CommonActions.reset({
         index: 0,
         routes: [
           {
             name: "IntroScreen",
           },
         ],
       })
     );
  },[])
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"red"}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default DefaultScreen;