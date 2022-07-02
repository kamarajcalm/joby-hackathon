import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
