import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from "../../constants/Color";

const scores = () => {
  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <Text style={styles.playerName}>Player One</Text>
      </View>
      <View style={styles.player}>
        <Text style={styles.playerName}>Player Two</Text>
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
  },
});
