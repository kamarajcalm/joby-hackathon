import React from 'react';
import { createNativeStackNavigator,} from "@react-navigation/native-stack";
import DefaultScreen from '../screens/DefaultScreen';
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
import { SafeAreaView } from "react-native";
const Navigation  = ()=>{
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DefaultScreen"
            component={DefaultScreen}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Navigation;