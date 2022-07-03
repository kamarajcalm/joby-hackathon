import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Posts from "../../screens/Posts";
const Stack = createNativeStackNavigator();
const PostStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};
export default PostStack;
