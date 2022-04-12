import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Privacy = () => {
  return (
    <ScrollView style={styles.body}>
      <Text style={styles.title}>GÜNCELLEMELERİMİ KİM GÖRECEK</Text>
      <View
        style={{
          backgroundColor: "#202020",
          borderBottomWidth: 0.6,
          borderTopWidth: 0.6,
          borderBottomColor: "#404040",
          borderTopColor: "#404040",
        }}>
        <TouchableOpacity style={styles.privacycase}>
          <View style={{ paddingLeft: 50 }}>
            <Text style={styles.name}>Kişilerim</Text>
            <Text style={styles.name2}>Tüm kişilerinizle paylaşın</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{ height: StyleSheet.hairlineWidth, backgroundColor: "#404040", marginLeft: 50 }}
        />
        <TouchableOpacity style={styles.privacycase}>
          <View style={{ flex: 1, paddingLeft: 50 }}>
            <Text style={styles.name}>Şunlar Hariç Kişilerimle Paylaş</Text>
            <Text style={styles.name2}>Seçtikleriniz hariç kişilerinizle paylaşın</Text>
          </View>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
        <View
          style={{ height: StyleSheet.hairlineWidth, backgroundColor: "#404040", marginLeft: 50 }}
        />
        <TouchableOpacity style={styles.privacycase}>
          <View style={{ flex: 1, paddingLeft: 50 }}>
            <Text style={styles.name}>Sadece Şu Kişilerle Paylaş</Text>
            <Text style={styles.name2}>Sadece seçilen kişilerle paylaş</Text>
          </View>
          <Feather name="chevron-right" style={styles.righticon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title1}>
        Gizlilik ayarlarında yaptığınız değiliklikler, halihazırda göndermiş olduğunuz durum
        güncellemelerini etkilemez.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
  },
  title: {
    color: "#808080",
    marginTop: 32,
    marginBottom: 5,
    paddingHorizontal: 19,
  },
  privacycase: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
  },
  name2: {
    color: "#818181",
    fontSize: 14,
  },
  righticon: {
    fontSize: 24,
    color: "#505050",
  },
  title1: {
    color: "#808080",
    marginTop: 5,
    paddingHorizontal: 19,
  },
});

export default Privacy;
