import { StyleSheet, View,TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [gameState,setGameState] = useState<Array<object>>([])

  useEffect(() => {
    (
      async () => {
        const response = await fetch('https://www.freetogame.com/api/games')

        const data = await response.json()
        
        setGameState(data)
      }
    )()
  },[])


  return (
    <View style={styles.container}>
      <View style={styles.buscador}>
        <TextInput style={styles.textInput} placeholder='Escribe un juego'/>
        <View style={styles.button}>
          <Button title='Buscar'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25
  },
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
