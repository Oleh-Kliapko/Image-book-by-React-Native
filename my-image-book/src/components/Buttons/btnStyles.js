import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

export const btnStyles = StyleSheet.create({
  mainBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 32,
    borderRadius: 100,
  },
  mainBtnTitle: {
    fontFamily: fonts.robotoRegular,
    fontSize: 16,
    lineHeight: 19,
  },
});
