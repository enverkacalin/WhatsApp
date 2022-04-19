import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import OtherUserMenu from "../components/OtherUserMenu.js";

const OtherUserDetail = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }} indicatorStyle="white">
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}>
        <TouchableHighlight onPress={() => navigation.navigate("OtherUserPhoto", { item: item })}>
          <Image
            source={
              item.otherUser.profilePhoto
                ? item.otherUser.profilePhoto
                : require("../assets/image/user.png")
            }
            style={styles.imageuser}
          />
        </TouchableHighlight>

        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.name}>{item.otherUser.userName}</Text>
          <Text style={{ color: "#808080", fontSize: 16 }}>+90 000 000 00 00</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <TouchableOpacity style={styles.callcontainer} activeOpacity={0.8}>
            <Ionicons name="ios-call" size={20} color="#007AFF" />
            <Text style={{ color: "#007AFF" }}>sesli</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.callcontainer}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("VideoCall", { item: item })}>
            <FontAwesome name="video-camera" size={20} color="#007AFF" />
            <Text style={{ color: "#007AFF" }}>görüntülü</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.callcontainer} activeOpacity={0.8}>
            <Ionicons name="search" size={20} color="#007AFF" />
            <Text style={{ color: "#007AFF" }}>ara</Text>
          </TouchableOpacity>
        </View>
      </View>
      <OtherUserMenu />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageuser: {
    height: 120,
    width: 120,
    borderRadius: 120,
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 7,
  },
  callcontainer: {
    backgroundColor: "#303030",
    height: 55,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 7,
  },
});

export default OtherUserDetail;
