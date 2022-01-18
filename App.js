import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Color from "./constants/Color";
import AppLoading from "expo-app-loading";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";
import Intro from "./screens/IntroPage";
import Home from "./screens/Home";
// import { Righteous_400Regular } from "@expo-google-fonts/righteous";

export default function App() {
  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        {/* <Intro /> */}
        <Home />
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontFamily: "Righteous_400Regular",
    fontWeight: "bold",
    color: Color.secondaryColor,
    fontSize: 50,
  },
});
