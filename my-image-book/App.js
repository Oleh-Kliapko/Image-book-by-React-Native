import React, { useEffect, useState } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import AuthScreen from "./src/Screens/authScreens/AuthScreen";
import loadApp from "./src/services/loadApp";
import { authStyles } from "./src/Screens/authScreens/authSlyles";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const { container } = authStyles;

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadApp();
      } catch (evt) {
        console.warn(evt);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isReady) {
    return <View style={container} />;
  }

  return <AuthScreen />;
}

// import AppLoading from "expo-app-loading";
// import React, { useState } from "react";
// import loadApp from "./src/services/loadApp";
// import AuthScreen from "./src/Screens/authScreens/AuthScreen";

// export default function App() {
//   const [isReady, setIsReady] = useState(false);

//   if (!isReady) {
//     return (
//       <AppLoading
//         startAsync={loadApp}
//         onFinish={() => setIsReady(true)}
//         onError={console.warn}
//       />
//     );
//   }

//   return <AuthScreen />;
// }
