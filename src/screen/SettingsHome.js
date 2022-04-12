import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import SettingMenu from "../components/SettingMenu";

const SettingsHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.setting}>
      <ScrollView indicatorStyle="white">
        <Text style={styles.textsetting}>Ayarlar</Text>
        <TouchableOpacity style={styles.settinguser} activeOpacity={0.6}>
          <Image source={require("../assets/image/user.png")} style={styles.user} />
          <View>
            <Text style={styles.name}>Enver Coşkun KAÇALIN</Text>
            <Text />
          </View>
        </TouchableOpacity>
        <SettingMenu navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    backgroundColor: "black",
  },
  textsetting: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    paddingLeft: 18,
    paddingTop: 48,
  },
  settinguser: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202020",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#404040",
    borderTopColor: "#404040",
    marginTop: 10,
  },
  user: {
    width: 60,
    height: 60,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 60,
  },
  name: {
    paddingBottom: 15,
    fontSize: 23,
    fontWeight: "400",
    color: "#fff",
  },
});

export default SettingsHome;
