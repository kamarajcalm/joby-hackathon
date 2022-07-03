import React, { useState } from "react";
import {StyleSheet,Dimensions,Platform} from 'react-native'
import {
  View,
  Text,
  Pressable,
  Stack,
  Input,
  Icon,
  Box,
  Select,
  CheckIcon,
  Center
} from "native-base";
import { themeColor } from "../config";
import { textStyles } from "../styles";
import  Constants  from "expo-constants";
const {height,width} = Dimensions.get("window")
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialIcons, EvilIcons } from "@expo/vector-icons";
 const routes = [
   { key: "Job Feed", title: "Job Feed" },
   { key: "Recent Search", title: "Recent Search" },
 ];
 import { TabView,  TabBar } from "react-native-tab-view";
import Feeds from "../components/Feeds";
const Home  =()=>{
    let [filter, setFilter] = React.useState(null);
    let [city, setCity] = React.useState(null);
    const [index,setIndex] = useState(0)
    const renderScene = ({ route }) => {
          switch (route.key) {
            case "Job Feed":
              return <Feeds />;
            case "Recent Search":
              return <Feeds />;
            default:
              return null;
          }
        };
  return (
    <View
      flex={1}
     
    >
      <StatusBar style="light" backgroundColor={themeColor} />
      <View style={styles.header}>
        <View>
          <Text style={[textStyles.bold, { color: "#fff", fontSize: 20 }]}>
            Joby
          </Text>
        </View>
        <View flexDirection={"row"}>
          <Pressable mr={"5"}>
            <Ionicons name="notifications" size={24} color="#fff" />
          </Pressable>
          <Pressable>
            <Ionicons name="person" size={24} color="#fff" />
          </Pressable>
        </View>
      </View>
      {/* INPUTS */}
      <Stack space={4} w="100%" alignItems="center" mt={"4"}>
        <Input
          selectionColor={themeColor}
          style={[textStyles.normal]}
          w={{
            base: "90%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="search" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Job Title , Company"
        />
        <Input
          selectionColor={themeColor}
          style={[textStyles.normal]}
          w={{
            base: "90%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<EvilIcons name="location" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="State or City"
        />
      </Stack>
      <View
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        marginY={"2"}
      >
        <Select
          style={[textStyles.normal]}
          color={"#fff"}
          selectedValue={filter}
          minWidth="160"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: themeColor,
            endIcon: <CheckIcon size="5" color={"#fff"} />,

            fontFamily: "mono",
          }}
          backgroundColor={themeColor}
          mt={1}
          onValueChange={(itemValue) => setFilter(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
        <Select
          backgroundColor={themeColor}
          style={[textStyles.normal]}
          color={"#fff"}
          selectedValue={city}
          minWidth="160"
          accessibilityLabel="Choose city"
          placeholder="Choose city"
          _selectedItem={{
            bg: themeColor,
            endIcon: <CheckIcon size="5" color={"#fff"} />,
          }}
          mt={1}
          onValueChange={(itemValue) => setCity(itemValue)}
        >
          <Select.Item label="Bangalore" value="ux" />
          <Select.Item label="Chennai" value="web" />
          <Select.Item label="Hyderabad" value="cross" />
          <Select.Item label="Delhi" value="ui" />
          <Select.Item label="Mumbai" value="backend" />
        </Select>
      </View>

      <TabView
        style={{ backgroundColor: "#ffffff" }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={(index) => {
           setIndex(index)
        }}
        initialLayout={{ width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            renderLabel={({ route, focused, color }) => (
              <Text
                style={[textStyles.normal,{
                  color: focused ? themeColor : "gray",
                 
                }]}
              >
                {route.title}
              </Text>
            )}
            style={{
              backgroundColor: "#fff",
              height: 50,
              fontWeight: "bold",
              color: "red",
            }}
            labelStyle={{ fontWeight: "bold", color: "red" }}
            indicatorStyle={{ backgroundColor: themeColor, height: 2 }}
          />
        )}
      />
    </View>
  );
}

const styles= StyleSheet.create({
    header:{
        height:height*0.1,
        backgroundColor:themeColor,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20
    }
})
export default Home;