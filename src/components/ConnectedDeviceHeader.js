import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ConnectedDeviceHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Button title="Vazgeç" onPress={() => navigation.goBack()} />
      </View>
      <Text style={styles.title}>QR Kodunu Tara</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#282828",
    paddingVertical: 10,
  },
  title: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 50,
  },
});

export default ConnectedDeviceHeader;
