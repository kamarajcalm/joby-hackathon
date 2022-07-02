import React  from "react";
import {ActivityIndicator,StyleSheet,View} from 'react-native'
const DefaultScreen = ()=>{
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