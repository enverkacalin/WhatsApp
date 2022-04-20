import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
import * as Contacts from "expo-contacts";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.PHONE_NUMBERS],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  const keyExtractor = (item, idx) => {
    return item.id.toString() || idx.toString();
  };

  return (
    <View>
      <View style={{ backgroundColor: "#404040" }}>
        <Text style={styles.text}></Text>
      </View>
      <FlatList
        data={contacts}
        keyExtractor={keyExtractor}
        style={styles.list}
        renderItem={({ item }) => (
          <View>
            <TouchableHighlight
              style={styles.textmessage}
              activeOpacity={0.6}
              underlayColor="#303030"
              onPress={() => console.log("")}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require("../../assets/image/user.png")} style={styles.user} />
                <Text style={styles.name}>{item.name}</Text>
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
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
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
  text: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
    paddingVertical: 5,
    padding: 18,
  },
});
export default ContactsList;
