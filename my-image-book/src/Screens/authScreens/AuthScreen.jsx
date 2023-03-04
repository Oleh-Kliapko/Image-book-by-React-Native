import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { authStyles } from "./authSlyles";
import RegistrationScreen from "./RegistrationScreen";

const AuthScreen = () => {
  const { container, imgBg } = authStyles;
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
            <RegistrationScreen />
          </ImageBackground>
          <StatusBar style="auto" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AuthScreen;
