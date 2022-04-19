import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import LongLine from "./LongLine";

const OtherUser = ({ title, iconcolor, iconname }) => {
  return (
    <View>
      <TouchableOpacity style={styles.menu} activeOpacity={0.6}>
        <View style={styles.textcontainer}>
          <View style={[styles.icon, { backgroundColor: iconcolor }]}>
            <Ionicons name={iconname} size={22} color="white" />
          </View>
          <Text style={styles.textmenu}>{title}</Text>
        </View>
        <Feather name="chevron-right" style={styles.righticon} />
      </TouchableOpacity>
      <View
        style={{
          height: StyleSheet.hairlineWidth,
          backgroundColor: "#404040",
          marginLeft: 70,
          marginRight: 5,
        }}
      />
    </View>
  );
};

const OtherUserMenu = () => {
  return (
    <View>
      <View style={styles.otheruser}>
        <OtherUser
          iconname="image-outline"
          iconcolor={"#0277bd"}
          title={"Medya, Bağlantılar ve Belgeler"}
        />
        <OtherUser iconname="star" iconcolor={"#fbc02d"} title={"Yıldızlı Mesajlar"} />
      </View>

      <View style={styles.otheruser}>
        <OtherUser iconname="volume-high" iconcolor={"#43a047"} title={"Sessiz"} />
        <OtherUser iconname="flower-outline" iconcolor={"#f06292"} title={"Duvar Kağıdı ve Ses"} />
        <OtherUser
          iconname="md-download-outline"
          iconcolor={"#fbc02d"}
          title={"Film Rulosu2na Kaydet"}
        />
      </View>

      <View style={styles.otheruser}>
        <OtherUser iconname="time-outline" iconcolor={"#0277bd"} title={"Süreli Mesajlar"} />
        <OtherUser iconname="md-lock-closed" iconcolor={"#0277bd"} title={"Şifreleme"} />
      </View>
      <View style={styles.otheruser}>
        <OtherUser iconname="person-circle-outline" iconcolor={"gray"} title={"Kişi Detayları"} />
      </View>
      <View style={styles.otheruser}>
        <OtherUser iconname="people-sharp" iconcolor={"#f57c00"} title={"Ortak Gruplar"} />
      </View>

      <View style={styles.otheruser}>
        <TouchableHighlight style={styles.button} onPress={() => console.log("")}>
          <Button title="Kişiyi Paylaş" />
        </TouchableHighlight>
        <LongLine />
        <TouchableHighlight style={styles.button} onPress={() => console.log("")}>
          <Button title="Sohbeti Dışa Aktar" />
        </TouchableHighlight>
        <LongLine />
        <TouchableHighlight style={styles.button} onPress={() => console.log("")}>
          <Button title="Sohbeti Temizle " color={"#d32f2f"} />
        </TouchableHighlight>
      </View>

      <View style={styles.otheruser}>
        <TouchableHighlight style={styles.button} onPress={() => console.log("")}>
          <Button title="Kişiyi Engelle" color={"#d32f2f"} />
        </TouchableHighlight>
        <LongLine />
        <TouchableHighlight style={styles.button} onPress={() => console.log("")}>
          <Button title="Kişiyi Şikayet Et" color={"#d32f2f"} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otheruser: {
    backgroundColor: "#202020",
    borderBottomColor: "#404040",
    borderTopColor: "#404040",
    borderBottomWidth: 0.6,
    borderTopWidth: 0.6,
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 10,
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
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingLeft: 13,
  },
});

export default OtherUserMenu;
