import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Cameras({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const insets = useSafeAreaInsets();
  const [getFlashMode, setFlashMode] = useState();

  const flashData = (val) => {
    setFlashMode(val);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}>
        <Text style={{ color: "white" }}>Kameraya Erişim İzni Yok</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: insets.top,
            marginLeft: insets.left,
            marginRight: insets.right,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={[styles.exitContainer]}>
            <FontAwesome5 name="times" size={30} color="white" />
          </TouchableOpacity>

          <View style={{ flexDirection: "row", paddingRight: 15 }}>
            <TouchableOpacity style={{ paddingRight: 20 }}>
              <Ionicons name="ios-moon" size={26} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => flashData(1)}>
              <Ionicons
                name={getFlashMode === 1 ? "ios-flash" : "ios-flash-off"}
                size={26}
                color={getFlashMode === 1 ? "yellow" : "white"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.cameraContainer,
            { marginBottom: insets.bottom, marginRight: insets.right },
          ]}>
          <TouchableOpacity
            style={styles.cameraIcon}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Ionicons name="ios-camera-reverse-outline" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  exitContainer: {
    backgroundColor: "transparent",
    paddingLeft: 15,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 15,
    paddingRight: 15,
  },
  cameraIcon: {
    flex: 0.1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  icon: {
    fontSize: 40,
    color: "white",
  },
});

export default Cameras;
