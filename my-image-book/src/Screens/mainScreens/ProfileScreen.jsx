import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ImageBackground, View, Text, FlatList } from "react-native";

import { globalStyles } from "../../utils/globalStyles";
import Avatar from "../../components/Avatar/Avatar";
import PostItem from "../../components/PostItem/PostItem";
import { LogoutBtn } from "../../components/Buttons";
import { selectUser } from "../../redux/auth/authSelectors";

const ProfileScreen = ({ route }) => {
  const { userName, avatar } = useSelector(selectUser);
  const [photos, setPhotos] = useState([]);

  const { id, picture, title, descriptionLocation, latitude, longitude } =
    route.params;

  // Delete after Redux
  useEffect(() => {
    if (id) {
      setPhotos((prev) => [
        ...prev,
        {
          id,
          picture,
          title,
          descriptionLocation,
          latitude,
          longitude,
          comments: [],
        },
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
        }}
      >
        <Avatar fromScreen="profile" />
        <LogoutBtn />
        <Text style={globalStyles.title}>{userName}</Text>
        <FlatList
          data={photos}
          keyExtractor={(photo) => photo.id}
          renderItem={(photo) => (
            <View style={{ marginBottom: 32 }}>
              <PostItem photo={photo} fromScreen="profile" />
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
