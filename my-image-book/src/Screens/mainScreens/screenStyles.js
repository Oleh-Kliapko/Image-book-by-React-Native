import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

export const screenStyles = StyleSheet.create({
  header: {
    height: 60,
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
  mainScreenWrapper: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 32,
  },
  tabMenu: {
    height: 83,
    paddingTop: 9,
    boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  avatarName: {
    fontFamily: fonts.robotoBold,
    fontSize: 15,
    lineHeight: 17,
    color: "#212121",
    marginBottom: 4,
  },
  avatarEmail: {
    fontFamily: fonts.robotoRegular,
    fontSize: 13,
    lineHeight: 15,
    color: "rgba(33, 33, 33, 0.8)",
  },
  imgWrapper: {
    gap: 32,
    paddingBottom: 32,
    marginLeft: 16,
  },
  imgTitle: {
    fontFamily: fonts.robotoMedium,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  cameraBox: {
    height: 240,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  camera: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  createPhotoText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  inputStyle: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
});
