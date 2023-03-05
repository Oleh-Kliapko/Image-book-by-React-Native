import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { authStyles } from "./authSlyles";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";

const { container, imgBg } = authStyles;

const AuthStack = createStackNavigator();

const AuthScreen = () => {
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
            {/* <RegistrationScreen /> */}
            <NavigationContainer>
              <AuthStack.Navigator>
                <AuthStack.Screen
                  name="registration"
                  component={RegistrationScreen}
                />
                <AuthStack.Screen name="login" component={LoginScreen} />
              </AuthStack.Navigator>
            </NavigationContainer>
          </ImageBackground>
          <StatusBar style="auto" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AuthScreen;
