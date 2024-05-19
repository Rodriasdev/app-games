import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    GameList: undefined;
    GameInfo : {gameId:string}
}

export type GameListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'GameList'>;
export type GameInfoRouteProp = RouteProp<RootStackParamList, 'GameInfo'>;