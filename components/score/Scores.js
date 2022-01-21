import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from "../../constants/Color";
import { UserContext } from "../context/context";

const scores = () => {
  const { isComputer, setComputer } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <Text style={styles.playerName}>
          {isComputer == false ? "Player One" : "Player One"}
        </Text>
        <Text style={styles.playerName}>0</Text>
      </View>
      <View style={styles.player}>
        <Text style={styles.playerName}>
          {isComputer ? "Player Two" : "Computer"}
        </Text>
        <Text style={styles.playerName}>0</Text>
      </View>
    </View>
  );
};

export default scores;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    paddingHorizontal: 10,
    marginTop: 50,
  },

  playerName: {
    color: Color.secondaryColor,
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    marginBottom: 10,
  },
  player: {
    justifyContent: "center",
    alignItems: "center",
  },
});
