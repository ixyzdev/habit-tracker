import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* vista del hogar  */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
