import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

export const commentStyles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    borderRadius: 28,
    position: "absolute",
  },
  commentWrapper: {
    padding: 8,
    gap: 8,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  commentText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  commentDate: {
    fontFamily: fonts.robotoRegular,
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
  },
});
