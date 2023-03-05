import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { authStyles } from "./authSlyles";
import { AvatarIcon, EyeOffIcon, EyeOnIcon } from "../../components/svg";

const {
  form,
  title,
  addPhoto,
  addPhotoBtn,
  formInput,
  input,
  loginBtn,
  loginBtnTitle,
  showPasswordBtn,
  passwordInput,
  isAccount,
  isAccountText,
} = authStyles;

const RegistrationScreen = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isKeyboard, setIsKeyboard] = useState(false);

  return (
    <View style={{ ...form, paddingBottom: isKeyboard ? 32 : 78 }}>
      <View style={addPhoto}>
        <TouchableOpacity>
          <AvatarIcon style={addPhotoBtn} />
        </TouchableOpacity>
      </View>
      <Text style={title}>Registration</Text>
      <View style={formInput}>
        <TextInput
          style={input}
          keyboardType="default"
          placeholder="Login"
          placeholderTextColor="#BDBDBD"
          onFocus={() => setIsKeyboard(true)}
          onEndEditing={() => setIsKeyboard(false)}
        />
        <TextInput
          style={input}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#BDBDBD"
          onFocus={() => setIsKeyboard(true)}
          onEndEditing={() => setIsKeyboard(false)}
        />
        <View style={passwordInput}>
          <TextInput
            style={input}
            secureTextEntry={!isShowPassword}
            keyboardType="default"
            placeholder="Password"
            placeholderTextColor="#BDBDBD"
            onFocus={() => setIsKeyboard(true)}
            onEndEditing={() => setIsKeyboard(false)}
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
          <TouchableOpacity style={loginBtn} activeOpacity={0.7}>
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
