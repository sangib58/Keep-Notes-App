import { Stack } from "expo-router";
import { AuthProvider } from "@/contexts/AuthContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ff8c00",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          contentStyle: {
            backgroundColor: "#fff",
            paddingTop: 10,
            paddingHorizontal: 10,
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
