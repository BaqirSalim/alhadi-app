import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

type ItemProps = {
  announcement: string;
};

type Announcement = {
  announcement: string;
  key: string;
}

const Item = ({ announcement }: ItemProps) => (
  <Text style={styles.scrollItem}>{announcement}</Text>
);

export default function Announcements() {
  const [extra, setExtra] = useState<string>();

  const [dummyAnnouncements, setDummyAnnouncements] = useState<Announcement[]>([
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

const [search, setSearch] = useState<string>("");
const [filteredAnnouncements, setFilteredAnnoucements] = useState<Announcement[]>([]);
const [showFiltered, setShowFiltered] = useState<boolean>(false);

const filterItems = (searchWord: string) => {
  return dummyAnnouncements.filter((item) =>
  item.announcement.toLowerCase().includes(searchWord.toLowerCase())
  );
}

const handleSearch = (searchWord: string) => {
  setSearch(searchWord);
  const filteredItems = filterItems(searchWord);
  setFilteredAnnoucements(filteredItems);
  setShowFiltered(true);
  if (searchWord.length == 0) {
    setShowFiltered(false);
  }
};
let content = showFiltered ? filteredAnnouncements : dummyAnnouncements;

return (
  <View>
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
        },
      ]}
    >
      <TextInput placeholder="Search" onChangeText={handleSearch} />
    </View>
    <ScrollView>
      {content.map((item) => {
        return (
          <Text style={styles.scrollItem} key={item.key}>
            {item.announcement}
          </Text>
        );
      })}
    </ScrollView>
  </View>
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
