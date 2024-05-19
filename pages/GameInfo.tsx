import { useRoute } from "@react-navigation/native"
import { View,Text } from "react-native"
import { GameInfoRouteProp } from "../types/Params"

export const GameInfo = () => {
    const route = useRoute<GameInfoRouteProp>()
    const {gameId}= route.params
    
    return(
        <View>
            <Text>{gameId}</Text>
        </View>
    )
}