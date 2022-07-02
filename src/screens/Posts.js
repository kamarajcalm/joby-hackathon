import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
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
  Circle,
  Row,
  FlatList,
} from "native-base";
import { themeColor } from "../config";
import { textStyles } from "../styles";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
const data = [
  {
    Title: "Arun Karthick",
    Date:"22/07/2022",
    Location:"chennai",
    content: "We help to find a job have to climp higher for dream",
    // img: require("../../../assets/screen1.png"),
  },
  {
    Title: "LEARN + EARN",
    Date:"22/07/2022",
    Location:"chennai",
    content: "We help to find a job have to climp higher for dream",
    // img: require("https://wallpaperaccess.com/full/317501.jpg"),
  },
  {
    Title: "WORK FROM ANY WHERE",
    Date:"22/07/2022",
    Location:"chennai",
    content: "We help to find a job have to climp higher for dream",
    // img: require("https://wallpaperaccess.com/full/317501.jpg"),
  },
];
const Posts = () => {
  const navigation =  useNavigation()
  return (
    <View flex={1} style={{ backgroundColor: themeColor }}>
      <View flex={0.9} style={styles.front}>
      <FlatList 
      data={data}
      renderItem={({ item, index }) => { 
        return(
          <View  style={styles.postWrapper}>
          <View mt={"4"} ml={"3"} mr={3}>
           <Text style={[textStyles.bold, { fontSize: 20, color:themeColor }]}>{item.Title}  </Text>
           <Image
             resizeMode={"contain"}
             source={{
               uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00JwanPi-ngj4a_eIbJbF1TucNmCUPP1ufQ&usqp=CAU.jpg",
             }}
             alt="Alternate Text"
             style={{ height: height * 0.38, width: width  }}
           />
           </View>
           <View mt={"3"} ml={"3"} flexDirection={"row"}>
             <Text style={[textStyles.normal, { fontSize: 15, }]}>Posted On : {item.Date}
             </Text>
           </View>
           <View mt={"3"} ml={"3"} flexDirection={"row"}>
             <Text style={[textStyles.normal, { fontSize: 15,  }]}>Job Location : {item.Location} 
             </Text>
           </View>
           <View mt={"3"} ml={"3"} flexDirection={"row"}>
             <Text style={[textStyles.normal, { fontSize: 15,  }]}>DESCRIPTION : {item.content}
             </Text>
           </View>
          </View>
        )
      }}
      />
       
       
      
      </View>
      <View flex={0.1} style={styles.footer}>
        <Center>
          <Pressable flexDirection={"column"}
          onPress={()=>{
            navigation.navigate("AddPost");
           }}>
            <Circle
              height={20}
              width={20}
              borderRadius={50}
              alignItems={"center"}
              justifyContent={"center"}
              backgroundColor={themeColor}
              flexDirection={"row"}
              marginBottom={"10"}
            >
              <Entypo name="plus" size={24} color="#fff" />
            </Circle>
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
  front: {
    backgroundColor: themeColor,
    padding:25,
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
  postWrapper:{
    backgroundColor:"#fff",
    height: height * 0.7,
    width: width * 0.85,

    marginTop: 30,
    borderRadius: 10,
  }
});


export default Posts;
