import React, { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { screenStyles } from "./screenStyles";
import { ArrowLeftIcon, CameraIcon, MapPinIcon } from "../../components/svg";
import KeyboardWrapper from "../../components/KeyboardWrapper/KeyboardWrapper";
import MainButton from "../../components/Buttons/MainButton";

const {
  header,
  headerTitle,
  goBackBtn,
  cameraBox,
  camera,
  createPhotoText,
  inputStyle,
} = screenStyles;

const initialValue = { title: "", location: "" };

const CreatePostsScreen = () => {
  const [value, setValue] = useState(initialValue);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const navigation = useNavigation();

  const { title, location } = value;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangeInput = (name, value) => {
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (title && location) {
      setIsActiveBtn(true);
    } else setIsActiveBtn(false);
  }, [title, location]);

  return (
    <KeyboardWrapper>
      <View style={header}>
        <TouchableOpacity
          style={goBackBtn}
          activeOpacity={0.7}
          onPress={handleGoBack}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text style={headerTitle}>Create publication</Text>
      </View>
      <View style={{ paddingHorizontal: 16, paddingVertical: 32 }}>
        <View>
          <TouchableOpacity style={cameraBox} activeOpacity={0.7}>
            <View style={camera}>
              <CameraIcon />
            </View>
          </TouchableOpacity>
          <Text style={createPhotoText}> Download photo</Text>
        </View>
        <View style={{ paddingTop: 32, gap: 16 }}>
          <TextInput
            style={{ ...createPhotoText, ...inputStyle }}
            keyboardType="default"
            placeholder="Name..."
            placeholderTextColor="#BDBDBD"
            value={value.title}
            onChangeText={(value) => handleChangeInput("title", value)}
          />
          <TouchableOpacity
            style={{
              ...inputStyle,
              flexDirection: "row",
              alignItems: "center",
            }}
            activeOpacity={0.7}
          >
            <MapPinIcon />
            <TextInput
              style={{ ...createPhotoText, paddingLeft: 4 }}
              keyboardType="default"
              placeholder="Locality...                                                                                 "
              placeholderTextColor="#BDBDBD"
              value={value.location}
              onChangeText={(value) => handleChangeInput("location", value)}
            />
          </TouchableOpacity>
        </View>
        <MainButton
          title="Publish"
          // onSubmitForm={{}}
          isActive={isActiveBtn}
        />
      </View>
    </KeyboardWrapper>
  );
};

export default CreatePostsScreen;
