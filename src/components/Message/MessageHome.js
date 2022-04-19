import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MESSAGE_STATUS } from "./Data";

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

const MessageHomeHeader = () => {
  return (
    <View>
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
    </View>
  );
};

const Message = ({ item }) => {
  return (
    <View style={item.isSelf === true ? styles.usermessage : styles.message}>
      <Text style={styles.text}>{item.text} </Text>
      <Text
        style={{
          color: "#9e9e9e",
          fontSize: 13,
          justifyContent: "flex-end",
          alignSelf: "flex-end",
        }}>
        {item.time}{" "}
        {item.isSelf === true ? (
          <Ionicons
            name={item.status === MESSAGE_STATUS.FORWADED ? "ios-checkmark" : "ios-checkmark-done"}
            size={20}
            color={item.status === MESSAGE_STATUS.SEEN ? "#007AFF" : "#9e9e9e"}
          />
        ) : null}
      </Text>
    </View>
  );
};

const MessageHome = ({ messageItem }) => {
  return (
    <View>
      <FlatList
        inverted={true}
        data={messageItem.messages}
        ListFooterComponent={MessageHomeHeader}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => <Message item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    alignSelf: "center",
    backgroundColor: "#303030",
    borderRadius: 5,
    margin: 5,
  },
  alertmessage: {
    backgroundColor: "#191919",
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  usermessage: {
    marginHorizontal: 15,
    backgroundColor: "#005446",
    padding: 7,
    flexDirection: "row",
    alignSelf: "flex-end",
    borderRadius: 10,
    marginVertical: 4,
  },
  message: {
    marginHorizontal: 15,
    backgroundColor: "#353535",
    padding: 7,
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: 10,
    marginVertical: 4,
  },
  text: {
    width: 220,
    color: "white",
    fontSize: 17,
  },
});

export default MessageHome;
