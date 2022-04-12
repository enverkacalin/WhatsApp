import React from "react";
import { View, Text } from "react-native";

const StarMessage = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#818181", fontSize: 20 }}>Yıldızlı Mesaj Yok</Text>
      <Text style={{ color: "#818181", fontSize: 15, textAlign: "center", paddingHorizontal: 30 }}>
        Herhangi bir mesajı yıldızlamak için mesaja dokunun ve basılı tutun, böylece daha sonra
        kolayca bulabilirsiniz.
      </Text>
    </View>
  );
};

export default StarMessage;
