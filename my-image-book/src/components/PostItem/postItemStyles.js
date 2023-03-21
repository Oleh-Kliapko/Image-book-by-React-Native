import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

export const postItemStyles = StyleSheet.create({
  imgTitle: {
    fontFamily: fonts.robotoMedium,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: fonts.robotoRegular,
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 6,
  },
  locationStyle: {
    fontFamily: fonts.robotoRegular,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
    marginLeft: 6,
  },
});
