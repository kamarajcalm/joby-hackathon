import { View } from "native-base";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import NavBar from "../components/NavBar";
const MyProfile = () => {
  return (
    <View>
      <NavBar title={"My Profile"} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default MyProfile;
