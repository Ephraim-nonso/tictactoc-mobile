import React, { useContext } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/button";
import GameName from "../../components/GameName";
import Screen from "../../components/screen";
import { AntDesign, Feather } from "@expo/vector-icons";
import Color from "../../constants/Color";
import Others from "../../components/OtherFeatures/Others";
import { UserContext } from "../../components/context/context";

const Home = ({ navigation }) => {
  const { isComputer, setComputer } = useContext(UserContext);

  return (
    <Screen>
      <View style={styles.container}>
        <GameName />
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            onPress={() => {
              setComputer(false);
              navigation.navigate("GameScreen");
              console.log(isComputer);
            }}
          >
            <Text style={styles.btnTitle}>One Player </Text>
            <AntDesign name="user" size={24} color={Color.secondaryColor} />
          </Button>
          <Button
            style={styles.btn}
            onPress={() => {
              navigation.navigate("GameScreen");
              setComputer(true);
              console.log(isComputer);
            }}
          >
            <Text style={styles.btnTitle}>Two Player </Text>
            <Feather name="users" size={24} color={Color.secondaryColor} />
          </Button>
        </View>
      </View>

      <Others />
    </Screen>
  );
};

export default Home;
