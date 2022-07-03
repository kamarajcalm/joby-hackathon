import { useRoute } from "@react-navigation/native";
import { Input, View, Pressable ,Text} from "native-base";
import React, { useState } from "react";
import { StyleSheet, Dimensions, FlatList,TextInput, Platform,  } from "react-native";
import NavBar from "../components/NavBar";
import { FontAwesome } from "@expo/vector-icons";
import { themeColor } from "../config";
import { textStyles } from "../styles";
const dataa = [
    {
        userId:1,
        msg:"Hi"
    },
    {
        userId:1,
        msg:"How r u??"
    },
]
const ChatScreen = () => {
    const route = useRoute()
    const [data, setData] = useState(dataa);
    const[message,setMessage] = useState("")
    const [userId,setUserId] = useState(2)
    const sendMessage = ()=>{
         let push = {
           userId,
           msg: message,
         };
data.push(push)
setData([...data])
setMessage("");

    }
  return (
    <View flex={1}>
      <NavBar title={route.params.name} />

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          let sender = item.userId == userId;
          return (
            <View
              style={{
                flexDirection: "row",
                alignSelf: sender ? "flex-end" : "flex-start",
              }}
            >
              <View style={sender ? styles.sender : styles.reciever}>
                <Text style={[textStyles.normal, { color: "#fff" }]}>
                  {item.msg}
                </Text>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.inputContainer}>
        <View flex={0.8}>
          <TextInput
            style={[styles.input, textStyles.normal]}
            selectionColor={themeColor}
            value={message}
            onChangeText={(value) => {
              setMessage(value);
            }}
            placeholder={"Type Your Message"}
          />
        </View>
        <Pressable
          flex={0.2}
          alignItems={"center"}
          justifyContent={"center"}
          onPress={() => {
            sendMessage();
          }}
          _pressed={{
            opacity: 0.5,
          }}
        >
          <FontAwesome
            name="send"
            size={24}
            color={message.length > 0 ? themeColor : "gray"}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 20,
    paddingVertical: Platform.OS == "ios" ? 10 : 5,
  },
  inputContainer: {
    backgroundColor: "#fafafa",
    flexDirection: "row",
    paddingVertical: 10,
  },
  reciever: {
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 15,
    margin: 10,
  },
  sender: {
    padding: 10,
    backgroundColor: themeColor,
    borderRadius: 15,
    margin: 10,
  },
});
export default ChatScreen;
