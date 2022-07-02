import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
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
const ForgotPassword = () => {
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
    // if (!checkPhone(phoneNumber)) {
    //   return setValidPhone(false);
    // }
    // if (!checkEmail(email)) {
    //   return setValidPhone(false);
    // }

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
        <View mt={"7"} w="100%" alignItems={"center"} justifyContent={"center"}>
          <Text
            style={[textStyles.normal, { fontSize: 20, fontWeight: "700" }]}
          >
            Forgot Your Password
          </Text>
        </View>
        <View
          paddingTop={"2"}
          alignItems={"center"}
          justifyContent={"center"}
          w="65%"
        >
          <Text
            style={[textStyles.normal, { fontWeight: "700", fontSize: 11 }]}
          >
            Please Enter the verification code
          </Text>
          <Text style={[textStyles.normal, { fontWeight: "700" , fontSize: 11}]}>
            send to 123456789
          </Text>
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

          <Pressable
            style={styles.button}
            mt={"67"}
            onPress={() => {
              signUp();
            }}
          >
            <Text style={[textStyles.normal, { color: "white" }]}>
              Verify OTP
            </Text>
          </Pressable>
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
    width: width * 0.8,
    backgroundColor: themeColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
export default ForgotPassword;
