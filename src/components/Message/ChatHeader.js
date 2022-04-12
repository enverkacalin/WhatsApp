import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ChatHeader = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Image
          source={require("../../assets/image/user.png")}
          style={{ height: 35, width: 35, borderRadius: 35 }}
        />
        <Text style={{ fontSize: 20, paddingLeft: 10, color: "white", fontWeight: "600" }}></Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <AntDesign name="videocamera" size={25} color="#007AFF" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Ionicons name="call-outline" size={25} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatHeader;
