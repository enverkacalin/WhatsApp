import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const NewMessageHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>Yeni Sohbet</Text>
      <View style={styles.exit}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <FontAwesome5 name="times" size={20} color="#909090" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#282828",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  exit: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#404040",
    padding: 5,
    height: 30,
    width: 30,
    borderRadius: 30,
  },
});

export default NewMessageHeader;
