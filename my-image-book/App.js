import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./src/Screens/authScreens/RegistrationScreen";
import LoginScreen from "./src/Screens/authScreens/LoginScreen";

export default function App() {
  const AuthStack = createStackNavigator();

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
