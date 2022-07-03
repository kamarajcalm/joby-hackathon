import React from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from './stacks/HomeStack';
import { themeColor } from '../config';
import { textStyles } from '../styles';
import {View,Text} from 'native-base';
import { AntDesign, Ionicons, MaterialIcons,Foundation } from "@expo/vector-icons";
import FavoritesStack from './stacks/FavoritesStack';
import ChatStack from './stacks/ChatStack';
import PostStack from './stacks/PostStack';
const Tab = createBottomTabNavigator();
const TabNavigator = ()=>{
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarItemStyle: { flexDirection: "column" },
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Foundation
                name="home"
                size={20}
                color={focused ? themeColor : "grey"}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  textStyles.normal,
                  { color: focused ? themeColor : "grey", fontSize: 10 },
                ]}
              >
                Home
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Activities"
        component={FavoritesStack}
        options={{
          tabBarItemStyle: { flexDirection: "column" },
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <AntDesign
                name="heart"
                size={20}
                color={focused ? themeColor : "grey"}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  textStyles.normal,
                  { color: focused ? themeColor : "grey", fontSize: 10 },
                ]}
              >
                Favourites
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="ChatsStack"
        component={ChatStack}
        options={{
          tabBarItemStyle: { flexDirection: "column",alignItems:"center",justifyContent:"center" },
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                name="chatbox"
                size={20}
                color={focused ? themeColor : "grey"}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <View>
                <Text
                  style={[
                    textStyles.normal,
                    { color: focused ? themeColor : "grey", fontSize: 10 },
                  ]}
                >
                  Chats
                </Text>
              </View>
            );
          },
          tabBarBadge: "2",
        }}
      />
      <Tab.Screen
        name="PostsStack"
        component={PostStack}
        options={{
          tabBarItemStyle: { flexDirection: "column" },
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <MaterialIcons
                name="post-add"
                size={20}
                color={focused ? themeColor : "grey"}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={[
                  textStyles.normal,
                  { color: focused ? themeColor : "grey", fontSize: 10 },
                ]}
              >
                Posts
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;