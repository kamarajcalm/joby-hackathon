import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState ,} from "react";
import { ActivityIndicator, StyleSheet,Dimensions } from "react-native";

import {FlatList,Image,View,Center,Text,Circle, useSafeArea, Pressable} from "native-base"
import { textStyles } from "../../styles";
import { themeColor } from "../../config";
const {height,width} =Dimensions.get("window")
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const data = [
  {
    Title: "WELCOME TO JOBY",
    content: "We help to find a job have to climp higher for dream",
    img: require("../../../assets/one.png"),
  },
  {
    Title: "LEARN + EARN",
    content: "We help to find a job have to climp higher for dream",
    img: require("../../../assets/two.png"),
  },
  {
    Title: "WORK FROM ANY WHERE",
    content: "We help to find a job have to climp higher for dream",
    img: require("../../../assets/one.png"),
  },
];
const IntroScreen = () => {
  const navigation = useNavigation();
  const [active,setActive] = useState(0)
   const onViewableItemsChanged = React.useCallback((info) => {
     const { viewableItems } = info;

     const [viewableItem] = viewableItems;

     if (viewableItem) {
       const { index } = viewableItem;

       setActive(index);
     }
   }, []);
  return (
    <View flex={1} style={styles.container}>
      <FlatList
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        pagingEnabled
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width ,height}} flex={1} >
              <View flex={0.5}>
                <Center
                  flex={1}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image
                    resizeMode="contain"
                    source={item.img}
                    alt="Alternate Text"
                    style={{ height: "90%", width: width }}
                  />
                </Center>
              </View>
              <View
                flex={0.5}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <View>
                  <Text
                    fontSize="3xl"
                    style={[textStyles.normal, { color: themeColor }]}
                  >
                    {item.Title}
                  </Text>
                </View>
                <View>
                  <Text
                    textAlign={"center"}
                    fontSize="lg"
                    style={[
                      textStyles.normal,
                      { color: "#000", fontWeight: "bold" },
                    ]}
                  >
                    {item.content}
                  </Text>
                </View>

                <Center>
                  {active == 2 && (
                    <Pressable
                      flexDirection={"column"}
                      onPress={() => {
                        navigation.navigate("SelectorScreen");
                      }}
                    >
                      <Circle
                        height={10}
                        width={10}
                        borderRadius={20}
                        alignItems={"center"}
                        justifyContent={"center"}
                        backgroundColor={themeColor}
                        flexDirection={"row"}
                      >
                        <FontAwesome
                          name="angle-right"
                          size={24}
                          color="#fff"
                        />
                      </Circle>
                      <View>
                        <Text
                          style={[
                            textStyles.normal,
                            { color: themeColor, marginTop: 10, marginLeft: 5 },
                          ]}
                        >
                          Next
                        </Text>
                      </View>
                    </Pressable>
                  )}
                </Center>

                <Center flexDirection={"row"}>
                  {data.map((it, index) => {
                    let activeItem = index == active;
                    return (
                      <Pressable
                        
                        key={index}
                        style={activeItem ? styles.activeRound : styles.round}
                      ></Pressable>
                    );
                  })}
                </Center>
              </View>
            </View>
          );
        }}
      />
      <Pressable
        position={"absolute"}
        top={"10"}
        right={"10"}
        onPress={() => {
          navigation.navigate("SelectorScreen");
        }}
      >
        <Text style={[textStyles.normal, { fontSize: 18 }]}>SKIP</Text>
      </Pressable>
      <StatusBar style="light" backgroundColor={themeColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  round: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "gray",
    marginLeft: 10,
  },
  activeRound: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: themeColor,
    marginLeft: 10,
  },
});
export default IntroScreen;
