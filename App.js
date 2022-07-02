import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider} from "native-base";
import Navigation from './src/navigation';
import { useFonts } from "expo-font";
export default function App() {
    const [loaded] = useFonts({
      PopinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
      PopinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    });

    if (!loaded) {
      return null;
    }
  return (
    <NativeBaseProvider>
       <Navigation />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
