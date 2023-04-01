import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import RegistrationScreen from "../../Screens/authScreens/RegistrationScreen";
import LoginScreen from "../../Screens/authScreens/LoginScreen";
import Home from "../../Screens/mainScreens/Home";
import CameraScreen from "../../Screens/secondaryScreens/CameraScreen/CameraScreen";
import MapScreen from "../../Screens/secondaryScreens/MapScreen";
import CommentsScreen from "../../Screens/secondaryScreens/CommentsScreen";
import { selectUser } from "../../redux/auth/authSelectors";
import { authChangeUser } from "../../redux/auth/authOperations";

const AuthStack = createStackNavigator();

const Main = () => {
  const { isCurrentUser } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authChangeUser());
  }, []);

  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        {!isCurrentUser && (
          <>
            <AuthStack.Screen name="login" component={LoginScreen} />
            <AuthStack.Screen
              name="registration"
              component={RegistrationScreen}
            />
          </>
        )}
        {isCurrentUser && <AuthStack.Screen name="home" component={Home} />}
        <AuthStack.Screen name="camera" component={CameraScreen} />
        <AuthStack.Screen name="map" component={MapScreen} />
        <AuthStack.Screen name="comments" component={CommentsScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
