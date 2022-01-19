import { StyleSheet } from "react-native";
import Color from "../../constants/Color";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  btnContainer: {
    marginTop: 200,
  },
  btn: {
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "transparent",
    borderColor: Color.secondaryColor,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },

  btnTitle: {
    color: Color.secondaryColor,
  },
});
