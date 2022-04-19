import React from "react";
import { Button, View, Text } from "react-native";

const Connected = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          textAlign: "center",
          paddingHorizontal: 45,
          fontWeight: "bold",
        }}>
        Whatsap'ı Başka Cihazlarda da Kullanın
      </Text>
      <View
        style={{
          height: 50,
          width: 330,
          backgroundColor: "#2196f3",
          justifyContent: "center",
          borderRadius: 10,
          marginVertical: 20,
        }}>
        <Button
          title="Cihaz Bağla"
          color={"#fff"}
          onPress={() => navigation.navigate("ConnectedDevice")}
        />
      </View>
    </View>
  );
};

export default Connected;
