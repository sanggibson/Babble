import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthProvider from '@/providers/AuthProvider';
import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';


export default function RootLayout() {
  
  useEffect(() => {
    const run = async () => {
      if (Platform.OS === "android") {
        await PermissionsAndroid.requestMultiple([
          "android.permission.POST_NOTIFICATIONS",
          "android.permission.BLUETOOTH_CONNECT",
        ]);
      }
    };
    run();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
