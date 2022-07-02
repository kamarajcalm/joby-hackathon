import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favourites from "../../screens/Favourites";
import Chats from "../../screens/Chats";
const Stack = createNativeStackNavigator();
const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={Chats}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
