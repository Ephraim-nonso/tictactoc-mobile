import React, { useState } from "react";
import { Pressable, TouchableOpacity, Text } from "react-native";
import Button from "../../components/button";
import GameName from "../../components/GameName";
import Screen from "../../components/screen";

const Intro = ({ navigation }) => {
  const [show, setShow] = useState(false);

  (function show() {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  })();

  return (
    <Screen>
      <GameName />
      {show ? (
        <Button onPress={() => navigation.navigate("Home")}>Start Game</Button>
      ) : null}
    </Screen>
  );
};

export default Intro;
