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
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

const [dummyAnnouncements, setDummyAnnouncements] = useState ([
  {announcement: "free food on Wednesday", key: "1"},
  {announcement: "wear festive clothes for 13th Rajab", key: "2"},
  {announcement: "eat more food to prevent cancer", key: "3"},
  {announcement: "sign up for SAT prep", key: "4"},
  {announcement: "Protest for Palestine in downtown houston on Jan 26th", key: "5"},
  {announcement: "sign up for highschool fieldtrip on Feb 16th", key: "6"},
  {announcement: "make cards for teacher appreciation week", key: "7"},
]); 
