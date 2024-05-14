import { FlatList,Text,StyleSheet, View,Image } from "react-native"

export const GameList = ({gameState}:any) => {
    return(
        <FlatList
            data={gameState}
            renderItem={({item,index}) => {
            return (
                <View style={styles.container}>
                    <Image source={{uri: item.thumbnail}} style={styles.image}/>
                     <Text key={index} style={styles.text}>{item.title}</Text>
                </View>
            )
        }}
    />
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical:20
    },
    text: {
        alignSelf:'center',
        fontSize:20
      },
    image: {
        width:450,
        height:200,
        borderRadius:10
    }
})