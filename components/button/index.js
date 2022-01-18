import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "./../../constants/Color";

const Button = ({ children }) => {
  return (
    <View style={styles.btn}>
      <Text style={styles.btnFont}>{children}</Text>
    </View>
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
