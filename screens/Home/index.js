import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/button";
import GameName from "../../components/GameName";
import Screen from "../../components/screen";
import { styles } from "./styles";

const Home = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <GameName />
        <View style={styles.btnContainer}>
          <Button>Single Player</Button>
          <Button>Two Player</Button>
        </View>
      </View>
    </Screen>
  );
};

export default Home;
