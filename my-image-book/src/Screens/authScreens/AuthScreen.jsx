import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View } from "react-native";
import { authStyles } from "./authSlyles";
import RegistrationScreen from "./RegistrationScreen";

const AuthScreen = () => {
  const { container, imgBg } = authStyles;
  return (
    <View style={container}>
      <ImageBackground style={imgBg} source={require("./images/bgImage.jpg")}>
        <RegistrationScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

export default AuthScreen;
