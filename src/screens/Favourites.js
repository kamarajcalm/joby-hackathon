import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { themeColor } from "../config";
import { textStyles } from "../styles";
import { View, Text } from "native-base";
import { FontAwesome, Entypo, Ionicons } from "@expo/vector-icons";
import Feeds from "../components/Feeds";
const { height, width } = Dimensions.get("window");
const Favourites = () => {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={[textStyles.bold, { color: "#fff", fontSize: 20 }]}>
            Favourites
          </Text>
        </View>
      </View>
      <Feeds />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  front: {
    backgroundColor: "#fff",
    padding: 25,
  },
  footer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    backgroundColor: themeColor,
    height: height * 0.06,
    width: width * 0.8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  postWrapper: {
    backgroundColor: "#fafafa",
    height: height * 0.7,
    width: width * 0.9,
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  header: {
    height: height * 0.1,
    backgroundColor: themeColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});

export default Favourites;
