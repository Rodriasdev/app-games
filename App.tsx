import { Games } from "./pages/Games";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GameInfo } from "./pages/GameInfo";

const Stack = createNativeStackNavigator()


export default function App() {

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="GameList" component={Games} options={{headerShown:false}}/>
        <Stack.Screen name="GameInfo" component={GameInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


