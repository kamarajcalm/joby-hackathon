import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favourites from "../../screens/Favourites";
const Stack = createNativeStackNavigator();
const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourite"
        component={Favourites}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
