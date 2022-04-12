import React from "react";
import { StyleSheet, View } from "react-native";

const Line = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#404040",
    marginLeft: 90,
  },
});

export default Line;
