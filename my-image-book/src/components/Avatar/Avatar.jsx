import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";

import { globalStyles } from "../../utils/globalStyles";
import { AddAvatarIcon, RemoveAvatarIcon } from "../svg";

const Avatar = ({ isAvatar = false }) => {
  // add state photoUri
  const navigation = useNavigation();

  const handleGoToCamera = () => {
    navigation.navigate("camera");
  };

  return (
    <TouchableOpacity style={globalStyles.avatarBox} onPress={handleGoToCamera}>
      {/* change avatarBox to real photo from Redux*/}
      {isAvatar ? (
        <RemoveAvatarIcon style={{ marginTop: 75, marginLeft: 101 }} />
      ) : (
        <AddAvatarIcon style={{ marginTop: 81, marginLeft: 107 }} />
      )}
    </TouchableOpacity>
  );
};

Avatar.propTypes = {
  isAvatar: PropTypes.bool,
};

export default Avatar;
