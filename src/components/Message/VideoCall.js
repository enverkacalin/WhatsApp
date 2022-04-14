import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <Camera style={{ flex: 1 }} type={type}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0, 0.3)" }}>
          <View style={styles.textcontainer}>
            <TouchableOpacity
              style={{ alignSelf: "flex-start", marginHorizontal: 10 }}
              onPress={() => {
                navigation.goBack(), Vibration.vibrate();
              }}>
              <AntDesign name="left" size={30} color="white" />
            </TouchableOpacity>
            <View style={{ alignSelf: "center" }}>
              <Text style={styles.call}></Text>
              <Text style={{ color: "white", fontSize: 18 }}>+90 000 000 00 00 aranıyor...</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#252525",
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
            }}>
            <TouchableOpacity style={{ alignSelf: "center", marginBottom: 5 }}>
              <Ionicons name="md-chevron-up-outline" size={40} color="#353535" />
            </TouchableOpacity>

            <View style={styles.callhome}>
              <View style={styles.cameracontainer}>
                <TouchableOpacity
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}>
                  <Ionicons name="camera-reverse" style={styles.exitIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.cameracontainer}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="video-off" style={styles.exitIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.cameracontainer}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="microphone-off" style={styles.exitIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.exitContainer}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack(), Vibration.vibrate();
                  }}>
                  <MaterialIcons name="call-end" style={styles.exitIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Camera>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  call: {
    fontSize: 30,
    fontStyle: "italic",
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    marginHorizontal: 40,
  },
  textcontainer: {
    flexDirection: "column",
    flex: 1,
    marginVertical: 40,
    marginRight: 20,
  },
  callhome: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
    marginBottom: 35,
  },
  exitContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: 55,
    width: 55,
    borderRadius: 55,
  },
  cameracontainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#404040",
    height: 55,
    width: 55,
    borderRadius: 55,
  },
  exitIcon: {
    fontSize: 30,
    color: "white",
  },
});

export default VideoCall;
