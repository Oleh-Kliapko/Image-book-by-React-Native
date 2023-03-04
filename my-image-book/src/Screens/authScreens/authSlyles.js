import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imgBg: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    alignItems: "center",
    width: "100%",
    height: 488,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  addPhoto: {
    marginTop: -60,
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addPhotoBtn: {
    marginTop: 81,
    marginLeft: 119.5,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
  addPhotoText: {
    marginTop: -4,
    paddingTop: 0,
    fontSize: 22,
    color: "#FF6C00",
  },
  title: {
    // fontFamily: "Arial",
    fontWeight: "500",
    fontSize: 30,
    paddingVertical: 24,
    letterSpacing: 0.2,
    lineHeight: 35,
  },
  formInput: {
    gap: 12,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    color: "#000",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    paddingLeft: 16,
    fontSize: 16,
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  showPasswordBtn: {
    marginLeft: -60,
  },
  showPasswordText: {
    padding: 0,
    margin: 0,
    fontSize: 16,
    color: "#1B4371",
  },
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 50,
    backgroundColor: "#FF6C00",
    marginTop: 32,
    borderRadius: 100,
  },
  loginBtnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  isAccount: {
    marginTop: 16,
  },
  isAccountText: {
    color: "#1B4371",
    fontSize: 16,
  },
});
