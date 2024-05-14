import { useRoute } from "@react-navigation/native"
import { GameFindDto } from "../types/GameFind.dto"
import { View,Text } from "react-native"

export const GameInfo = () => {
    const {gameId}:string = useRoute().params

    
    return(
        <View>
            <Text>{gameId}</Text>
        </View>
    )
}