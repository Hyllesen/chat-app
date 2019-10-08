import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import io from "socket.io-client";

export default function App() {
  useEffect(function() {
    io("http://192.168.0.10:3001");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
