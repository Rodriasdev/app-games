import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";


interface Game {
    id: string;
    title: string;
    thumbnail: string;
}

interface Props {
    gameState: Game[];
}

export const GameList: React.FC<Props> = ({ gameState }) => {

    const navigation = useNavigation()

    const handleGamePress = (id: string) => {
        navigation.navigate("GameInfo", {gameId:id})
    };

    return (
        <FlatList
            data={gameState}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleGamePress(item.id)}>
                    <View style={styles.container} key={item.id}>
                        <Image source={{ uri: item.thumbnail }} style={styles.image} />
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
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
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
});
