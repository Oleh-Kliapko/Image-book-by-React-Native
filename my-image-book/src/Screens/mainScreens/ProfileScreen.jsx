import { useState, useEffect } from "react";
import { ImageBackground, View, Text, FlatList } from "react-native";

import Avatar from "../../components/Avatar/Avatar";
import PostItem from "../../components/PostItem/PostItem";
import { globalStyles } from "../../utils/globalStyles";

const ProfileScreen = ({ route }) => {
  const [photos, setPhotos] = useState([]);
  const [avatarUri, setAvatarUri] = useState(null); // get from Redux or null
  const [user, setUser] = useState(null); // get from Redux or null

  const { userName, avatar, id, picture, title, descriptionLocation } =
    route.params;

  useEffect(() => {
    setAvatarUri(avatar);
    setUser(userName);
  }, [route.params]);

  // Delete after Redux
  useEffect(() => {
    if (id) {
      setPhotos((prev) => [
        ...prev,
        { id, picture, title, descriptionLocation, comments: [] },
      ]);
    }
  }, [id]);

  return (
    <ImageBackground
      style={globalStyles.imgBg}
      source={require("../../images/bgImage.jpg")}
    >
      <View
        style={{
          ...globalStyles.mainWrapper,
          flex: 0.8,
          paddingBottom: 16,
          alignItems: "center",
        }}
      >
        <Avatar photoUri={avatarUri} fromScreen="profile" />
        <Text style={globalStyles.title}>{user}</Text>
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
