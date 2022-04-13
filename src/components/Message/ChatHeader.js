import React from "react";
import { Text, View, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ChatHeader = ({ route, navigation }) => {
  const { name } = route.params;
  return (
    <SafeAreaView style={{ backgroundColor: "#202020" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#202020",
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          style={{ paddingHorizontal: 2 }}
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="#007AFF" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Image
            source={require("../../assets/image/user.png")}
            style={{ height: 35, width: 35, borderRadius: 35, marginLeft: 34 }}
          />
          <Text style={{ fontSize: 20, paddingLeft: 10, color: "white", fontWeight: "600" }}>
            {name}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 10 }}>
          <TouchableOpacity style={{ marginHorizontal: 10 }}>
            <AntDesign name="videocamera" size={25} color="#007AFF" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 10 }}>
            <Ionicons name="call-outline" size={25} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatHeader;
