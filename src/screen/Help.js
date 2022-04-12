import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Help = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Button title="Yardım Merkezi" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Button title="Bize Ulaşın" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Button title="Koşullar ve Gizlilik İlkesi" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}>
          <Button title="Lisanslar" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 28, paddingTop: 5 }}>
        <MaterialIcons name="copyright" size={13} color="#818181" />
        <Text style={{ fontSize: 13, color: "#818181", justifyContent: "center" }}>
          {" "}
          2022 ECK LLC
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingmenu: {
    marginTop: 300,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    borderBottomColor: "#303030",
    borderTopColor: "#303030",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export default Help;
