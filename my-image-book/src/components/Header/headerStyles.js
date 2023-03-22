import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

export const headerStyles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logoutBtn: {
    position: "absolute",
    right: 16,
  },
  goBackBtn: {
    position: "absolute",
    left: 16,
  },
  headerTitle: {
    fontFamily: fonts.robotoMedium,
    fontSize: 17,
    letterSpacing: -0.408,
    lineHeight: 22,
  },
});
