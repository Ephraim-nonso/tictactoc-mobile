import React from "react";
import { TouchableOpacity } from "react-native";
import Button from "../../components/button";
import GameName from "../../components/GameName";
import Screen from "../../components/screen";

const Intro = () => {
  return (
    <Screen>
      <GameName />
      <TouchableOpacity>
        <Button>Start Game</Button>
      </TouchableOpacity>
    </Screen>
  );
};

export default Intro;
