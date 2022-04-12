import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CallSwitch from "../components/CallSwitch";

const CallsHome = () => {
  return (
    <SafeAreaView style={styles.calls}>
      <View style={styles.header}>
        <View style={{}}>
          <CallSwitch />
        </View>
        <TouchableOpacity>
          <MaterialIcons name="add-call" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.callstext}>Aramalar</Text>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: "white",
            textAlign: "left",
            fontSize: 30,
            paddingLeft: 15,
            fontWeight: "300",
          }}>
          Sesli veya görüntülü WhatsApp araması yapmak için en üstteki{" "}
          <MaterialIcons name="add-call" style={{ fontSize: 25 }} /> simgesine dokunun ve bir kişi
          seçin
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calls: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    backgroundColor: "black",
    paddingLeft: 10,
    paddingRight: 15,
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    fontSize: 25,
    color: "#1e90ff",
    marginLeft: 60,
  },
  callstext: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 18,
    paddingTop: 10,
    paddingBottom: 14,
  },
});

export default CallsHome;
