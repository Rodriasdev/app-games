import { ListGames } from "./pages/GameList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()


export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="GameList" component={ListGames} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


