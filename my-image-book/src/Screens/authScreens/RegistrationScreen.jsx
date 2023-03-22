import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import Toast from "react-native-toast-message";

import { authStyles } from "./authSlyles";
import { globalStyles } from "../../utils/globalStyles";
import KeyboardWrapper from "../../components/KeyboardWrapper/KeyboardWrapper";
import Avatar from "../../components/Avatar/Avatar";
import { MainButton } from "../../components/Buttons";
import { EyeOffIcon, EyeOnIcon } from "../../components/svg";
import { toastConfig, errorFormToast } from "../../utils/toasts";

const {
  formInput,
  input,
  showPasswordBtn,
  passwordInput,
  isAccount,
  isAccountText,
} = authStyles;

const initialUserData = {
  userName: "",
  email: "",
  password: "",
  avatar: null,
};

const initialFocus = {
  userName: false,
  email: false,
  password: false,
};

const RegistrationScreen = ({ route }) => {
  const [userData, setUserData] = useState(initialUserData);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [isFocus, setIsFocus] = useState(initialFocus);
  const navigation = useNavigation();

  useEffect(() => {
    setUserData({ ...userData, avatar: route.params?.photoUri });
  }, [route.params]);

  const handleGoToLogin = () => {
    navigation.navigate("login");
  };

  const handleFocus = (inputName) => {
    setIsKeyboard(true);
    setIsFocus((prevState) => ({ ...prevState, [inputName]: true }));
  };

  const handleEndFocus = (inputName) => {
    setIsKeyboard(false);
    setIsFocus((prevState) => ({ ...prevState, [inputName]: false }));
  };

  const onSubmitForm = () => {
    const { userName, email, password, avatar } = userData;

    if (!userName || !email || !password || !avatar) {
      errorFormToast();
      return;
    }
    navigation.navigate("home", { userName, email, avatar }); //Local for training - delete after end of project
    setIsKeyboard(false);
    setUserData(initialUserData);
  };

  // add prop for Avatar for change icon

  return (
    <KeyboardWrapper>
      <ImageBackground
        style={globalStyles.imgBg}
        source={require("../../images/bgImage.jpg")}
      >
        <View
          style={{
            ...globalStyles.mainWrapper,
            paddingBottom: isKeyboard ? 32 : 78,
          }}
        >
          <Avatar photoUri={userData.avatar} fromScreen="registration" />
          <Text style={globalStyles.title}>Registration</Text>
          <View style={formInput}>
            <TextInput
              style={{
                ...input,
                borderColor: isFocus.userName ? "#FF6C00" : "#E8E8E8",
              }}
              keyboardType="default"
              placeholder="Login"
              placeholderTextColor="#BDBDBD"
              value={userData.userName}
              onFocus={() => handleFocus("userName")}
              onEndEditing={() => handleEndFocus("userName")}
              onChangeText={(value) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userName: value,
                }))
              }
            />
            <TextInput
              style={{
                ...input,
                borderColor: isFocus.email ? "#FF6C00" : "#E8E8E8",
              }}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor="#BDBDBD"
              value={userData.email}
              onFocus={() => handleFocus("email")}
              onEndEditing={() => handleEndFocus("email")}
              onChangeText={(value) =>
                setUserData((prevState) => ({
                  ...prevState,
                  email: value.trim(),
                }))
              }
            />
            <View style={passwordInput}>
              <TextInput
                style={{
                  ...input,
                  borderColor: isFocus.password ? "#FF6C00" : "#E8E8E8",
                }}
                secureTextEntry={!isShowPassword}
                keyboardType="default"
                placeholder="Password"
                placeholderTextColor="#BDBDBD"
                value={userData.password}
                onFocus={() => handleFocus("password")}
                onEndEditing={() => handleEndFocus("password")}
                onChangeText={(value) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    password: value.trim(),
                  }))
                }
              />
              <TouchableOpacity
                style={showPasswordBtn}
                activeOpacity={0.5}
                onPress={() => setIsShowPassword((prev) => !prev)}
              >
                {isShowPassword ? <EyeOnIcon /> : <EyeOffIcon />}
              </TouchableOpacity>
            </View>
          </View>
          {!isKeyboard && (
            <>
              <MainButton
                onSubmitForm={onSubmitForm}
                title="Register"
                isActive={true}
              />
              <TouchableOpacity
                style={isAccount}
                activeOpacity={0.7}
                onPress={handleGoToLogin}
              >
                <Text style={isAccountText}>
                  Already have an account? Log in
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ImageBackground>
      <Toast position="top" topOffset={60} config={toastConfig} />
    </KeyboardWrapper>
  );
};

export default RegistrationScreen;
