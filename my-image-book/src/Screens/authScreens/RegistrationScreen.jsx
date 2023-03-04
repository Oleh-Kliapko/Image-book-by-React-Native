import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { authStyles } from "./authSlyles";

const RegistrationScreen = () => {
  const {
    form,
    title,
    addPhoto,
    addPhotoBtn,
    addPhotoText,
    formInput,
    input,
    loginBtn,
    loginBtnTitle,
    showPasswordBtn,
    showPasswordText,
    passwordInput,
    isAccount,
    isAccountText,
  } = authStyles;

  return (
    <View style={form}>
      <View style={addPhoto}>
        <TouchableOpacity>
          <View style={addPhotoBtn}>
            <Text style={addPhotoText}>+</Text>
          </View>
          {/* <ImageBackground
            style={addPhotoBtn}
            source={require("./images/addPhotoBtn.svg")}
          ></ImageBackground> */}
        </TouchableOpacity>
      </View>
      <Text style={title}>Registration</Text>
      <View style={formInput}>
        <TextInput
          style={input}
          autoFocus={true}
          autoComplete="username"
          keyboardType="default"
          placeholder="Login"
          placeholderTextColor="#BDBDBD"
        />
        <TextInput
          style={input}
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          placeholder="Email"
          placeholderTextColor="#BDBDBD"
        />
        <View style={passwordInput}>
          <TextInput
            style={input}
            secureTextEntry={true}
            keyboardType="default"
            placeholder="Password"
            placeholderTextColor="#BDBDBD"
          />
          <TouchableOpacity style={showPasswordBtn} activeOpacity={0.5}>
            <Text style={showPasswordText}>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={loginBtn} activeOpacity={0.7}>
        <Text style={loginBtnTitle}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={isAccount} activeOpacity={0.7}>
        <Text style={isAccountText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
