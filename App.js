// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <Text style={{ color: "blue" }}>Home</Text>
        <Text style={{ color: "blue" }}>About</Text>
        <Text style={{ color: "blue" }}>Contact</Text>
      </View>
      <View style={styles.gray}>
        <Text style={{ color: "blue", fontSize: "42px" }}>Habteab Firezgi</Text>
      </View>
      <View style={styles.blue}>
        <Text style={{ color: "white", fontSize: "22px" }}>This is Habteab's site </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
  },
  red: {
    flex: 1,
    backgroundColor: "brown",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  gray: {
    flex: 8,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center"
  },
  blue: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
