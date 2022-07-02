import React, { useState } from "react";
import { ActivityIndicator, Dimensions, StyleSheet } from "react-native";
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
  Pressable,
  Divider,
  useNativeBase,
} from "native-base";
import { textStyles } from "../../styles";
import { themeColor } from "../../config";
import { checkPhone } from "../../utils/checkPhone";
import { checkEmail } from "../../utils/checkEmail";

import { useNavigation } from "@react-navigation/native";
import useChangeEffect from "../../hooks/useChangeEffect";

const { height, width } = Dimensions.get("window");
const OtpScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [validPhone, setValidPhone] = useState(true);
  const [validEmail, setvalidEmail] = useState(true);
  useChangeEffect(() => {
    setValidPhone(true);
    setvalidEmail(true);
  }, [email, phoneNumber]);
  const signUp = () => {
    if (!checkPhone(phoneNumber)) {
      return setValidPhone(false);
    }
    if (!checkEmail(email)) {
      return setValidPhone(false);
    }

    navigation.navigate("OtpScreen");
  };
  return (
    <ScrollView>
      <Center mt={"10"}>
        <Image
          resizeMode={"contain"}
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="Alternate Text"
          style={{ height: height * 0.38, width: width }}
        />
        <View mt={"4"}>
          <Text style={[textStyles.bold, { fontSize: 20 }]}>Sign Up</Text>
        </View>
        <Box alignItems="center">
          <Input
            value={phoneNumber}
            onChangeText={(value) => setPhoneNumber(value)}
            style={[textStyles.normal]}
            mx="3"
            placeholder="Enter Your Phone Number"
            w="80%"
            mt={"4"}
          />
          {!validPhone && (
            <View marginY={"1"}>
              <Text style={[textStyles.normal, { color: "red" }]}>
                Please Enter 10 Digit Number
              </Text>
            </View>
          )}
          <Input
            value={email}
            onChangeText={(value) => setEmail(value)}
            style={[textStyles.normal]}
            mx="3"
            placeholder="Enter Your Email Id"
            w="80%"
            mt={"4"}
          />
          {!validEmail && (
            <View marginY={"1"}>
              <Text style={[textStyles.normal, { color: "red" }]}>
                Please Enter Valid Email
              </Text>
            </View>
          )}
          <Pressable
            style={styles.button}
            mt={"4"}
            onPress={() => {
              signUp();
            }}
          >
            <Text style={[textStyles.normal, { color: "#fff" }]}>SIGN UP</Text>
          </Pressable>

          <View mt={"4"} flexDirection={"row"}>
            <View>
              <Text style={[textStyles.normal]}>Already Have An Account ?</Text>
            </View>
            <Pressable ml={"4"}>
              <Text style={[textStyles.normal, { color: themeColor }]}>
                Login
              </Text>
            </Pressable>
          </View>
          <View mt={"4"} flexDirection={"row"}>
            <View alignItems={"center"} justifyContent={"center"}>
              <Divider style={{ width: width * 0.2 }}></Divider>
            </View>

            <View ml={"2"}>
              <Text style={[textStyles.normal]}>OR</Text>
            </View>
            <View alignItems={"center"} justifyContent={"center"} ml={"2"}>
              <Divider style={{ width: width * 0.2 }}></Divider>
            </View>
          </View>
          <View mt={"4"}>
            <Text style={[textStyles.normal, { color: themeColor }]}>
              Sign Up with
            </Text>
          </View>
          <View
            mt={"4"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Pressable>
              <Image
                resizeMode={"contain"}
                source={{
                  uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
                }}
                alt="Alternate Text"
                style={{ height: 40, width: 40 }}
              />
            </Pressable>
            <Pressable ml={"4"}>
              <Image
                resizeMode={"contain"}
                source={{
                  uri: "https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-0.png",
                }}
                alt="Alternate Text"
                style={{ height: 40, width: 40 }}
              />
            </Pressable>
          </View>
        </Box>
      </Center>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: height * 0.05,
    width: width * 0.4,
    backgroundColor: themeColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
export default OtpScreen;
