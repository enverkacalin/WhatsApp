import React from "react";
import { View, Image } from "react-native";

const OtherUserPhoto = ({ route }) => {
  const { item } = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Image
        source={
          item.otherUser.profilePhoto
            ? item.otherUser.profilePhoto
            : require("../assets/image/user.png")
        }
      />
    </View>
  );
};

export default OtherUserPhoto;
