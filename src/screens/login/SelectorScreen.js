import React from "react";
import { ActivityIndicator, Pressable, StyleSheet ,Dimensions} from "react-native";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  ScrollView,
  View,
  Image,
  Flex,
  
} from "native-base";
const {height,width} = Dimensions.get("window")
import { themeColor } from "../../config";

const SelectorScreen = () => {
  return (
    <View flex={1} style={{ backgroundColor: themeColor }}>
      <View flex={0.4} style={styles.front}>
        <Center flex={1}>
          <Image
            resizeMode="contain"
            source={require("../../../assets/logo.png")}
            alt="Alternate Text"
            size="xl"
          />
        </Center>
      </View>
      <View flex={0.6} style={styles.footer}>
        <Center mt={"16"}>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={{ color: "#fff" }}>Job Seeker</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={{ color: "#fff" }}>Recruiter</Text>
          </Pressable>
        </Center>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  front:{
    backgroundColor:themeColor
  },
  footer:{
    backgroundColor:"#fff",
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  button:{
    backgroundColor:themeColor,
    height:height*0.06,
    width:width*0.8,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    borderRadius:10,
    
  }
});
export default SelectorScreen;
