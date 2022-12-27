import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      defaultScreenOptions={{
        headerShown: false,
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
