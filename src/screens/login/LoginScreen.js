import React from "react";
import { ActivityIndicator, StyleSheet,  } from "react-native";
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
    Image
} from "native-base";

const LoginScreen = () => {
  return (
 
      <ScrollView>
        <Center mt={"10"}>
          <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size="xl"
          />

        </Center>
      </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LoginScreen;
