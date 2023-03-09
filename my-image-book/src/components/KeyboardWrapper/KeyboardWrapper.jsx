import { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { authStyles } from "../../Screens/authScreens/authSlyles";
import { useFonts } from "expo-font";
import { fonts } from "../../utils/fonts";

const { container, imgBg } = authStyles;

const KeyboardWrapper = ({ children }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);
  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window.width);
    });
    return () => subscription?.remove();
  }, []);

  const [fontsLoader] = useFonts({
    [fonts.robotoRegular]: require("../../../assets/fonts/Roboto-Regular.ttf"),
    [fonts.robotoMedium]: require("../../../assets/fonts/Roboto-Medium.ttf"),
    [fonts.robotoBold]: require("../../../assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoader) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoader]);

  if (!fontsLoader) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={{ ...container, width: dimensions }}
        onLayout={onLayoutRootView}
      >
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardWrapper;