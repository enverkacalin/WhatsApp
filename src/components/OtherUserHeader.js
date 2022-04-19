import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ConnectedDeviceHeader = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={{ paddingHorizontal: 2, flexDirection: "row", alignItems: "center" }}
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={27} color="#007AFF" />
          <Text style={{ color: "#007AFF", fontSize: 18 }}>Geri</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Kişi Bilgisi</Text>
      <Button title="Düzenle" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#282828",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ConnectedDeviceHeader;
