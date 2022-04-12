import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import CaseUser from "../screen/CaseUser";
import CallsHome from "../screen/CallsHome.js";
import Cameras from "../screen/Cameras.js";
import ChatHome from "../screen/ChatHome.js";
import StarMessage from "../screen/StarMessage.js";
import Help from "../screen/Help.js";
import SettingsHome from "../screen/SettingsHome.js";
import Connected from "../screen/Connected.js";
import Bill from "../screen/Bill.js";
import ChatSetting from "../screen/ChatSetting.js";
import Notifications from "../screen/Notifications.js";
import Storage from "../screen/Storage.js";
import Offer from "../screen/Offer";
import ChatScreen from "../components/Message/ChatScreen.js";
import ChatHeader from "../components/Message/ChatHeader.js";
import Privacy from "../screen/Privacy";
import NewMessage from "../components/Message/NewMessage.js";
import NewMessageHeader from "../components/Message/NewMessageHeader";

const SettingsStack = createNativeStackNavigator();

const Settings = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsHome"
        component={SettingsHome}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="Connected"
        component={Connected}
        options={{
          headerTitle: "Bağlı Cihazlar",
          headerTitleStyle: { color: "#fff" },
          headerBackTitle: "Ayarlar",
          headerStyle: { backgroundColor: "#151515" },
        }}
      />
      <SettingsStack.Screen
        name="Bill"
        component={Bill}
        options={{
          headerTitle: "Hesap",
          headerTitleStyle: { color: "#fff" },
          headerBackTitle: "Ayarlar",
          headerStyle: { backgroundColor: "#151515" },
        }}
      />
      <SettingsStack.Screen
        name="ChatSetting"
        component={ChatSetting}
        options={{
          headerTitle: "Sohbetler",
          headerTitleStyle: { color: "#fff" },
          headerBackTitle: "Ayarlar",
          headerStyle: { backgroundColor: "#151515" },
        }}
      />
      <SettingsStack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerTitle: "Bildirimler",
          headerTitleStyle: { color: "#fff" },
          headerBackTitle: "Ayarlar",
          headerStyle: { backgroundColor: "#151515" },
        }}
      />
      <SettingsStack.Screen
        name="Storage"
        component={Storage}
        options={{
          headerTitle: "Saklama Alanı ve Veriler",
          headerTitleStyle: { color: "#fff" },
          headerBackTitle: "Ayarlar",
          headerStyle: { backgroundColor: "#151515" },
        }}
      />
      <SettingsStack.Screen
        name="Offer"
        component={Offer}
        options={{
          headerTitle: "Ardaşlarınızı Davet Edin",
          headerTitleStyle: { color: "#fff" },
          headerBackTitle: "Ayarlar",
          headerStyle: { backgroundColor: "#151515" },
        }}
      />
    </SettingsStack.Navigator>
  );
};

const ChatsStack = createNativeStackNavigator();

const Chats = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="ChatHome" component={ChatHome} options={{ headerShown: false }} />
      <ChatsStack.Group screenOptions={{ presentation: "modal" }}>
        <ChatsStack.Screen
          name="NewMessage"
          component={NewMessage}
          options={{ header: (props) => <NewMessageHeader {...props} /> }}
        />
      </ChatsStack.Group>
    </ChatsStack.Navigator>
  );
};

const CaseStack = createNativeStackNavigator();

const Case = () => {
  return (
    <CaseStack.Navigator>
      <CaseStack.Screen name="CaseUser" component={CaseUser} options={{ headerShown: false }} />
      <CaseStack.Screen
        name="Privacy"
        component={Privacy}
        options={{
          headerTitle: "Durum Gizlilik Ayarları",
          headerTitleStyle: { color: "#fff" },
          headerBackTitle: "Geri",
          headerStyle: { backgroundColor: "#151515" },
        }}
      />
      <CaseStack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <CaseStack.Screen name="Cameras" component={Cameras} options={{ headerShown: false }} />
      </CaseStack.Group>
    </CaseStack.Navigator>
  );
};

const CallsStack = createNativeStackNavigator();

const Calls = () => {
  return (
    <CallsStack.Navigator>
      <CallsStack.Screen name="CallsHome" component={CallsHome} options={{ headerShown: false }} />
    </CallsStack.Navigator>
  );
};

const CreateNew = () => {
  return <View></View>;
};

const Tabs = createBottomTabNavigator();

const Tabnavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#151515", borderTopWidth: 0 },
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Durum") {
            iconName = focused ? "disc-outline" : "disc-outline";
          } else if (route.name === "Aramalar") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "Kamera") {
            iconName = focused ? "camera" : "camera-outline";
          } else if (route.name === "Sohbetler") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Ayarlar") {
            iconName = focused ? "cog" : "cog-outline";
          }
          return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarActiveTintColor: "#2196f3",
        tabBarInactiveTintColor: "gray",
      })}>
      <Tabs.Screen name="Durum" component={Case} options={{ headerShown: false }} />
      <Tabs.Screen name="Aramalar" component={Calls} options={{ headerShown: false }} />
      <Tabs.Screen
        name="CreateNew"
        component={CreateNew}
        options={{
          headerShown: false,
          tabBarLabel: "Kamera",
          tabBarIcon: (props) => <Ionicons name="camera-outline" {...props} size={30} />,
        }}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("Kamera");
          },
        })}
      />
      <Tabs.Screen name="Sohbetler" component={Chats} options={{ headerShown: false }} />
      <Tabs.Screen name="Ayarlar" component={Settings} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabnavigation"
          component={Tabnavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Kamera" component={Cameras} options={{ headerShown: false }} />
        <Stack.Screen
          name="StarMessage"
          component={StarMessage}
          options={{
            headerTitle: "Yıldızlı Mesajlar",
            headerTitleStyle: { color: "#fff" },
            headerBackTitle: "Ayarlar",
            headerStyle: { backgroundColor: "#151515" },
          }}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{
            headerTitle: "WhatsApp",
            headerTitleStyle: { color: "#fff" },
            headerBackTitle: "Ayarlar",
            headerStyle: { backgroundColor: "#151515" },
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            headerTitle: (props) => <ChatHeader {...props} />,
            headerBackTitle: "",
            headerStyle: { backgroundColor: "#202020" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
