import { FlatList,Text,StyleSheet, View,Image } from "react-native"

export const GameList = ({gameState}:any) => {
    return(
        <FlatList
            data={gameState}
            renderItem={({item,index}) => {
            return (
                <View>
                    <Image source={{uri: item.thumbnail}} style={{width: 450, height: 200}}/>
                     <Text key={index} style={styles.text}>{item.title}</Text>
                </View>
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