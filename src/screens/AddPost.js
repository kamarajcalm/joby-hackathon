import React from "react";
import {StyleSheet,Dimensions,Platform} from 'react-native'
import {
  View,
  Text,
  Pressable,
  Stack,
  Input,
  Icon,
  Box,
  Select,
  CheckIcon,
  Center,
  Circle
} from "native-base";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import NavBar from "../components/NavBar";
import { Ionicons, MaterialIcons, EvilIcons } from "@expo/vector-icons";
import { themeColor } from "../config";
import { textStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
const AddPost  = ()=>{
  const navigation = useNavigation()
  return (
    <View>
      <NavBar title={"Post Jobs"} />
      <Stack space={4} w="100%" alignItems="center" mt={"4"}>
        <Input
          selectionColor={themeColor}
          style={[textStyles.normal]}
          w={{
            base: "90%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="search" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Job Title , Company"
        />
        <Input
          selectionColor={themeColor}
          style={[textStyles.normal]}
          w={{
            base: "90%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<EvilIcons name="location" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="State or City"
        />
        {/* <Input
          selectionColor={themeColor}
          style={[textStyles.normal]}
          w={{
            base: "90%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="image" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Upload Image"
        /> */}<Pressable style={styles.upload} 
           onPress={()=>{
            navigation.navigate("TabNavigator");
           }}
          >
           <View flex={0.15} style={styles.center}>
           <MaterialIcons name="image" size={24} color="grey" />
            </View>
            <View flex={0.8} style={styles.iconlabel}>
            <Text style={[textStyles.normal,{color:"grey" }]}>Upload Image</Text>
            </View>
            
          </Pressable>
          <Pressable style={styles.upload} 
           onPress={()=>{
            navigation.navigate("TabNavigator");
           }}
          >
           <View flex={0.15} style={styles.center}>
           <MaterialIcons name="video-collection" size={24} color="grey" />
            </View>
            <View flex={0.8} style={styles.iconlabel}>
            <Text style={[textStyles.normal,{color:"grey" }]}>Upload Video</Text>
            </View>
            
          </Pressable>
         
          <Pressable style={styles.upload} 
           onPress={()=>{
            navigation.navigate("TabNavigator");
           }}
          >
           <View flex={0.15} style={styles.center}>
           <MaterialIcons name="upload-file" size={24} color="grey" />
            </View>
            <View flex={0.8} style={styles.iconlabel}>
            <Text style={[textStyles.normal,{color:"grey" }]}>Upload Document</Text>
            </View>
            
          </Pressable>
     
       
             
        <Input
          selectionColor={themeColor}
          style={[textStyles.normal]}
          w={{
            base: "90%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="description" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Description"
        />
         <Pressable style={styles.button} 
           onPress={()=>{
            navigation.navigate("TabNavigator");
           }}
          >
            <Text style={[textStyles.normal,{color:"#fff"}]}>Submit</Text>
          </Pressable>
      </Stack>
     
    </View>

  );
}
const styles = StyleSheet.create({
  profileWrapper: {
    flexDirection: "row",
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center",

  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  container:{
    flexDirection:"row",
    height:height*0.1,

  },
  button: {
    height: height * 0.05,
    width: width * 0.8,
    backgroundColor: themeColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical:40
  },
  upload:{
    height: height * 0.06,
    width: width * 0.9,
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    borderColor:"grey",
    borderWidth:0.3,
    borderRadius: 4,
  },
  iconlabel:{
    justifyContent: "center",
  }
});
export default AddPost