import { Stack, useSegments } from 'expo-router';
import { StatusBar } from 'react-native';
import { UserProvider } from '../context/UserContext';
import Header from '../components/onboarding/Header';

export default function Layout({ children }) {
  const segments = useSegments();
  const currentRoute = segments[segments.length - 1];

  return (
    <UserProvider>
      <StatusBar barStyle="light-content" backgroundColor={'#121212'} />
      <Header title={currentRoute} routeName={currentRoute} />
      <Stack screenOptions={{ headerShown: false, animation: 'fade' }} />
    </UserProvider>
  );
}
