import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MessageAlert = () => {
  Alert.alert(
    "WhatsApp, sohbetlerinizi uçtan uca şifrelemeyle korur.",
    "Mesaj ve aramalarınız seçtiğiniz kişi ve işletmelerle aranızda kalır. WhatsApp bile bu içerikleri okuyamaz ve dinleyemez.",
    [
      {
        text: "Daha Fazla Bilgi",
      },
      {
        text: "Tamam",
      },
    ]
  );
};

const MessageHome = ({ name, message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text style={{ color: "#808080", fontWeight: "600", padding: 5 }}>10 Ocak Pzt</Text>
      </View>
      <TouchableOpacity style={styles.alertmessage} activeOpacity={0.8} onPress={MessageAlert}>
        <Text style={{ fontSize: 13, textAlign: "center", color: "#ffeb3b" }}>
          <FontAwesome name="lock" size={15} color="#ffeb3b" /> Mesajlar ve aramalar uçtan uça
          şifrelidir. WhatsApp dahil olmak üzere bu sohbetin dışında bulunan hiç kimse mesaj ve
          aramalarınızı okuyamaz ve dinleyemez. Daha fazla bilgi edinmek için dokunun.
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "column" }}>
        <View style={styles.usermessage}>
          <Text style={styles.text}>{name} </Text>
          <Text
            style={{
              color: "#9e9e9e",
              fontSize: 13,
              justifyContent: "flex-end",
              alignSelf: "flex-end",
            }}>
            19:07 <Ionicons name="ios-checkmark-done" size={20} color="#007AFF" />
          </Text>
        </View>
        <View style={styles.message}>
          <Text style={styles.text}>{message} </Text>
          <Text
            style={{
              color: "#9e9e9e",
              fontSize: 13,
              justifyContent: "flex-end",
              alignSelf: "flex-end",
            }}>
            19:07
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    alignSelf: "center",
    backgroundColor: "#303030",
    borderRadius: 5,
    margin: 10,
  },
  alertmessage: {
    backgroundColor: "#191919",
    marginHorizontal: 40,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
  },
  usermessage: {
    marginRight: 15,
    marginLeft: 35,
    backgroundColor: "#005446",
    padding: 7,
    flexDirection: "row",
    alignSelf: "flex-end",
    borderRadius: 10,
    marginVertical: 7,
  },
  message: {
    marginHorizontal: 15,
    backgroundColor: "#353535",
    padding: 7,
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 10,
    marginVertical: 7,
  },
  text: {
    color: "white",
    fontSize: 17,
  },
});

export default MessageHome;
