import React from "react";
import Color from "../../constants/Color";
import { View, StyleSheet } from "react-native";

const Screen = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
