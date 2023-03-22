import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

import { headerStyles } from "./headerStyles";
import { ArrowLeftIcon, LogOutIcon } from "../svg";

const { header, goBackBtn, logoutBtn, headerTitle } = headerStyles;

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={header}>
      {title !== "Posts" && (
        <TouchableOpacity
          style={goBackBtn}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Posts")}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
      )}
      {title === "Posts" && (
        <TouchableOpacity
          style={logoutBtn}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("login")}
        >
          <LogOutIcon />
        </TouchableOpacity>
      )}
      <Text style={headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
