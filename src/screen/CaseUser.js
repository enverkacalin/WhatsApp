import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Search from "../components/Search";

const CaseUser = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.case}>
      <View style={styles.caseana}>
        <Button
          title="Gizlilik"
          onPress={() => {
            navigation.navigate("Privacy");
          }}
        />
      </View>
      <ScrollView indicatorStyle="white">
        <Text style={styles.casetext}>Durum</Text>
        <Search title={"Arayın"} />
        <TouchableOpacity
          style={styles.caseuser}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Cameras")}>
          <Image source={require("../assets/image/user.png")} style={styles.user} />
          <View flex={"1"}>
            <Text style={styles.name}>Durumum</Text>
            <Text style={styles.name2}>Durumuma Ekle</Text>
          </View>
          <View marginRight={7} flexDirection="row">
            <View style={styles.caseicon}>
              <FontAwesome name="camera" color={"#1e90ff"} size={16} />
            </View>
            <TouchableOpacity style={styles.caseicon}>
              <Ionicons name="ios-pencil" color={"#1e90ff"} size={16} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.casetitle}>
          <Text style={{ fontSize: 14, color: "#818181" }}>
            Şu anda gösterilecek yeni bir güncelleme yok.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  case: {
    flex: 1,
    backgroundColor: "black",
  },
  caseana: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  casetext: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 18,
    paddingTop: 8,
    paddingBottom: 14,
  },
  caseuser: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202020",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#404040",
    borderTopColor: "#404040",
    marginTop: 50,
  },
  user: {
    width: 58,
    height: 58,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 58,
  },
  name: {
    fontSize: 19,
    fontWeight: "400",
    color: "#fff",
  },
  name2: {
    color: "#818181",
    fontSize: 16,
  },
  caseicon: {
    padding: 10,
    backgroundColor: "#303030",
    margin: 10,
    borderRadius: 20,
  },
  casetitle: {
    backgroundColor: "#202020",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#404040",
    borderTopColor: "#404040",
    paddingVertical: 10,
    marginTop: 36,
    alignItems: "center",
  },
});

export default CaseUser;
