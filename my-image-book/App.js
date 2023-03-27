import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";
import RegistrationScreen from "./src/Screens/authScreens/RegistrationScreen";
import LoginScreen from "./src/Screens/authScreens/LoginScreen";
import Home from "./src/Screens/mainScreens/Home";
import CameraScreen from "./src/Screens/secondaryScreens/CameraScreen/CameraScreen";
import MapScreen from "./src/Screens/secondaryScreens/MapScreen";
import CommentsScreen from "./src/Screens/secondaryScreens/CommentsScreen";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}
        >
          <AuthStack.Screen
            name="registration"
            component={RegistrationScreen}
          />
          <AuthStack.Screen name="login" component={LoginScreen} />
          <AuthStack.Screen name="home" component={Home} />
          <AuthStack.Screen name="camera" component={CameraScreen} />
          <AuthStack.Screen name="map" component={MapScreen} />
          <AuthStack.Screen name="comments" component={CommentsScreen} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
