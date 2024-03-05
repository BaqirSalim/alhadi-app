import { Tabs } from "expo-router";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: () => (
            <MaterialIcons name="calendar-today" size={24} color="black" />
          ),
        }}
      />
      
      <Tabs.Screen
        name="announcements"
        options={{
          tabBarLabel: "Announcements",
          tabBarIcon: () => (
            <FontAwesome name="bullhorn" size={24} color="black" />
          ),
        }}
      />
      
      <Tabs.Screen
        name="quran"
        options={{
          tabBarLabel: "Verse of the Day",
          tabBarIcon: () => <Entypo name="book" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
