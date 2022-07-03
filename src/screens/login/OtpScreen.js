import React, { useState ,useRef,useEffect} from "react";
import { ActivityIndicator, Dimensions, Platform, StyleSheet } from "react-native";
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
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useChangeEffect from "../../hooks/useChangeEffect";
import Constants from 'expo-constants';
import { useRoute } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
import { CommonActions } from "@react-navigation/native";
const OtpScreen = () => {
  const navigation = useNavigation();
  const inputRef = useRef([]);
  const [timer, setTimer] = useState(30);
  const [otp, setOtp] = useState(["", "", "", "",]);
  const [resend, setResend] = useState(false);
  const route = useRoute();
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  useEffect(() => {
    if (timer == 0) {
      setResend(true);
    }
    const counter = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(counter);
  }, [timer]);
  const focusNext = (value, index) => {
    console.log(index);
    if (index < 3 && value) {
      inputRef.current[index + 1].focus();
    }
    if (index === otp.length - 1) {
      inputRef.current[index].blur();
    }
    otp[index] = value;
    setOtp([...otp]);
  };
  const focusPrevious = (key, index) => {
    if (key === "Backspace" && index !== 0) inputRef.current[index - 1].focus();
  };
  return (
    <View
  
    >
      <ScrollView>
        <View
          style={{ height: height * 0.08, paddingLeft: 30, paddingTop: 15 }}
        >
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <FontAwesome name="angle-left" size={40} color="black" />
          </Pressable>
        </View>

        <Center>
          <Image
            resizeMode={"contain"}
            source={require("../../../assets/EnterOTPamico.png")}
            alt="Alternate Text"
            style={{ height: height * 0.38, width: width }}
          />
          <View mt={"4"} s>
            <Text style={[textStyles.normal, { fontSize: 20 }]}>
              OTP verification
            </Text>
          </View>

          <View mt={"4"}>
            <Text>Please Enter the Verification Code</Text>
          </View>
          <View>
            <Text>send to 7010117137</Text>
          </View>
          <View mt={"4"}>
            <Text style={[textStyles.bold, { fontSize: 20 }]}>Enter OTP</Text>
          </View>
          <View flexDirection={"row"} mt={"4"}>
            {Array(4)
              .fill("_")
              .map((item, index) => {
                return (
                  <Input
                    ml={"4"}
                    width={"12"}
                    size={"lg"}
                    onKeyPress={(e) => focusPrevious(e.nativeEvent.key, index)}
                    onChangeText={(value) => focusNext(value, index)}
                    ref={(el) => (inputRef.current[index] = el)}
                    maxLength={1}
                    keyboardType={"numeric"}
                    selectionColor={themeColor}
                    key={index}
                    style={[textStyles.normal]}
                  />
                );
              })}
          </View>
          <View
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={"4"}
            width={width * 0.5}
          >
            <View>
              <Text style={[textStyles.normal]}>00 :{timer}</Text>
            </View>
            <Pressable>
              <Text style={[textStyles.normal]}>Resend OTP</Text>
            </Pressable>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => {
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [
                      {
                        name: "TabNavigator",
                      },
                    ],
                  })
                ); 
        
            }}
          >
            <Text style={[textStyles.normal, { color: "#fff" }]}>
              Verify OTP
            </Text>
          </Pressable>
        </Center>
      </ScrollView>
    </View>
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
    marginVertical:40
  },
});
export default OtpScreen;
