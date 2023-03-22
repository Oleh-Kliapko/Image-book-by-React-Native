import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import { SendIcon } from "../../components/svg";
import KeyboardWrapper from "../../components/KeyboardWrapper/KeyboardWrapper";
import Header from "../../components/Header/Header";

const CommentsScreen = ({ route }) => {
  const [pictureUri, setPictureUri] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setPictureUri(route.params?.picture);
  }, [route.params]);

  return (
    <KeyboardWrapper>
      <Header title="Comments" />
      <View style={{ paddingHorizontal: 16, paddingVertical: 32 }}>
        <Image
          style={{ width: "100%", height: 240, marginBottom: 32 }}
          source={{ uri: pictureUri }}
        />
        <ScrollView></ScrollView>
      </View>
    </KeyboardWrapper>
  );
};

export default CommentsScreen;
