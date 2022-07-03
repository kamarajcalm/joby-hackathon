import React, { useState } from  'react';
import {
  View,
  Box,
  Image,
  Circle,
  Center,
  Text,
  Pressable
} from "native-base";
import {StyleSheet,Dimensions} from "react-native";
import { textStyles } from '../styles';
import { themeColor } from '../config';
const {height,width} = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
const FeedCard = ({data})=>{
    const navigation = useNavigation();
    const [dataa,setDataa] = useState(data)
  return (
    <View
      shadow={"1"}
      rounded={"sm"}
      margin={"2"}
      mt={"5"}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
    >
      <View style={styles.header} flex={1} flexDirection={"row"}>
        <View flex={0.2} justifyContent={"center"} alignItems={"center"}>
          <Center>
            <Image
              resizeMode="contain"
              source={{
                uri: "https://i.pinimg.com/564x/18/8b/da/188bda5d34b611b1964a78b9b50453f6.jpg",
              }}
              alt="Alternate Text"
              style={{ height: 60, width: 60, borderRadius: 30 }}
            />
          </Center>
        </View>
        <View flex={0.6} justifyContent={"center"}>
          <View>
            <Text
              style={[textStyles.normal, { color: themeColor, fontSize: 20 }]}
            >
              {dataa.name}
            </Text>
          </View>
          <View>
            <Text style={{ color: "gray" }}>{dataa.type}</Text>
          </View>
        </View>
        <View flex={0.2} alignItems={"center"} justifyContent={"center"}>
          <Pressable>
            <Entypo name="share" size={24} color="#000" />
          </Pressable>
          <Pressable mt={"2"} 
           onPress={()=>{
            setDataa({
                ...dataa,
                liked:!dataa.liked
            })
           }}
          >
            <AntDesign name="heart" size={24} color={dataa.liked?"red":"grey"} />
          </Pressable>
        </View>
      </View>
      <Pressable
        flexDirection={"column"}
        onPress={() => {
          navigation.navigate("ViewJob");
        }}
      >
        <View style={styles.content}>
          <View flexDirection={"row"} flex={1}>
            <View flex={0.2} justifyContent={"center"} alignItems={"center"}>
              <Entypo name="shop" size={24} color="#ffd11a" />
            </View>
            <View flex={0.8} justifyContent={"center"}>
              <Text style={[textStyles.normal]}>{dataa.company}</Text>
            </View>
          </View>
          <View flexDirection={"row"} flex={1}>
            <View flex={0.2} justifyContent={"center"} alignItems={"center"}>
              <Entypo name="star" size={24} color="#ffd11a" />
            </View>
            <View flex={0.8} justifyContent={"center"}>
              <Text style={[textStyles.normal]}>{dataa.rating}</Text>
            </View>
          </View>
          <View flexDirection={"row"} flex={1}>
            <View flex={0.2} justifyContent={"center"} alignItems={"center"}>
              <Entypo name="location" size={24} color="#ffd11a" />
            </View>
            <View flex={0.8} justifyContent={"center"}>
              <Text style={[textStyles.normal]}>{dataa.Address}</Text>
            </View>
          </View>
          <View flexDirection={"row"} flex={1}>
            <View flex={0.2} justifyContent={"center"} alignItems={"center"}>
              <MaterialIcons name="date-range" size={24} color="#ffd11a" />
            </View>
            <View flex={0.8} justifyContent={"center"}>
              <Text style={[textStyles.normal]}>{dataa.date}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    backgroundColor: "#ffe6ff",
  },
  content:{
    height:height*0.2,
    backgroundColor:"#ffff"
  }
});
export default FeedCard