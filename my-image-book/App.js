import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./src/Screens/authScreens/RegistrationScreen";
import LoginScreen from "./src/Screens/authScreens/LoginScreen";
import Home from "./src/Screens/mainScreens/Home";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name="registration" component={RegistrationScreen} />
        <AuthStack.Screen name="login" component={LoginScreen} />
        <AuthStack.Screen name="home" component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
