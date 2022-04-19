import React from "react";
import { View, Text } from "react-native";
import { Camera } from "expo-camera";

const ConnectedDevice = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#202020" }}>
      <Text style={{ color: "#707070", textAlign: "center", paddingVertical: 20 }}>
        WhatsApp Web'i kullanmak için bilgisayarınızda web.wahtsapp.com sayfasına gidin.
      </Text>
      <Camera style={{ flex: 1, marginBottom: 60 }} />
    </View>
  );
};

export default ConnectedDevice;
