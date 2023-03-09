import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import RegistrationScreen from "./src/Screens/authScreens/RegistrationScreen";
import LoginScreen from "./src/Screens/authScreens/LoginScreen";
import loadApp from "./src/services/loadApp";
import { authStyles } from "./src/Screens/authScreens/authSlyles";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const AuthStack = createStackNavigator();

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApp}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  // if (!isReady) {
  //   return <View style={authStyles.container} />;
  // }

  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name="registration" component={RegistrationScreen} />
        <AuthStack.Screen name="login" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
