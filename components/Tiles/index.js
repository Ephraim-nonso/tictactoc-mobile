import React, { useState, useContext } from "react";
import { Pressable, View, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../../constants/Color";
import { CIRCLE, CROSS } from "../../constants/Conditions";
import { UserContext } from "../context/context";

let board = ["", "", "", "", "", "", "", "", ""];

const Tiles = () => {
  const [isCross, setCross] = useState(true);
  // const [isComputer, setComputer] = useState(false);
  const { isComputer, setComputer } = useContext(UserContext);

  const drawItem = (number) => {
    if (board[number] == "" && winGame() == "") {
      if (isCross) {
        board[number] = CROSS;
      } else {
        board[number] = CIRCLE;
      }

      setCross(!isCross);
      if (winGame() != "") {
        Alert.alert(winGame() + " won the game.");
      }
    }
  };

  let resetGame = () => {
    setCross(!isCross);
    // setComputer(!isComputer);
    // console.log(isComputer);
    board = ["", "", "", "", "", "", "", "", ""];
  };

  const chooseItemColor = (number) => {
    if (board[number] == "cross") {
      return Color.mainColor;
    } else if (board[number] == "circle") {
      return Color.textColor;
    } else {
      return "#74B9FF";
    }
  };

  const winGame = () => {
    if (board[0] != "" && board[0] == board[1] && board[1] == board[2]) {
      return board[0];
    } else if (board[3] != "" && board[3] == board[4] && board[4] == board[5]) {
      return board[3];
    } else if (board[6] != "" && board[6] == board[7] && board[7] == board[8]) {
      return board[6];
    } else if (board[0] != "" && board[0] == board[3] && board[3] == board[6]) {
      return board[0];
    } else if (board[1] != "" && board[1] == board[4] && board[4] == board[7]) {
      return board[1];
    } else if (board[2] != "" && board[2] == board[5] && board[5] == board[8]) {
      return board[2];
    } else if (board[0] != "" && board[0] == board[4] && board[4] == board[8]) {
      return board[0];
    } else if (board[2] != "" && board[2] == board[4] && board[4] == board[6]) {
      return board[2];
    } else {
      return "";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tileContainer}>
        {/* <Text>{word}</Text> */}
        <TouchableOpacity onPress={() => drawItem(0)}>
          <View style={[styles.tileOne, styles.tiles]}>
            <Entypo name={board[0]} size={50} color={chooseItemColor(0)} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => drawItem(1)}>
          <View style={[styles.tileTwo, styles.tiles]}>
            <Entypo name={board[1]} size={50} color={chooseItemColor(1)} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => drawItem(2)}>
          <View style={[styles.tileThree, styles.tiles]}>
            <Entypo name={board[2]} size={50} color={chooseItemColor(2)} />
          </View>
        </TouchableOpacity>
      </View>

      {/* The Middle Value */}
      <View style={styles.tileContainer}>
        <TouchableOpacity onPress={() => drawItem(3)}>
          <View style={[styles.tileMiddleOne, styles.tiles]}>
            <Entypo name={board[3]} size={50} color={chooseItemColor(3)} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => drawItem(4)}>
          <View style={[styles.tileMiddleTwo, styles.tiles]}>
            <Entypo name={board[4]} size={50} color={chooseItemColor(4)} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => drawItem(5)}>
          <View style={[styles.tileMiddleThree, styles.tiles]}>
            <Entypo name={board[5]} size={50} color={chooseItemColor(5)} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.tileContainer}>
        <TouchableOpacity onPress={() => drawItem(6)}>
          <View style={[styles.tileBottomOne, styles.tiles]}>
            <Entypo name={board[6]} size={50} color={chooseItemColor(6)} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => drawItem(7)}>
          <View style={[styles.tileBottomTwo, styles.tiles]}>
            <Entypo name={board[7]} size={50} color={chooseItemColor(7)} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => drawItem(8)}>
          <View style={[styles.tileBottomThree, styles.tiles]}>
            <Entypo name={board[8]} size={50} color={chooseItemColor(8)} />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => resetGame()} style={styles.reset}>
        <MaterialCommunityIcons
          name="restart"
          size={34}
          color={Color.textColor}
        />
        <Text style={styles.btnText}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tiles;
