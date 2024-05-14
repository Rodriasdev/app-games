import { FlatList,Text,StyleSheet } from "react-native"
export const GameList = ({gameState}:any) => {
    return(
        <FlatList
            data={gameState}
            renderItem={({item,index}) => {
            return (
                <Text key={index} style={styles.text}>{item.title}</Text>
            )
        }}
    />
    )
}

const styles = StyleSheet.create({
    text: {
        marginStart: 15
      }
})