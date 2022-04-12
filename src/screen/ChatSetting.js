import React from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import LongLine from "../components/LongLine";
import Switch from "../components/Switch";

const ChatSetting = () => {
  return (
    <ScrollView style={{ backgroundColor: "black" }} indicatorStyle="white">
      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Sohbet Duvar Kağıdı</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
      </View>

      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Film Rulosuna Kaydet</Text>
          <Switch />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "#818181",
          fontSize: 14,
          paddingLeft: 20,
          paddingTop: 10,
        }}>
        Gelen fotoğraf ve videoları iPhone'unuzun Film Rulosu'na otomatik olarak kaydedin.
      </Text>

      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Sohbet Yedeği</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Sohbeti Dışa Aktar</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
      </View>

      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Sohbetleri Arşivde Tut</Text>
          <Switch />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "#818181",
          fontSize: 12,
          paddingLeft: 20,
          paddingTop: 10,
        }}>
        Arşivlenen sohbetler yeni mesaj aldığınızda arşivde kalır.
      </Text>

      <View style={styles.settingButton}>
        <TouchableOpacity style={styles.button}>
          <Button title="Sohbetleri Android'e Taşı" />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.button}>
          <Button title="Tüm Sohbetleri Arşivle" />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.button}>
          <Button title="Tüm Sohbetleri Temizle" color={"#d32f2f"} />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.button}>
          <Button title="Tüm Sohbetleri Sil" color={"#d32f2f"} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  settingmenu: {
    backgroundColor: "#202020",
    borderBottomColor: "#404040",
    borderTopColor: "#404040",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: 33,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
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
  settingButton: {
    backgroundColor: "#202020",
    borderBottomColor: "#404040",
    borderTopColor: "#404040",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    marginVertical: 33,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingLeft: 13,
  },
});

export default ChatSetting;
