import { View, Image, FlatList, Divider } from "native-base";
import React from "react";
import { StyleSheet, Dimensions, Text, Pressable, Alert } from "react-native";
import NavBar from "../components/NavBar";
import { themeColor } from "../config";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
import { textStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";
const data = [
  {
      label:"Username",
      text:"N. Arun Karthick",
      icon:"person"
  },
  {
      label:"phone",
      text:"8248061604",
      icon:"phone-portrait"
  },
  {
      label:"About",
      text:"Hi i am arun front-end dev sample details.",
      icon:"information-circle-sharp"
  },

] 
const MyProfile = () => {
  const navigation = useNavigation()
  return (
    <View>
      <NavBar title={"My Profile"} />
      <View style={styles.profileWrapper}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://i.pinimg.com/originals/2b/a2/45/2ba2455ca817f7659e9ebfe9d494c5db.jpg",
          }}
          alt="Alternate Text"
          style={{ height: 120, width: 120, borderRadius: 60 }}
        />
        
      </View>
      <FlatList 
    
        ItemSeparatorComponent={()=><Divider />}
        data={data}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item,index})=>{
          return(
            <View style={styles.container}>
            <View flex={0.2} style={[styles.center]}>
            <Ionicons name={item.icon} size={24} color="black" />
            </View>
            <View flex={0.6} justifyContent={"center"}>
              <View>
                <Text style={[textStyles.normal, { color: "#000" }]}>
                  {item.label}
                </Text>
              </View>
              <View>
                <Text style={[textStyles.bold, { color: "#000" }]}>
                  {item.text}
                </Text>
              </View>
            </View>
            <View flex={0.2} style={[styles.center]}>
            <MaterialIcons name="mode-edit" size={24} color="black" />
            </View>
    </View>
          )
        }}
      />
      <View style={{marginVertical:20,alignSelf:"center"}}>
         <Pressable style={styles.button}
         onPress={()=>{
              Alert.alert("Are you sure to Logout?", "", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: async () => {
                      navigation.dispatch(
                        CommonActions.reset({
                          index: 0,
                          routes: [
                            {
                              name: "IntroScreen",
                            },
                          ],
                        })
                      );
                  },
                },
              ]);
         }}
         >
                <Text style={[textStyles.normal,{color:"#fff"}]}>Log out</Text>
         </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileWrapper: {
    flexDirection: "row",
    height: height * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    height: height * 0.1,
  },
  logout: {
    flexDirection: "row",
    marginTop: 40,
  },
  button: {
    height: height * 0.05,
    width: width * 0.4,
    backgroundColor: themeColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop:30
  },
});
export default MyProfile;
