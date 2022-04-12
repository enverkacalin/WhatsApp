import React from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import LongLine from "../components/LongLine";
import Switch from "../components/Switch";

const Notifications = () => {
  return (
    <ScrollView style={{ backgroundColor: "black" }} indicatorStyle="white">
      <Text style={{ color: "#818181", fontSize: 12, paddingLeft: 20, paddingTop: 30 }}>
        MESAJ BİLDİRİMLERİ
      </Text>

      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Uyarıları Göster</Text>
          <Switch />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Ses</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: "#808080" }}>Not</Text>
            <Feather name="chevron-right" style={styles.righticon} />
          </View>
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>İfade Bildirimleri</Text>
          <Switch />
        </TouchableOpacity>
      </View>

      <Text style={{ color: "#818181", fontSize: 12, paddingLeft: 20, paddingTop: 30 }}>
        GRUP BİLDİRİMLERİ
      </Text>

      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Uyarıları Göster</Text>
          <Switch />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Ses</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18, color: "#808080" }}>Not</Text>
            <Feather name="chevron-right" style={styles.righticon} />
          </View>
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>İfade Bildirimleri</Text>
          <Switch />
        </TouchableOpacity>
      </View>

      <View style={[styles.settingmenu, { marginTop: 40 }]}>
        <TouchableOpacity style={styles.menu}>
          <View style={{ flex: 1 }}>
            <Text style={styles.textmenu}>Uygulama İçi Bildirimler</Text>
            <Text style={{ fontSize: 12, color: "#fff", paddingLeft: 20 }}>
              Başlıklar, Sesler, Titreşim
            </Text>
          </View>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
      </View>

      <View style={[styles.settingmenu, { marginTop: 40 }]}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Önizlemeyi Göster</Text>
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
        Yeni mesaj bildiriminde mesajların önizlemesini gösterir.
      </Text>

      <View style={styles.settingButton}>
        <Button title="Bildirim Ayarlarını Sıfırla" color={"#d32f2f"} />
      </View>
      <Text
        style={{
          color: "#818181",
          fontSize: 12,
          paddingLeft: 20,
          paddingTop: 10,
        }}>
        Özel bildirim ayarları dahil olmak üzere tüm bildirim ayarlarını sıfırla.
      </Text>
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
    marginTop: 9,
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
    fontSize: 22,
    color: "#505050",
  },
  settingButton: {
    backgroundColor: "#202020",
    borderBottomColor: "#404040",
    borderTopColor: "#404040",
    borderBottomWidth: 0.6,
    borderTopWidth: 0.6,
    marginTop: 30,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
});

export default Notifications;
