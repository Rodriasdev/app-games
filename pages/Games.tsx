import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { GameSearch } from '../components/GameSearch';
import { GameList } from '../components/GameList';

export interface GameFind {
  title:string
  thumbnail: string
}

export function Games() {
  const [gameState,setGameState] = useState<Array<GameFind>>([])

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
      <GameSearch/>
      <GameList gameState={gameState}/>
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
  },
  text: {
    marginStart: 15
  }
});
