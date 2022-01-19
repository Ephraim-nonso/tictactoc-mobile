import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const Tiles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tileContainer}>
        <View style={[styles.tileOne, styles.tiles]}></View>
        <View style={[styles.tileTwo, styles.tiles]}></View>
        <View style={[styles.tileThree, styles.tiles]}></View>
      </View>
      <View style={styles.tileContainer}>
        <View style={[styles.tileMiddleOne, styles.tiles]}></View>
        <View style={[styles.tileMiddleTwo, styles.tiles]}></View>
        <View style={[styles.tileMiddleThree, styles.tiles]}></View>
      </View>
      <View style={styles.tileContainer}>
        <View style={[styles.tileBottomOne, styles.tiles]}></View>
        <View style={[styles.tileBottomTwo, styles.tiles]}></View>
        <View style={[styles.tileBottomThree, styles.tiles]}></View>
      </View>
      {/* <View style={styles.tiles}></View> */}
    </View>
  );
};

export default Tiles;
