import { StyleSheet } from "react-native";
import { fonts } from "../../utils/fonts";

export const authStyles = StyleSheet.create({
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  form: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: fonts.robotoMedium,
    fontSize: 30,
    paddingVertical: 32,
    letterSpacing: 0.2,
    lineHeight: 35,
    alignSelf: "center",
  },
  formInput: {
    gap: 16,
  },
  input: {
    fontFamily: fonts.robotoRegular,
    fontSize: 16,
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    color: "#000",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    paddingLeft: 16,
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  showPasswordBtn: {
    marginLeft: -60,
  },
  isAccount: {
    marginTop: 16,
  },
  isAccountText: {
    fontFamily: fonts.robotoRegular,
    fontSize: 16,
    color: "#1B4371",
    alignSelf: "center",
  },
});
