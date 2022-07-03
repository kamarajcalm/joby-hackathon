import React, { useState } from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
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
  ScrollView,
} from "native-base";
import { themeColor } from "../config";
import { textStyles } from "../styles";
import Constants from "expo-constants";
const { height, width } = Dimensions.get("window");
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  MaterialIcons,
  EvilIcons,
  FontAwesome,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";

const ViewJob  =()=>{
  const navigation = useNavigation();
    return (
      <View flex={1} >
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            w={"6"}
          >
            <FontAwesome name="angle-left" size={40} color="#fff" />
          </Pressable>
          <View>
             <Text style={[textStyles.normal,{color:'#fff',fontSize:18}]}>Job Details</Text>
          </View>
          <View flexDirection={"row"}>
            <Pressable mr={"5"}>
              <AntDesign name="heart" size={24} color="red" />
            </Pressable>
            <Pressable>
              <Entypo name="share" size={24} color="#fff" />
            </Pressable>
          </View>
        </View>
        <ScrollView
          style={{
            marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
          }}
        >
          <StatusBar style="light" backgroundColor={themeColor} />

          <View style={styles.content} m={5}>
            <View flexDirection={"row"} flex={1}>
              <View flex={0.2} justifyContent={"center"} alignItems={"center"}>
                <Entypo name="shop" size={24} color="#ffd11a" />
              </View>
              <View flex={0.8} justifyContent={"center"}>
                <Text style={[textStyles.bold]}>Graphic Design</Text>
              </View>
            </View>
            <View flexDirection={"row"} flex={1}>
              <View flex={0.2} justifyContent={"center"} alignItems={"center"}>
                <MaterialIcons name="apartment" size={24} color="#ffd11a" />
              </View>
              <View flex={0.8} justifyContent={"center"}>
                <Text style={[textStyles.normal]}>Reveation Labs</Text>
              </View>
            </View>
            <View flexDirection={"row"} flex={1}>
              <View flex={0.2} justifyContent={"center"} alignItems={"center"}>
                <Entypo name="location" size={24} color="#ffd11a" />
              </View>
              <View flex={0.8} justifyContent={"center"}>
                <Text style={[textStyles.normal]}>Full Address</Text>
              </View>
            </View>
            <View flexDirection={"row"} flex={1}>
              <View flex={0.2} justifyContent={"center"} alignItems={"center"}>
                <Ionicons name="person" size={24} color="#ffd11a" />
              </View>
              <View flex={0.8} justifyContent={"center"}>
                <Text style={[textStyles.normal]}>2</Text>
              </View>
            </View>
          </View>
          <View m={5}>
            <Text
              style={[textStyles.normal, { fontSize: 20, fontWeight: "600" }]}
            >
              Job Description
            </Text>
            <View mt={5}>
              <Text
                style={[textStyles.bold, { fontSize: 20, fontWeight: "600" }]}
              >
                Salary
              </Text>
            </View>
            <View mt={4} ml={5}>
              <Text
                style={[textStyles.normal, { fontSize: 20, fontWeight: "600" }]}
              >
                1000 - 5000 $
              </Text>
            </View>
            <View mt={5}>
              <Text
                style={[textStyles.bold, { fontSize: 20, fontWeight: "600" }]}
              >
                Remote
              </Text>
            </View>
            <View mt={4} ml={5}>
              <Text
                style={[textStyles.normal, { fontSize: 20, fontWeight: "600" }]}
              >
                10 hours - 12 hours
              </Text>
            </View>
            <View mt={5}>
              <Text
                style={[textStyles.bold, { fontSize: 20, fontWeight: "600" }]}
              >
                Qualification
              </Text>
            </View>
            <View mt={4} ml={5}>
              <Text
                style={[textStyles.normal, { fontSize: 20, fontWeight: "600" }]}
              >
                Bachelor Degree
              </Text>
            </View>
            <View mt={5}>
              <Text
                style={[textStyles.bold, { fontSize: 20, fontWeight: "600" }]}
              >
                Benefits
              </Text>
            </View>
            <View mt={4} ml={5}>
              <Text
                style={[textStyles.normal, { fontSize: 20, fontWeight: "600" }]}
              >
                Flexible Shift
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.button}
            mt={"4"}
            marginY={"6"}
            alignSelf={"center"}
            onPress={() => {}}
          >
            <Text style={[textStyles.normal, { color: "#fff" }]}>
              Apply Now
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    );
}
const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    backgroundColor: themeColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  content: {
    height: height * 0.3,
    backgroundColor: "#ffff",
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  button: {
    height: height * 0.06,
    width: width * 0.8,
    backgroundColor: themeColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
export default ViewJob
