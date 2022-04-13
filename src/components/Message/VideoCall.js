import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Vibration } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function VideoCall({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

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
      <ImageBackground source={require("../../assets/image/user.png")} style={{ flex: 1 }}>
        <View style={styles.imagecontainer}>
          <Camera style={{ height: 150, width: 100 }} type={type} />
        </View>
        <View style={styles.camera}>
          <View style={styles.exitContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(), Vibration.vibrate();
              }}>
              <MaterialIcons name="call-end" style={styles.exitIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.cameraContainer}>
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Ionicons name="ios-camera-reverse-outline" style={styles.cameraicon} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagecontainer: {
    flex: 1,
    alignItems: "flex-end",
    marginVertical: 40,
    marginRight: 20,
  },
  camera: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  exitContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  cameraContainer: {
    backgroundColor: "transparent",
    marginBottom: 20,
    alignSelf: "flex-end",
  },
  exitIcon: {
    fontSize: 30,
    color: "white",
  },

  cameraicon: {
    fontSize: 40,
    color: "white",
    marginBottom: 20,
    marginHorizontal: 30,
  },
});

export default VideoCall;
