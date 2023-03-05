import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { authStyles } from "./authSlyles";
import { AvatarIcon, EyeOffIcon, EyeOnIcon } from "../../components/svg";

const {
  form,
  title,
  addAvatar,
  addAvatarBtn,
  formInput,
  input,
  loginBtn,
  loginBtnTitle,
  showPasswordBtn,
  passwordInput,
  isAccount,
  isAccountText,
} = authStyles;

const initialUserData = {
  userName: "",
  email: "",
  password: "",
};

const initialFocus = {
  userName: false,
  email: false,
  password: false,
};

const RegistrationScreen = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [isFocus, setIsFocus] = useState(initialFocus);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions(window.width);
    });
    return () => subscription?.remove();
  }, []);

  const handleFocus = (inputName) => {
    setIsKeyboard(true);
    setIsFocus((prevState) => ({ ...prevState, [inputName]: true }));
  };

  const handleEndFocus = (inputName) => {
    setIsKeyboard(false);
    setIsFocus((prevState) => ({ ...prevState, [inputName]: false }));
  };

  const onSubmitForm = () => {
    setIsKeyboard(false);
    console.log(userData);
    setUserData(initialUserData);
  };

  return (
    <View
      style={{
        ...form,
        paddingBottom: isKeyboard ? 32 : 78,
        width: dimensions,
      }}
    >
      <View style={addAvatar}>
        <TouchableOpacity>
          <AvatarIcon style={addAvatarBtn} />
        </TouchableOpacity>
      </View>
      <Text style={title}>Registration</Text>
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
            setUserData((prevState) => ({ ...prevState, userName: value }))
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
            setUserData((prevState) => ({ ...prevState, email: value }))
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
              setUserData((prevState) => ({ ...prevState, password: value }))
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
          <TouchableOpacity
            style={loginBtn}
            activeOpacity={0.7}
            onPress={onSubmitForm}
          >
            <Text style={loginBtnTitle}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={isAccount} activeOpacity={0.7}>
            <Text style={isAccountText}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default RegistrationScreen;
