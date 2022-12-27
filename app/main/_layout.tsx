import { Tabs } from "expo-router";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import ModalHeader from "../../components/ModalHeader";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              as={MaterialCommunityIcons}
              color={color}
              size={size}
              name="home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="consultation"
        options={{
          title: "Consultation",
          header: (props) => <ModalHeader {...props} />,
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              as={MaterialCommunityIcons}
              color={color}
              size={size}
              name="chat"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color, focused, size }) => (
            <Icon
              as={MaterialCommunityIcons}
              color={color}
              size={size}
              name="calendar"
            />
          ),
        }}
      />

      {/* hidden tabs */}
      <Tabs.Screen
        name="medicine"
        options={{
          header: (props) => <ModalHeader {...props} />,
          title: "Medicine",
          href: null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          header: (props) => <ModalHeader hideActions {...props} />,
          title: "Cart",
          href: null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          header: (props) => <ModalHeader hideActions {...props} />,
          title: "Profile",
          href: null,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Tabs>
  );
}
