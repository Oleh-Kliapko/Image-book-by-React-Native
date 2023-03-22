import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";

import { SendIcon } from "../../components/svg";
import KeyboardWrapper from "../../components/KeyboardWrapper/KeyboardWrapper";
import Header from "../../components/Header/Header";
import CommentCard from "../../components/CommentCard/CommentCard";

const initialComments = [
  {
    id: 1,
    textComment:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    dateComment: Date.now(),
  },
  {
    id: 2,
    textComment:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    dateComment: Date.now() + 100000,
  },
  {
    id: 3,
    textComment: "Thank you! That was very helpful!",
    dateComment: Date.now() + 300000,
  },
  {
    id: 4,
    textComment:
      "50mm like f1.8 would help with the bokeh. I’ve been using primes as the",
    dateComment: Date.now() + 300000,
  },
  {
    id: 5,
    textComment:
      "T50mm like f1.8 would help with the bokeh. I’ve been using primes as the",
    dateComment: Date.now() + 300000,
  },
  {
    id: 6,
    textComment:
      "ove your most recent photo. I’ve been trying to capture the same thing for a few months ",
    dateComment: Date.now() + 300000,
  },
];

const CommentsScreen = ({ route }) => {
  const [pictureUri, setPictureUri] = useState(null);
  const [comments, setComments] = useState(initialComments);

  useEffect(() => {
    setPictureUri(route.params?.picture);
  }, [route.params]);

  return (
    <SafeAreaView>
      <Header title="Comments" />
      <View style={{ paddingHorizontal: 16, marginTop: 32 }}>
        <Image
          style={{ width: "100%", height: 240, borderRadius: 8 }}
          source={{ uri: pictureUri }}
        />
        <FlatList
          style={{ marginTop: 8, height: "50%" }}
          data={comments}
          keyExtractor={(comment) => comment.id}
          renderItem={(comment) => <CommentCard comment={comment} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default CommentsScreen;
