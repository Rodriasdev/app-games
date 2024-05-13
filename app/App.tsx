import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { ListGames } from './(tabs)/ListGame';


export default function RootLayout() {


  return (
      <Stack>
        <Stack.Screen initialParams={<ListGames/>} name="games"  options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  )
}
