import { StyleSheet } from "react-native";
import Color from "../../constants/Color";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 50,
  },
  features: {
    alignItems: "center",
  },
  iconTitle: {
    color: Color.secondaryColor,
    marginTop: 5,
  },
});
