import { Stack } from "expo-router";
import ModalHeader from "../../../../components/ModalHeader";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: (props) => <ModalHeader hideActions {...props} />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Consultation",
        }}
      />
      <Stack.Screen
        name="checkpoint-form"
        options={{
          title: "Checkpoint Form",
        }}
      />
      <Stack.Screen
        name="waiting-room"
        options={{
          title: "Waiting Room",
        }}
      />
    </Stack>
  );
}
