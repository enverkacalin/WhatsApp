import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  TouchableHighlight,
} from "react-native";
import Line from "../Line";
import { DATA } from "./Data";
import Search from "../Search";
import { Entypo, Ionicons } from "@expo/vector-icons";

const ListHeader = () => {
  return (
    <View>
      <View indicatorStyle="white">
        <Text style={styles.title}> Sohbetler</Text>
        <View style={styles.search}>
          <Search title={"Ara"} width={302} />
          <TouchableOpacity>
            <Ionicons name="filter-outline" color={"#1e90ff"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupmessage}>
        <Button title="Toplu Mesaj Listeleri" />
        <Button title="Yeni Grup" />
      </View>
    </View>
  );
};

const UserMessage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Button title="Düzenle" />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NewMessage");
          }}>
          <Entypo name="new-message" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        renderItem={({ item }) => (
          <View>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#303030"
              onPress={() =>
                navigation.navigate("ChatScreen", {
                  item: item,
                })
              }>
              <View style={styles.textmessage}>
                <Image
                  source={
                    item.otherUser.profilePhoto
                      ? item.otherUser.profilePhoto
                      : require("../../assets/image/user.png")
                  }
                  style={styles.user}
                />
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.name}>{item.otherUser.userName}</Text>
                    <Text style={{ color: "#808080" }}>{item.messages[0].time}</Text>
                  </View>
                  <View>
                    <Text style={styles.message}>{item.messages[0].text}</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
            <Line />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 12,
    paddingTop: 8,
    paddingBottom: 10,
  },
  groupmessage: {
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 15,
    paddingTop: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: "#303030",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 15,
  },
  icon: {
    fontSize: 24,
    color: "#1e90ff",
  },
  textmessage: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  user: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 14,
  },
  name: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    width: 270,
    color: "#808080",
    fontSize: 15,
    marginTop: 5,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default UserMessage;
