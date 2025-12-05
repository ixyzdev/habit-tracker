import { Tabs } from "expo-router";

import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "coral",
      }}
    >
      {/* vista del hogar  */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color={color} />
            );
          },
        }}
      />

      {/* vista del login  */}
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
        }}
      />
    </Tabs>
  );
}
