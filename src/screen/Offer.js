import React from "react";
import { View, StyleSheet } from "react-native";
import Search from "../components/Search";

const Offer = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <Search title={"Ara"} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    paddingBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#303030",
  },
});

export default Offer;
