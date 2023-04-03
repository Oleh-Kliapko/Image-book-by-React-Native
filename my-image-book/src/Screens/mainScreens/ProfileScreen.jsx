import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ImageBackground, View, Text, FlatList } from "react-native";

import { globalStyles } from "../../utils/globalStyles";
import Avatar from "../../components/Avatar/Avatar";
import PostItem from "../../components/PostItem/PostItem";
import { LogoutBtn } from "../../components/Buttons";
import { selectUser } from "../../redux/auth/authSelectors";
import { selectPosts } from "../../redux/posts/postsSelectors";
import { getPosts } from "../../redux/posts/postsOperations";

const ProfileScreen = () => {
  const { userName } = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
          data={posts}
          keyExtractor={(post) => post.idPost}
          renderItem={(post) => (
            <View style={{ marginBottom: 32 }}>
              <PostItem post={post} fromScreen="profile" />
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
