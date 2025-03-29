import { Stack, useSegments } from "expo-router";
import { StatusBar } from "react-native";
import { UserProvider } from "../context/UserContext";
import Header from "../components/onboarding/Header";
import BackgroundProvider from "../components/providers/BackgroundProvider";

export default function Layout() {
  const segments = useSegments();
  const currentRoute = segments[segments.length - 1];

  return (
    <UserProvider>
      <BackgroundProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <Header title={currentRoute} routeName={currentRoute} />
        <Stack screenOptions={{
          headerShown: false,
          animation: "fade",
          contentStyle: { backgroundColor: "transparent" }
        }} />
      </BackgroundProvider>
    </UserProvider>
  );
}
