import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Screen from "../../components/screen";
import GameName from "../../components/GameName";
import Tiles from "../../components/Tiles";
import Scores from "../../components/score/Scores";

const GameScreen = () => {
  return (
    <Screen>
      <GameName style={styles.gameName} />
      <Tiles />
      <Scores />
    </Screen>
  );
};

export default GameScreen;
