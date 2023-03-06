import { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { authStyles } from "../../Screens/authScreens/authSlyles";

const { container, imgBg } = authStyles;

const KeyboardWrapper = ({ children }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window.width);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ ...container, width: dimensions }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ImageBackground
            style={imgBg}
            source={require("../images/bgImage.jpg")}
          >
            {children}
          </ImageBackground>
        </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardWrapper;
