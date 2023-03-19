import { useState, useEffect } from "react";
import { ImageBackground, View, Text, FlatList } from "react-native";

import Avatar from "../../components/Avatar/Avatar";
import PostItem from "../../components/PostItem/PostItem";
import { globalStyles } from "../../utils/globalStyles";
import { photos as initialPhotos } from "../../utils/imgTraining"; //Local photos for training - delete after end of project

const { imgBg, mainWrapper, title } = globalStyles;

const ProfileScreen = ({ route }) => {
  const [photos, setPhotos] = useState(initialPhotos);
  const [photoUri, setPhotoUri] = useState(null); // get from Redux or null
  const [userName, setUserName] = useState(null); // get from Redux or null

  useEffect(() => {
    setPhotoUri(route.params.photoUri);
    setUserName(route.params.userName);
  }, [route.params]);

  return (
    <ImageBackground style={imgBg} source={require("../../images/bgImage.jpg")}>
      <View
        style={{
          ...mainWrapper,
          flex: 0.8,
          paddingBottom: 16,
          alignItems: "center",
        }}
      >
        <Avatar photoUri={photoUri} fromScreen="profile" />
        <Text style={title}>{userName}</Text>
        <FlatList
          style={{ gap: 16 }}
          data={photos}
          keyExtractor={(photo) => photo.id}
          renderItem={(photo) => (
            <View style={{ marginBottom: 32, gap: 8 }}>
              <PostItem photo={photo} />
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
