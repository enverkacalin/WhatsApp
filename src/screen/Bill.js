import React from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import LongLine from "../components/LongLine";

const BillMenu = ({ title }) => {
  return (
    <View>
      <TouchableOpacity style={styles.menu}>
        <Text style={styles.textmenu}>{title}</Text>
        <Feather name="chevron-right" style={styles.righticon} />
      </TouchableOpacity>
      <LongLine />
    </View>
  );
};

const Bill = () => {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.settingmenu}>
        <BillMenu title={"Gizlilik"} />
        <BillMenu title={"Güvenlik"} />
        <BillMenu title={"İki Adımlı Doğrulama"} />
        <BillMenu title={"Numara Değiştir"} />
      </View>

      <View style={styles.settingmenu}>
        <BillMenu title={"Hesap Bilgilerini Talep Edin"} />
        <BillMenu title={"Hesabımı Sil"} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  settingmenu: {
    backgroundColor: "#202020",
    borderBottomColor: "#404040",
    borderTopColor: "#404040",
    borderBottomWidth: 0.6,
    borderTopWidth: 0.6,
    marginTop: 33,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 0,
    paddingEnd: 15,
  },
  textmenu: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    paddingLeft: 18,
  },
  righticon: {
    fontSize: 24,
    color: "#505050",
  },
});

export default Bill;
