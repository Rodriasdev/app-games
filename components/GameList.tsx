import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { GameFindDto } from "../types/GameFind.dto";
import { GameListNavigationProp } from "../types/Params";


interface Props {
    gameState: GameFindDto[];
}

export const GameList: React.FC<Props> = ({ gameState }) => {

    const navigation = useNavigation<GameListNavigationProp>();

    const handleGamePress = (game: GameFindDto) => {
        navigation.navigate("GameInfo", { gameId: game.id });
    };

    return (
        <FlatList
            data={gameState}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleGamePress(item)} key={item.id}>
                    <View style={styles.container}>
                        <Image source={{ uri: item.thumbnail }} style={styles.image} />
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
    },
});
