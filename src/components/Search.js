import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";

const Search = ({ title, ...props }) => {
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
        inputContainerStyle={{
          margin: 0,
          height: 33,
          width: props.width,
          borderRadius: 8,
          backgroundColor: "#202020",
        }}
        inputStyle={{ fontSize: 17, color: "#fff" }}
        searchIcon={{ size: 23 }}
        placeholder={title}
        onChangeText={setSearchQuery}
        value={searchQuery}
        keyboardAppearance={"dark"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    marginLeft: 16,
    marginRight: 17,
  },
});

export default Search;
