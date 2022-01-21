import { StyleSheet } from "react-native";
import Color from "../../constants/Color";

export const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
  },
  reset: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderColor: Color.textColor,
    borderWidth: 2,
    paddingVertical: 5,
  },
  btnText: {
    color: Color.textColor,
  },
  tileContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tiles: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
    borderWidth: 4,
    // borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  tileOne: {
    borderRightColor: Color.secondaryColor,
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: Color.secondaryColor,
  },
  tileTwo: {
    borderRightColor: Color.secondaryColor,
    borderLeftColor: Color.secondaryColor,
    borderTopColor: "transparent",
    borderBottomColor: Color.secondaryColor,
  },
  tileThree: {
    borderLeftColor: Color.secondaryColor,
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: Color.secondaryColor,
  },
  tileMiddleOne: {
    borderRightColor: Color.secondaryColor,
    borderLeftColor: "transparent",
    borderTopColor: Color.secondaryColor,
    borderBottomColor: Color.secondaryColor,
  },
  tileMiddleTwo: {
    borderRightColor: Color.secondaryColor,
    borderLeftColor: Color.secondaryColor,
    borderTopColor: Color.secondaryColor,
    borderBottomColor: Color.secondaryColor,
  },
  tileMiddleThree: {
    borderRightColor: "transparent",
    borderLeftColor: Color.secondaryColor,
    borderTopColor: Color.secondaryColor,
    borderBottomColor: Color.secondaryColor,
  },
  tileBottomOne: {
    borderRightColor: Color.secondaryColor,
    borderTopColor: Color.secondaryColor,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
  },
  tileBottomTwo: {
    borderRightColor: Color.secondaryColor,
    borderTopColor: Color.secondaryColor,
    borderLeftColor: Color.secondaryColor,
    borderBottomColor: "transparent",
  },
  tileBottomThree: {
    borderRightColor: "transparent",
    borderTopColor: Color.secondaryColor,
    borderLeftColor: Color.secondaryColor,
    borderBottomColor: "transparent",
  },
});
