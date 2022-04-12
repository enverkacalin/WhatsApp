import React from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import LongLine from "../components/LongLine";
import Switch from "../components/Switch";

const Storage = () => {
  return (
    <ScrollView style={{ backgroundColor: "black" }} indicatorStyle="white">
      <Text style={{ color: "#818181", fontSize: 12, paddingLeft: 20, paddingTop: 30 }}>
        SAKLAMA ALANI
      </Text>

      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Saklama Alanını Yönet</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "#818181",
          fontSize: 12,
          paddingLeft: 20,
          paddingTop: 30,
        }}>
        AĞ
      </Text>

      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Ağ Kullanımı</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Aramalar İçin Daha Az Veri Kullan</Text>
          <Switch />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "#818181",
          fontSize: 12,
          paddingLeft: 20,
          paddingTop: 30,
        }}>
        Medyayı Otomatik İndir
      </Text>

      <View style={[styles.settingmenu]}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Fotoğraflar</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Ses</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Video</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Belgeler</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
        <LongLine />
        <TouchableOpacity style={styles.settingButton}>
          <Button title="Otomatik İndirme Ayarlarını Sıfırla" />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: "#818181",
          fontSize: 12,
          paddingLeft: 20,
          paddingTop: 10,
          marginBottom: 15,
        }}>
        Sesli Mesajlar her zaman otomatik olarak indirilir.
      </Text>

      <View style={styles.settingmenu}>
        <TouchableOpacity style={styles.menu}>
          <Text style={styles.textmenu}>Medya Yükleme Kalitesi</Text>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "#818181",
          fontSize: 12,
          paddingLeft: 20,
          paddingTop: 10,
          marginBottom: 25,
        }}>
        Gönderilecek medya dosyalarının kalitesini seçin.
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
    paddingRight: 15,
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
    flexDirection: "row",
    paddingLeft: 12,
  },
});

export default Storage;
