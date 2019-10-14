import React from "react";
import {
  View,
  TextInput,
  Image,
  Button,
  Platform,
  KeyboardAvoidingView
} from "react-native";

export default function JoinScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        resizeMode="contain"
        style={{ flex: 1 }}
        source={require("../assets/chat-icon.png")}
      />
      <View style={{ flex: 1 }}>
        <TextInput placeholder="Enter username" />
        <Button title="Join Chat" />
      </View>
      {Platform.OS === "ios" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}
