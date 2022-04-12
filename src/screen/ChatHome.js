import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import UserMessage from "../components/Message/UserMessage.js";

const ChatHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <UserMessage navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default ChatHome;
