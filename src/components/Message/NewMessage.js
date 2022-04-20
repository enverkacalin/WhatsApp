import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableHighlight, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import { DATA } from "./Data";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ContactsList from "./ContactsList";

const NewSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.search}>
      <SearchBar
        containerStyle={{
          padding: 0,
          backgroundColor: "black",
          borderBottomWidth: 0,
          borderTopWidth: 0,
          borderRadius: 8,
        }}
        inputContainerStyle={{ margin: 0, height: 35, borderRadius: 8, backgroundColor: "#404040" }}
        inputStyle={{ fontSize: 17, color: "white" }}
        searchIcon={{ size: 23 }}
        placeholder={"Ara"}
        onChangeText={setSearchQuery}
        value={searchQuery}
        keyboardAppearance={"dark"}
      />
    </View>
  );
};

const NewHeader = () => {
  return (
    <View>
      <View>
        <TouchableHighlight underlayColor="#303030" onPress={() => console.log("")}>
          <View style={styles.group}>
            <View style={styles.icon}>
              <MaterialIcons name="group" size={19} color="#1e90ff" />
            </View>
            <Text style={{ color: "#1e90ff", fontSize: 16, paddingLeft: 14 }}>Yeni Grup</Text>
          </View>
        </TouchableHighlight>

        <View
          style={{ height: StyleSheet.hairlineWidth, backgroundColor: "#404040", marginLeft: 70 }}
        />

        <TouchableHighlight underlayColor="#303030" onPress={() => console.log("")}>
          <View style={styles.group}>
            <View style={styles.icon}>
              <FontAwesome name="user-plus" size={15} color="#1e90ff" />
            </View>
            <Text style={{ color: "#1e90ff", fontSize: 16, paddingLeft: 14 }}>Yeni Kişi</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{ backgroundColor: "#404040" }}>
        <Text style={styles.text}>SIK GÖRÜŞÜLENLER</Text>
      </View>
    </View>
  );
};

const NewMessage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#181818" }}>
      <View style={{ backgroundColor: "#282828" }}>
        <NewSearch />
      </View>
      <FlatList
        indicatorStyle="white"
        data={DATA}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={NewHeader}
        ListFooterComponent={ContactsList}
        renderItem={({ item }) => (
          <View>
            <View>
              <TouchableHighlight
                style={styles.textmessage}
                activeOpacity={0.6}
                underlayColor="#303030"
                onPress={() =>
                  navigation.navigate(
                    "ChatScreen",
                    {
                      item: item,
                    },
                    navigation.goBack()
                  )
                }>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={
                      item.otherUser.profilePhoto
                        ? item.otherUser.profilePhoto
                        : require("../../assets/image/user.png")
                    }
                    style={styles.user}
                  />
                  <View>
                    <Text style={styles.name}>{item.otherUser.userName}</Text>
                    <Text style={styles.case}>{item.otherUser.case}</Text>
                  </View>
                </View>
              </TouchableHighlight>
              <View
                style={{
                  height: StyleSheet.hairlineWidth,
                  backgroundColor: "#404040",
                  marginLeft: 70,
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    marginLeft: 16,
    marginRight: 17,
    marginBottom: 17,
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  textmessage: {
    paddingLeft: 18,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  user: {
    width: 37,
    height: 37,
    borderRadius: 37,
    marginRight: 14,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
  },
  case: {
    color: "gray",
    fontSize: 13,
  },
  icon: {
    height: 37,
    width: 37,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 31,
    padding: 5,
    backgroundColor: "#303030",
  },
  text: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
    paddingVertical: 5,
    padding: 18,
  },
});

export default NewMessage;
