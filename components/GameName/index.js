import React from "react";
import Color from "../../constants/Color";
import { StyleSheet, View, Text } from "react-native";

const GameName = () => {
  return (
    <View>
      <Text style={styles.title}>Tic Tac Toc</Text>
    </View>
  );
};

export default GameName;

export const styles = StyleSheet.create({
  title: {
    fontFamily: "Righteous_400Regular",
    fontWeight: "bold",
    color: Color.secondaryColor,
    fontSize: 50,
  },
});
