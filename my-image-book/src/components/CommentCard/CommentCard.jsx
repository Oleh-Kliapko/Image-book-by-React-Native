import PropTypes from "prop-types";
import { format } from "date-fns";
import { Image, View, Text } from "react-native";

import { commentStyles } from "./commentStyles";

const { commentWrapper, commentDate, commentText, icon } = commentStyles;

const CommentCard = ({ comment }) => {
  const { textComment, dateComment } = comment.item;

  return (
    <View style={{ paddingLeft: 44, marginTop: 24 }}>
      <Image
        style={icon}
        source={require("../../images/commentator.jpg")}
      ></Image>
      <View style={commentWrapper}>
        <Text style={commentText}>{textComment}</Text>
        <Text style={commentDate}>{format(dateComment, "PPpp")}</Text>
      </View>
    </View>
  );
};

export default CommentCard;

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
};
