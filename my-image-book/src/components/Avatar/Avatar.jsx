import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import { globalStyles } from "../../utils/globalStyles";
import { AddAvatarIcon, RemoveAvatarIcon } from "../svg";

const Avatar = ({ isAvatar = false }) => {
  return (
    <View style={globalStyles.avatarBox}>
      <TouchableOpacity>
        {isAvatar ? (
          <RemoveAvatarIcon style={{ marginTop: 75, marginLeft: 113.5 }} />
        ) : (
          <AddAvatarIcon style={{ marginTop: 81, marginLeft: 119.5 }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

Avatar.propTypes = {
  isAvatar: PropTypes.bool,
};

export default Avatar;
