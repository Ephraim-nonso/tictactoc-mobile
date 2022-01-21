import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Color from "./constants/Color";
import AppLoading from "expo-app-loading";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";
import Intro from "./screens/IntroPage";
import Home from "./screens/Home";
import GameScreen from "./screens/GameScreen";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "./components/context/context";
import { useState } from "react";

export default function App() {
  const [isComputer, setComputer] = useState(false);
  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
    Inter_400Regular,
  });

  const Stack = createNativeStackNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <UserContext.Provider value={{ isComputer, setComputer }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Intro"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Intro" component={Intro} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="GameScreen" component={GameScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="light" />
        </UserContext.Provider>
      </>
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
