import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

type ItemProps = {
  announcement: string;
};

const Item = ({ announcement }: ItemProps) => (
  <Text style={styles.scrollItem}>{announcement}</Text>
);

export default function Announcements() {
  const [extra, setExtra] = useState<string>();

  const [dummyAnnouncements, setDummyAnnouncements] = useState([
    { announcement: "free food on Wednesday", key: "1" },
    { announcement: "wear festive clothes for 13th Rajab", key: "2" },
    { announcement: "eat more food to prevent cancer", key: "3" },
    { announcement: "sign up for SAT prep", key: "4" },
    {
      announcement: "Protest for Palestine in downtown houston on Jan 26th",
      key: "5",
    },
    { announcement: "sign up for highschool fieldtrip on Feb 16th", key: "6" },
    { announcement: "make cards for teacher appreciation week", key: "7" },
  ]);

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Announcements" ,
    headerTitle: () => (
      <SafeAreaView style={{flex:1,marginHorizontal:20}}>
        <TextInput 
        placeholder="Search"
        clearButtonMode="always"
        style={{
          paddingHorizontal:20,
          paddingVertical:10,
          borderColor:"#ccc",
          borderWidth: 1,
          borderRadius: 8,
          }}
        autoCapitalize= "none"
        autoCorrect={false}   
        />
      </SafeAreaView>
     
     )}} />
      <View>
      <Stack.Screen options={{ title: "Announcements" }} />
      <FlatList
        data={dummyAnnouncements}
        renderItem={({ item }) => <Item announcement={item.announcement} />}
        extraData={extra}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollItem: {
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    borderRadius: 15,
  },
});
