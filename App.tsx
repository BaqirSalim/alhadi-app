import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 100 }}>This is the Al-Hadi App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

const dummyAnouncments = ["free food on Wednesday", "wear festive clothes for 13th Rajab", "eat more food to prevent cancer", "sign up for SAT prep", "Protest for Palestine in downtown houston on Jan 26th", "sign up for highschool fieldtrip on Feb 16th"];