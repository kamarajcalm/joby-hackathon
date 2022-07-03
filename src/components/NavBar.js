import React from "react";
import {View,Text, Pressable} from 'native-base';
import {StyleSheet,Dimensions} from 'react-native'
import { themeColor } from "../config";
const {height,width}  = Dimensions.get("window");
import {

  FontAwesome

} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { textStyles } from "../styles";
const NavBar = ({title})=>{
    const navigation = useNavigation()
 return (
   <View style={styles.container}>
     <Pressable
       _pressed={{
         opacity: 0.5,
       }}
       flex={0.2}
       onPress={() => {
         navigation.goBack();
       }}
       style={[styles.center]}
     >
       <FontAwesome name="angle-left" size={40} color="#fff" />
     </Pressable>
     <View flex={0.6} style={[styles.center]}>
       <Text style={[textStyles.normal, { color: "#fff", fontSize: 20 }]}>
         {title}
       </Text>
     </View>
     <View flex={0.2}></View>
   </View>
 );
}

const styles = StyleSheet.create({
    container:{
        height:height*0.1,
        backgroundColor:themeColor,
        flexDirection:"row",
    },
    center:{
        alignItems:"center",
        justifyContent:"center"
    }
})

export default NavBar