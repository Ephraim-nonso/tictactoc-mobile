import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Color from "./../../constants/Color";

const Button = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.btn, ...style }} onPress={onPress}>
      <Text style={{ ...styles.btnFont }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 20,
    backgroundColor: Color.textColor,
    borderRadius: 5,
  },

  btnFont: {
    color: Color.mainColor,
    fontSize: 16,
    fontWeight: "700",
  },
});
