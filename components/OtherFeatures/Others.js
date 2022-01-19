import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import Color from "../../constants/Color";

const Others = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.features}>
        <Ionicons name="settings" size={24} color={Color.secondaryColor} />
        <Text style={styles.iconTitle}>Settings</Text>
      </TouchableOpacity>
      <Pressable style={styles.features}>
        <FontAwesome5 name="user-tag" size={24} color={Color.secondaryColor} />
        <Text style={styles.iconTitle}>Invite a Friend</Text>
      </Pressable>
      <Pressable style={styles.features}>
        <Entypo name="game-controller" size={24} color={Color.secondaryColor} />
        <Text style={styles.iconTitle}>Get More Games</Text>
      </Pressable>
    </View>
  );
};

export default Others;
