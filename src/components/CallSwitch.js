import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch, selectionColor }) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updatedSwitchData = (val) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : "#202020",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              color: "white",
              fontWeight: "500",
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? selectionColor : "#202020",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              color: "white",
              fontWeight: "500",
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Dashboard() {
  const onSelectSwitch = () => {};

  return (
    <View>
      <View>
        <CustomSwitch
          selectionMode={1}
          option1={"Tümü"}
          option2={"Cevapsız"}
          onSelectSwitch={onSelectSwitch}
          selectionColor={"#757575"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 33,
    width: 180,
    backgroundColor: "#202020",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#202020",
    flexDirection: "row",
    justifyContent: "center",
    padding: 1,
  },
});
