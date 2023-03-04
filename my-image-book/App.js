import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import loadApp from "./src/services/loadApp";
import AuthScreen from "./src/Screens/authScreens/AuthScreen";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <AuthScreen />;
}
