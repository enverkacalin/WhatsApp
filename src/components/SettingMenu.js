import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const SettingScreen = ({ title, iconcolor, iconname, navigation, adress }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.menu}
        activeOpacity={0.6}
        onPress={() => navigation.navigate(adress)}>
        <View style={styles.textcontainer}>
          <View style={[styles.icon, { backgroundColor: iconcolor }]}>
            <Ionicons name={iconname} size={22} color="white" />
          </View>
          <Text style={styles.textmenu}>{title}</Text>
        </View>
        <Feather name="chevron-right" style={styles.righticon} />
      </TouchableOpacity>
      <View
        style={{ height: StyleSheet.hairlineWidth, backgroundColor: "#404040", marginLeft: 70 }}
      />
    </View>
  );
};

const SettingMenu = ({ navigation }) => {
  return (
    <View>
      <View style={styles.settingmenu}>
        <SettingScreen
          navigation={navigation}
          adress="StarMessage"
          iconname="star"
          iconcolor={"#fbc02d"}
          title={"Yıldızlı Mesajlar"}
        />
        <SettingScreen
          navigation={navigation}
          adress="Connected"
          iconname="ios-laptop-outline"
          iconcolor={"#4db6ac"}
          title={"Bağlı Cihazlar"}
        />
      </View>

      <View style={styles.settingmenu}>
        <SettingScreen
          navigation={navigation}
          adress="Bill"
          iconname="key"
          iconcolor={"#1e88e5"}
          title={"Hesap"}
        />
        <SettingScreen
          navigation={navigation}
          adress="ChatSetting"
          iconname="ios-logo-whatsapp"
          iconcolor={"#4caf50"}
          title={"Sohbetler"}
        />
        <SettingScreen
          navigation={navigation}
          adress="Notifications"
          iconname="ios-stop-outline"
          iconcolor={"#f44336"}
          title={"Bildirimler"}
        />
        <SettingScreen
          navigation={navigation}
          adress="Storage"
          iconname="swap-vertical"
          iconcolor={"#4caf50"}
          title={"Saklama Alanı ve Veriler"}
        />
      </View>

      <View style={styles.settingmenu}>
        <SettingScreen
          navigation={navigation}
          adress="Help"
          iconname="information"
          iconcolor={"#1e88e5"}
          title={"Yardım"}
        />
        <SettingScreen
          navigation={navigation}
          adress="Storage"
          iconname="heart"
          iconcolor={"#e91e63"}
          title={"Arkadaşına Öner"}
        />
      </View>
    </View>
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
  textcontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 6.5,
    paddingBottom: 6.5,
    paddingLeft: 20,
    paddingRight: 15,
  },
  icon: {
    height: 31,
    width: 31,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  textmenu: {
    color: "#fff",
    fontSize: 16,
    paddingLeft: 20,
  },
  righticon: {
    fontSize: 24,
    color: "#505050",
  },
});

export default SettingMenu;
