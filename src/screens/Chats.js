import React ,{useEffect, useState} from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  Divider,
  Box,
  Center,
  Heading,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Icon,
  ScrollView,
  useToast
} from "native-base";
import {StyleSheet,Dimensions} from 'react-native';
import { themeColor } from "../config";
import { textStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
import { SwipeListView } from "react-native-swipe-list-view";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "priya",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujita Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Alan",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Mari",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kaviya",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  },
];
const Chats = () => {
  const navigation = useNavigation();
 const toast =useToast()
const [listData, setListData] = useState(data);

const closeRow = (rowMap, rowKey) => {
  if (rowMap[rowKey]) {
    rowMap[rowKey].closeRow();
  }
};
useEffect(()=>{
toast.show({
    description:"Swipe left to delete chats"
})
},[])
const deleteRow = (rowMap, rowKey) => {
  closeRow(rowMap, rowKey);
  const newData = [...listData];
  const prevIndex = listData.findIndex((item) => item.key === rowKey);
  newData.splice(prevIndex, 1);
  setListData(newData);
};

const onRowDidOpen = (rowKey) => {
  console.log("This row opened", rowKey);
};

const renderItem = ({ item, index }) => (
  <Box>
    <Pressable
      _pressed={{
        opacity: 0.5,
      }}
      onPress={() =>
        console.log(navigation.navigate("ChatScreen", { name: item.fullName }))
      }
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "white",
      }}
    >
      <Box pl="4" pr="5" py="2">
        <HStack alignItems="center" space={3}>
          <Avatar
            size="48px"
            source={{
              uri: item.avatarUrl,
            }}
          />
          <VStack>
            <Text
              style={[textStyles.normal]}
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              bold
            >
              {item.fullName}
            </Text>
            <Text
              style={[textStyles.normal]}
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {item.recentText}
            </Text>
          </VStack>
          <Spacer />
          <Text
            style={[textStyles.normal]}
            fontSize="xs"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            alignSelf="flex-start"
          >
            {item.timeStamp}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  </Box>
);

const renderHiddenItem = (data, rowMap) => (
  <HStack flex="1" pl="2">
    <Pressable
      w="70"
      ml="auto"
      cursor="pointer"
      bg="coolGray.200"
      justifyContent="center"
      onPress={() => closeRow(rowMap, data.item.key)}
      _pressed={{
        opacity: 0.5,
      }}
    >
      <VStack alignItems="center" space={2}>
        <Icon
          as={<Entypo name="dots-three-horizontal" />}
          size="xs"
          color="coolGray.800"
        />
        <Text
          fontSize="xs"
          fontWeight="medium"
          color="coolGray.800"
          style={[textStyles.normal]}
        >
          More
        </Text>
      </VStack>
    </Pressable>
    <Pressable
      w="70"
      cursor="pointer"
      bg="red.500"
      justifyContent="center"
      onPress={() => deleteRow(rowMap, data.item.key)}
      _pressed={{
        opacity: 0.5,
      }}
    >
      <VStack alignItems="center" space={2}>
        <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
        <Text
          color="white"
          fontSize="xs"
          fontWeight="medium"
          style={[textStyles.normal]}
        >
          Delete
        </Text>
      </VStack>
    </Pressable>
  </HStack>
);

return (
  <View>
    <View style={styles.header}>
      <View>
        <Text style={[textStyles.bold, { color: "#fff", fontSize: 20 }]}>
        Chats
        </Text>
      </View>
      <View flexDirection={"row"}>
      
      </View>
    </View>
    <ScrollView>
      <Box bg="white"  flex="1">
        <SwipeListView
          ItemSeparatorComponent={()=><Divider />}
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-130}
          previewRowKey={"0"}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
        />
      </Box>
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    backgroundColor: themeColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  chat: {
    height: height * 0.1,
    flexDirection: "row",
  },
  round: {
  
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: themeColor,
 
  },
});
export default Chats;
