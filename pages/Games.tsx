import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { GameSearch } from '../components/GameSearch';
import { GameList } from '../components/GameList';
import { GameFindDto } from '../types/GameFind.dto';

export function Games() {
  const [gameState,setGameState] = useState<Array<GameFindDto>>([])

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
    marginTop: 30
  }
});
