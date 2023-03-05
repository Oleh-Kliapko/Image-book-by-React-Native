import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { authStyles } from "./authSlyles";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";

const { container, imgBg, form } = authStyles;

const AuthScreen = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window.width);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={container}>
          <ImageBackground
            style={imgBg}
            source={require("./images/bgImage.jpg")}
          >
            <RegistrationScreen
              style={{
                ...form,
                width: dimensions,
              }}
            />
            <LoginScreen
              style={{
                ...form,
                width: dimensions,
              }}
            />
          </ImageBackground>
          <StatusBar style="auto" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AuthScreen;
