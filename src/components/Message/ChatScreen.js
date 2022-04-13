import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import MessageHome from "./MessageHome";

const ChatScreen = ({ route }) => {
  const headerHeight = useHeaderHeight();
  const { name, message } = route.params;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#151515" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={headerHeight}
      contentContainerStyle={{ backgroundColor: "black" }}>
      <ScrollView>
        <MessageHome name={name} message={message} />
      </ScrollView>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity activeOpacity={0.6}>
              <Feather name="plus" style={[styles.icon, { fontSize: 30 }]} />
            </TouchableOpacity>
            <TextInput style={styles.input} keyboardAppearance={"dark"} />

            <TouchableOpacity activeOpacity={0.6}>
              <Feather name="camera" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6}>
              <SimpleLineIcons name="microphone" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    backgroundColor: "#252525",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#404040",
  },
  input: {
    flex: 1,
    backgroundColor: "#404040",
    padding: 7,
    margin: 5,
    borderWidth: 0.5,
    borderRadius: 15,
    color: "#fff",
  },
  icon: {
    fontSize: 24,
    color: "#007AFF",
    paddingHorizontal: 10,
  },
});

export default ChatScreen;
