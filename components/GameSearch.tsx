import { StyleSheet } from "react-native"
import { View,TextInput,Button } from "react-native";

export const GameSearch = () => {
    return(
        <View style={styles.buscador}>
            <TextInput style={styles.textInput} placeholder='Escribe un juego'/>
            <View style={styles.button}>
            <Button title='Buscar'/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#999',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 10,
      width: 300,
      marginStart: 15
    },
    button: {
      width: 100,
      marginStart: 20,
      marginTop: 8
    },
    buscador: {
      flexDirection: 'row'
    }
  });